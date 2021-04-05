import React from 'react';
import { Container, Image, styles } from './styles';

const SplashScreen = () => {
  return (
    <Container>
      <Image
        accessibilityLabel="Logo Fluke"
        source={require('../../assets/images/logo_fluke.png')}
        style={styles.logoStyle}
      />
    </Container>
  );
};

export default SplashScreen;
