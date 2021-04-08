import React, { useMemo } from 'react';
import {
  Container,
  InformativeCard,
  InformativeText,
  HeaderText,
  RowContent,
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
import { PackageInformationData } from '../../hooks/types';
import { useInformation } from '../../hooks/information';

interface IBuyPack {
  buying: 0 | 1;
  packageInformation: PackageInformationData;
}
const BuyPack = ({ buying }: IBuyPack) => {
  const { packageInformation } = useInformation();

  const renderHeader = useMemo(() => {
    switch (buying) {
      default: {
        return <HeaderText>meu pacote</HeaderText>;
      }
    }
  }, [buying]);
  return (
    <Container>
      <Content>
        {renderHeader}

        <InformativeCard>
          <RowContent>
            <DateContent>
              <InformativeText>pacote atual</InformativeText>
              <InformativeTextSupport>até 11/06/2021</InformativeTextSupport>
            </DateContent>
            <Periodicity>
              <PeriodicityText>mensal</PeriodicityText>
            </Periodicity>
          </RowContent>
          <AvailableDataRow>
            <AvailableDataContent>
              <AvailableDataIcon name="signal" />
              <AvailableDataValue>
                {Number((packageInformation.data.available / 1000).toFixed(2)) || 0}
                <AvailableDataUnit>gb</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
            <AvailableDataContent>
              <AvailableDataIcon name="phone-alt" />
              <AvailableDataValue>
                {packageInformation.minutes.available || 0} <AvailableDataUnit>min</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
            <AvailableDataContent>
              <AvailableDataIcon name="comment" />
              <AvailableDataValue>
                0 <AvailableDataUnit>sms</AvailableDataUnit>
              </AvailableDataValue>
            </AvailableDataContent>
          </AvailableDataRow>
        </InformativeCard>

        <RowContent>
          <HeaderText>adicionais</HeaderText>
          <Button>
            <ButtonText>comprar</ButtonText>
            <ButtonIcon name="plus" />
          </Button>
        </RowContent>
      </Content>
    </Container>
  );
};

export default BuyPack;
