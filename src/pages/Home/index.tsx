import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import BottomSheet from '@gorhom/bottom-sheet';

import { Container, Content, Header, Logo, Loading, CardContainer, styles, logoSource } from './styles';
import Card from '../../components/Card';

import BuyPack from '../BuyPack';

import { useInformation } from '../../hooks/information';

interface IHome {
  navigation: NavigationProp<any, any>;
}
const Home: React.FC<IHome> = ({ navigation }) => {
  const { packageInformation, getPackageInformation } = useInformation();
  const [buying, setBuying] = useState<0 | 1>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getPackageInformation();
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['8%', '85%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBuying(index ? 1 : 0);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getPackageInformation();
    setRefreshing(false);
  }, []);

  const renderCards = useMemo(() => {
    if (packageInformation) {
      return (
        <CardContainer key={JSON.stringify(packageInformation)}>
          <Card title="meus minutos" data={packageInformation?.minutes} text="min" />
          <Card title="meus dados" data={packageInformation?.data} text="gb" />
        </CardContainer>
      );
    }
    return <Loading size="large" color="#00ff00" />;
  }, [packageInformation]);
  return (
    <Container>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Header>
          <Logo source={logoSource} style={styles.logoStyle}></Logo>
        </Header>
        <Content>{renderCards}</Content>
      </ScrollView>
      <BottomSheet
        style={styles.bottomSheetStyle}
        ref={bottomSheetRef}
        index={buying}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BuyPack buying={buying} packageInformation={packageInformation} navigation={navigation} />
      </BottomSheet>
    </Container>
  );
};

export default Home;
