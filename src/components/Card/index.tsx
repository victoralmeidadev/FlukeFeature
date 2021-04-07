import React, { useCallback } from 'react';
import ProgressCircle from 'react-native-progress-circle';

import { CardContainer, Title, CardComponent, NumberText, SupportText, BottomText, width, height } from './styles';

import { PackageType } from '../../hooks/types';

interface CardProps {
  text: 'min' | 'gb';
  title: string;
  data: PackageType;
}

function Card({ title, data, text }: CardProps) {
  const convertGigabyte = useCallback((value) => {
    return Number((value / 1000).toFixed(2));
  }, []);
  const showAvailable = useCallback(() => {
    const { available } = data;
    if (text === 'min') {
      return available;
    } else {
      return Number((available / 1000).toFixed(2));
    }
  }, []);

  const showPercentage = useCallback(() => {
    const { topup, subscription, available } = data;
    console.log({ topup, subscription, available });
    return (available / (topup + subscription)) * 100;
  }, []);

  const showTotal = useCallback(() => {
    const { topup, subscription } = data;
    const total = topup + subscription;

    if (text === 'min') {
      return `de ${total} min`;
    } else {
      return `de ${convertGigabyte(total)} gb`;
    }
  }, []);

  return (
    <CardContainer>
      <Title>{title}</Title>
      <CardComponent style={{ width: width * 0.8, height: height * 0.5 }}>
        <ProgressCircle
          percent={showPercentage()}
          radius={width * 0.3}
          borderWidth={5}
          color="#fff"
          shadowColor="#34e567"
          bgColor="#0ef500">
          <NumberText>
            {showAvailable()} <SupportText>{text}</SupportText>
          </NumberText>
          <BottomText>disponíveis</BottomText>
        </ProgressCircle>
        <BottomText>{showTotal()}</BottomText>
      </CardComponent>
    </CardContainer>
  );
}

export default Card;
