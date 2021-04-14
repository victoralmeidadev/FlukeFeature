import React, { useCallback, useState, useEffect, useRef } from 'react';
import { format, parseISO, addDays } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import DatePicker from 'react-native-date-picker';
import BottomSheet from '@gorhom/bottom-sheet';

import {
  Container,
  GraphContainer,
  GraphItemContent,
  GraphItemBar,
  GraphItemDay,
  GraphItemTitle,
  GraphPeriodPicker,
  GraphPeriodPickerText,
  BottomSheetWrapper,
} from './styles';
import { useInformation } from '../../hooks/information';
import { RecordData } from '../../hooks/types';

import { formatMBShortNumber } from '../../utils';

interface IConsumeChart {
  y: 'data' | 'voice';
}

const ConsumeChart: React.FC<IConsumeChart> = ({ y }) => {
  const { getRecords } = useInformation();

  const PERIOD = 3;
  const [startDate, setStartDate] = useState(new Date());
  const [totalPeriodData, setTotalPeriodData] = useState<Omit<RecordData, 'date'>>({ data: 0, voice: 0 });
  const [data, setData] = useState<RecordData[] | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const calcHeightScale = useCallback(
    (period = data) => {
      const total = period.reduce(
        (accumulator, item) => {
          return {
            data: accumulator.data + item.data,
            voice: accumulator.voice + item.voice,
          };
        },
        { data: 0, voice: 0 },
      );
      setTotalPeriodData(total);
    },
    [data],
  );

  const handleGetPeriod = useCallback(
    async (start: Date = startDate) => {
      const endPeriod = addDays(start, PERIOD);
      const endDateFormatted = format(endPeriod, 'yyyy-MM-dd');
      const startDateFormatted = format(start, 'yyyy-MM-dd');

      const result = await getRecords(startDateFormatted, endDateFormatted);
      if (result.length) {
        calcHeightScale(result);
        setData(result);
        bottomSheetRef.current?.close();
      } else {
        setData(null);
        bottomSheetRef.current?.close();
      }
    },
    [startDate, bottomSheetRef],
  );

  useEffect(() => {
    handleGetPeriod();
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const INITIAL_HEIGHT = 10;
      const MAX_HEIGHT = 150;
      const WIDTH = 10;
      const BORDER_RADIUS = WIDTH / 2;
      const HEIGHT =
        item?.[y] === 0 ? INITIAL_HEIGHT : (item?.[y] / totalPeriodData?.[y]) * MAX_HEIGHT + INITIAL_HEIGHT;
      const day = format(parseISO(item.date), 'iii', { locale: ptBR });
      console.log({ item });
      if (item?.date) {
        return (
          <GraphItemContent key={item.date}>
            <GraphItemTitle>{y === 'data' ? formatMBShortNumber(item?.[y]) : item?.[y]}</GraphItemTitle>
            <GraphItemBar width={WIDTH} height={HEIGHT} borderRadius={BORDER_RADIUS}></GraphItemBar>
            <GraphItemDay>{day}</GraphItemDay>
          </GraphItemContent>
        );
      } else {
        return (
          <GraphItemContent key={item.date}>
            <GraphItemTitle>sem histórico</GraphItemTitle>
          </GraphItemContent>
        );
      }
    },
    [totalPeriodData],
  );

  const handleChangeDate = useCallback((date: Date) => {
    setStartDate(date);
  }, []);

  const getPeriodText = useCallback(() => {
    const endPeriod = addDays(startDate, PERIOD);
    const startPeriodFormatted = format(startDate, 'dd');
    const endPeriodFormatted = format(endPeriod, 'dd');
    const monthFormatted = format(startDate, 'MMM', { locale: ptBR });
    return `${startPeriodFormatted} - ${endPeriodFormatted} de ${monthFormatted}`;
  }, [startDate]);
  return (
    <Container>
      <GraphContainer>
        {data &&
          data.map((item) => {
            return renderItem({ item });
          })}
        {!data && <GraphItemTitle>período sem histórico</GraphItemTitle>}
      </GraphContainer>
      <GraphPeriodPicker onPressIn={() => bottomSheetRef.current?.expand()}>
        <GraphPeriodPickerText>{getPeriodText()}</GraphPeriodPickerText>
      </GraphPeriodPicker>

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['0%', '100%']}>
        <BottomSheetWrapper>
          <DatePicker date={startDate} onDateChange={handleChangeDate} mode="date" />
          <GraphPeriodPicker onPressIn={() => handleGetPeriod(startDate)}>
            <GraphPeriodPickerText>confirmar</GraphPeriodPickerText>
          </GraphPeriodPicker>
        </BottomSheetWrapper>
      </BottomSheet>
    </Container>
  );
};

export default ConsumeChart;
