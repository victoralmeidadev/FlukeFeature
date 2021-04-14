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
  Loading,
  GraphPeriodPickerTextAux,
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
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
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
      if (!loading) {
        setLoading(true);
        const endPeriod = addDays(start, PERIOD);
        const endDateFormatted = format(endPeriod, 'yyyy-MM-dd');
        const startDateFormatted = format(start, 'yyyy-MM-dd');

        const result = await getRecords(startDateFormatted, endDateFormatted);
        if (result.length) {
          calcHeightScale(result);
          setData(result);
          setLoading(false);
          bottomSheetRef.current?.close();
        } else {
          setData(null);
          setLoading(false);
          bottomSheetRef.current?.close();
        }
      }
    },
    [startDate, bottomSheetRef, loading],
  );

  useEffect(() => {
    handleGetPeriod();
  }, []);

  useEffect(() => {
    if (!current) {
      handleGetPeriod();
    }
  }, [current]);

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
    [totalPeriodData, loading],
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
          !loading &&
          data.map((item) => {
            return renderItem({ item });
          })}
        {!data && !loading && <GraphItemTitle>período sem histórico</GraphItemTitle>}
        {loading && <Loading size="large" color="#333" />}
      </GraphContainer>
      <GraphPeriodPicker onPress={() => bottomSheetRef.current?.snapTo(1, true)}>
        <GraphPeriodPickerText>{getPeriodText()}</GraphPeriodPickerText>
        <GraphPeriodPickerTextAux>clique para buscar período</GraphPeriodPickerTextAux>
      </GraphPeriodPicker>

      <BottomSheet
        ref={bottomSheetRef}
        index={current}
        snapPoints={['0%', '100%']}
        onChange={(index) => setCurrent(index)}>
        <BottomSheetWrapper>
          <DatePicker date={startDate} onDateChange={handleChangeDate} mode="date" />
          <GraphPeriodPicker onPressIn={() => handleGetPeriod(startDate)}>
            {loading ? <Loading size="large" color="#333" /> : <GraphPeriodPickerText>confirmar</GraphPeriodPickerText>}
          </GraphPeriodPicker>
        </BottomSheetWrapper>
      </BottomSheet>
    </Container>
  );
};

export default ConsumeChart;
