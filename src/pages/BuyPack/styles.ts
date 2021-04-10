import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export { Container } from '../styles';

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
`;
export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 10px;
`;

export const Button = styled.Pressable`
  border-radius: 10px;
  background-color: #0ef500;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: Nunito-Regular;
  padding: 0 5px;
  text-transform: lowercase;
`;

export const ButtonIcon = styled(Icon)`
  font-size: 18px;
  padding: 0 5px;
  color: #333;
`;

export const HeaderText = styled.Text`
  font-size: 25px;
  color: #333;
  font-family: Nunito-ExtraBold;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

export const InformativeCard = styled.View`
  background-color: #eee;
  border-radius: 30px;
  margin: 10px;
  padding: 10px;
  align-self: stretch;
`;

export const InformativeText = styled.Text`
  font-size: 16px;
  color: #222;
  font-family: Nunito-ExtraBold;
`;

export const InformativeTextSupport = styled.Text`
  font-size: 14px;
  color: #777;
  font-family: Nunito-Light;
`;

export const DateContent = styled.View`
  padding: 0 10px;
`;

export const Periodicity = styled.View`
  background-color: #fff;
  border-radius: 16px;
  padding: 5px 20px;
`;
export const PeriodicityText = styled.Text`
  font-size: 16px;
  color: #222;
  font-family: Nunito-ExtraBold;
`;

export const AvailableDataRow = styled.View`
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AvailableDataContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AvailableDataIcon = styled(Icon)`
  font-size: 18px;
  margin: 5px;
  color: #ccc;
`;
export const AvailableDataValue = styled.Text`
  font-size: 18px;
  margin: 5px;
  font-family: Nunito-Bold;
`;
export const AvailableDataUnit = styled.Text`
  font-size: 15px;
  margin: 5px;
  font-family: Nunito-Light;
`;
