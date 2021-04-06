import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const Text = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Logo = styled.Image`
  width: 33%;
`;

export const styles = StyleSheet.create({
  logoStyle: { resizeMode: 'contain' },
});