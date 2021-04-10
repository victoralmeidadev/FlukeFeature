import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export { Container, Header, Text, Logo, styles } from '../styles';

export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;
export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

export const DisplayNumber = styled.Text`
  color: #333;
  font-size: 16px;
  font-family: Nunito-ExtraBold;
  flex-wrap: nowrap;
  padding: 10px 20px;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const PackName = styled.Text`
  color: #333;
  font-size: 16px;
  font-family: Nunito-ExtraBold;
  margin: 5px;
`;
export const PackIcon = styled(Icon)`
  font-size: 16px;
  margin: 5px;
  color: #333;
`;

export const RightContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Button = styled.Pressable``;
export const ButtonAddIcon = styled(Icon)`
  font-size: 20px;
  margin: 5px;
  color: #0ef500;
`;
export const ButtonMinusIcon = styled(Icon)`
  font-size: 20px;
  margin: 5px;
  color: #777;
`;

export const HorizontalRow = styled.View`
  height: 2px;
  background-color: #000;
  align-self: stretch;
`;

export const PurchaseButton = styled.Pressable`
  background-color: #0ef500;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  height: 50px;
`;

export const PurchaseButtonText = styled.Text`
  color: #333;
  font-size: 22px;
  font-family: Nunito-ExtraBold;
  margin: 5px;
`;

export const Loading = styled.ActivityIndicator``;
