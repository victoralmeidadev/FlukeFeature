import React from 'react';
import { Container, Header, Logo, styles, logoSource } from './styles';

const History = () => {
  return (
    <Container>
      <Header>
        <Logo source={logoSource} style={styles.logoStyle}></Logo>
      </Header>
    </Container>
  );
};

export default History;
