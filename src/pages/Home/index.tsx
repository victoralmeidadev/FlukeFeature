import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import { Container, Content, Header, Logo, Loading, CardContainer, styles, logoSource } from './styles';
import Card from '../../components/Card';

import BuyPack from '../BuyPack';

import { useInformation } from '../../hooks/information';

const Home = () => {
  const { packageInformation, getPackageInformation } = useInformation();
  const [buying, setBuying] = useState<0 | 1>(0);

  useEffect(() => {
    getPackageInformation();
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['8%', '85%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBuying(index);
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
      <BottomSheet
        style={styles.bottomSheetStyle}
        ref={bottomSheetRef}
        index={buying}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BuyPack buying={buying} packageInformation={packageInformation} />
      </BottomSheet>
    </Container>
  );
};

export default Home;
