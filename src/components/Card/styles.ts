import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const CardContainer = styled.View`
  background-color: #fff;
  align-items: center;
`;
export const CardComponent = styled.View`
  background-color: #0ef500;
  border-radius: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  margin: 10px;
  font-family: Nunito-Regular;
`;

export const NumberText = styled.Text`
  font-size: 60px;
  color: #111;
  font-family: Nunito-ExtraBold;
  margin: 0;
`;

export const SupportText = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: Nunito-Regular;
  margin: 0;
`;
export const BottomText = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: Nunito-Bold;
  margin: 0;
`;
