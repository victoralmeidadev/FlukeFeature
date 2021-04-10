import React, { useMemo, useCallback } from 'react';
import { NavigationProp } from '@react-navigation/native';

import {
  Container,
  InformativeCard,
  InformativeText,
  HeaderText,
  WrapperRow,
  Content,
  Button,
  ButtonText,
  ButtonIcon,
  DateContent,
  InformativeTextSupport,
  Periodicity,
  PeriodicityText,
  AvailableDataRow,
  AvailableDataContent,
  AvailableDataIcon,
  AvailableDataUnit,
  AvailableDataValue,
} from './styles';
import { convertToGB } from '../../utils';
import { PackageInformationData } from '../../hooks/types';
import { useInformation } from '../../hooks/information';

interface IBuyPack {
  buying: 0 | 1;
  packageInformation: PackageInformationData;
  navigation: NavigationProp<any, any>;
}
const BuyPack: React.FC<IBuyPack> = ({ buying, navigation }) => {
  const { packageInformation } = useInformation();

  const renderHeader = useMemo(() => {
    switch (buying) {
      default: {
        return <HeaderText>meu pacote</HeaderText>;
      }
    }
  }, [buying]);

  const handlePurchase = useCallback(() => {
    navigation.navigate('Purchase');
  }, [navigation]);
  return (
    <Container>
      <Content>
        {renderHeader}

        <InformativeCard>
          <WrapperRow>
            <DateContent>
              <InformativeText>pacote atual</InformativeText>
              <InformativeTextSupport>até 11/06/2021</InformativeTextSupport>
            </DateContent>
            <Periodicity>
              <PeriodicityText>mensal</PeriodicityText>
            </Periodicity>
          </WrapperRow>
          <AvailableDataRow>
            <AvailableDataContent>
              <AvailableDataIcon name="signal" />
              <AvailableDataValue>
                {convertToGB(packageInformation?.data?.available) || 0}
                <AvailableDataUnit> gb</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
            <AvailableDataContent>
              <AvailableDataIcon name="phone-alt" />
              <AvailableDataValue>
                {packageInformation?.minutes?.available || 0}
                <AvailableDataUnit> min</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
            <AvailableDataContent>
              <AvailableDataIcon name="comment" />
              <AvailableDataValue>
                0<AvailableDataUnit> sms</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
          </AvailableDataRow>
        </InformativeCard>

        <WrapperRow>
          <HeaderText>adicionais</HeaderText>
          <Button onPressIn={handlePurchase}>
            <ButtonText>comprar</ButtonText>
            <ButtonIcon name="plus" />
          </Button>
        </WrapperRow>
      </Content>
    </Container>
  );
};

export default BuyPack;
