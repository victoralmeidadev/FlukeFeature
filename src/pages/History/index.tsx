import React, { useMemo, Fragment } from 'react';
import { Container, HeaderText, HeaderAuxText } from './styles';

import ConsumeChart from '../../components/ConsumeChart';

const History = ({ route }) => {
  const renderHeader = useMemo(() => {
    if (route.name === 'Minutos') {
      return (
        <Fragment key={route.key}>
          <HeaderText>utilização de minutos</HeaderText>
          <HeaderAuxText>(min)</HeaderAuxText>
        </Fragment>
      );
    }
    return (
      <Fragment key={route.key}>
        <HeaderText>consumo de dados</HeaderText>
        <HeaderAuxText></HeaderAuxText>
      </Fragment>
    );
  }, [route]);

  const renderChart = useMemo(() => {
    if (route.name === 'Minutos') {
      return <ConsumeChart key={route.key} y="voice" />;
    }
    return <ConsumeChart key={route.key} y="data" />;
  }, []);
  return (
    <Container>
      {renderHeader}
      {renderChart}
    </Container>
  );
};

export default History;
