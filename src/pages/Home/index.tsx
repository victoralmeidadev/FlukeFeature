import React, { useEffect, useCallback, useState, useMemo, Fragment } from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/Card';
import { Container, Content, Header, Logo, Loading, styles } from './styles';

import { useInformation } from '../../hooks/information';

const Home = () => {
  const { packageInformation, getPackageInformation } = useInformation();

  useEffect(() => {
    getPackageInformation();
  }, []);

  const renderCards = useMemo(() => {
    if (packageInformation) {
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          <Card title="meus minutos" data={packageInformation?.minutes} text="min" />
          <Card title="meus dados" data={packageInformation?.data} text="gb" />
        </ScrollView>
      );
    }
    return <Loading size="large" color="#00ff00" />;
  }, [packageInformation]);
  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/images/logo_fluke.png')} style={styles.logoStyle}></Logo>
      </Header>
      <Content>{renderCards}</Content>
    </Container>
  );
};

export default Home;
