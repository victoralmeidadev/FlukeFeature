import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Text = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Image = styled.Image`
  width: 33%;
`;

export const styles = StyleSheet.create({
  logoStyle: { resizeMode: 'contain' },
});
