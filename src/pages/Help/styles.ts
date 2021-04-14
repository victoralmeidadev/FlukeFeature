import styled from 'styled-components/native';

export { Container } from '../styles';

export const Content = styled.ScrollView`
  padding: 20px;
`;
export const QuestionWrapper = styled.View`
  margin: 10px;
`;

export const QuestionText = styled.Text`
  font-size: 18px;
  font-family: Nunito-Bold;
  color: #333;
`;

export const AnswerWrapper = styled.View`
  margin: 10px 0;
`;
export const AnswerText = styled.Text`
  font-size: 15px;
  font-family: Nunito-Regular;
  color: #333;
`;
