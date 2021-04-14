import React from 'react';
import { Container, Content, QuestionWrapper, QuestionText, AnswerWrapper, AnswerText } from './styles';
import { FAQ_LIST } from './constants';

const Help = () => {
  return (
    <Container>
      <Content>
        {FAQ_LIST.map((item) => {
          return (
            <QuestionWrapper key={Math.random()}>
              <QuestionText>{item.question}</QuestionText>
              <AnswerWrapper>
                <AnswerText>{item.answer}</AnswerText>
              </AnswerWrapper>
            </QuestionWrapper>
          );
        })}
      </Content>
    </Container>
  );
};

export default Help;
