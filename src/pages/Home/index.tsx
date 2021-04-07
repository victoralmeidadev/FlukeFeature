import React, { useEffect, useMemo } from 'react';

import Card from '../../components/Card';
import { Container, Content, Header, Logo, Loading, CardContainer, styles, logoSource } from './styles';

import { useInformation } from '../../hooks/information';

const Home = () => {
  const { packageInformation, getPackageInformation } = useInformation();

  useEffect(() => {
    getPackageInformation();
  }, []);

  const renderCards = useMemo(() => {
    if (packageInformation) {
      return (
        <CardContainer>
          <Card title="meus minutos" data={packageInformation?.minutes} text="min" />
          <Card title="meus dados" data={packageInformation?.data} text="gb" />
        </CardContainer>
      );
    }
    return <Loading size="large" color="#00ff00" />;
  }, [packageInformation]);
  return (
    <Container>
      <Header>
        <Logo source={logoSource} style={styles.logoStyle}></Logo>
      </Header>
      <Content>{renderCards}</Content>
    </Container>
  );
};

export default Home;
