import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export { Container, Text, Logo, styles } from '../styles';

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;
export const Header = styled.View`
  flex: 0.4;
  background-color: #ddd;
  align-items: center;
  flex-direction: row;
  padding: 30px;
`;

export const ProfilePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 5px;
`;

export const ProfileName = styled.Text`
  font-size: 30px;
  font-family: Nunito-ExtraBold;
  margin: 10px 20px;
`;

export const WrapperButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  elevation: 2;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const MenuText = styled.Text`
  font-size: 22px;
  font-family: Nunito-Regular;
`;
export const MenuIcon = styled(Icon)`
  font-size: 22px;
  color: #ccc;
  width: 40px;
`;

export const ChevronIcon = styled(Icon)`
  font-size: 22px;
  color: #ccc;
`;
