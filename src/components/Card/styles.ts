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
  font-size: 22px;
  margin: 10px;
  font-weight: bold;
`;

export const NumberText = styled.Text`
  font-size: 70px;
  color: #111;
  font-weight: 300;
  margin: 0;
`;

export const SupportText = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: 100;
  margin: 0;
`;
export const BottomText = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin: 0;
`;
