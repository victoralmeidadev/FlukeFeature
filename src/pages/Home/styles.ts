import styled from 'styled-components/native';
export { Container, Header, Text, Logo, styles, logoSource } from '../styles';

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #fff;
  align-items: center;
`;

export const CardContainer = styled.ScrollView.attrs({
  style: { alignItems: 'center', justifyContent: 'center' },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Loading = styled.ActivityIndicator``;
