import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';

import {
  Container,
  Content,
  WrapperRow,
  DisplayNumber,
  PackIcon,
  PackName,
  LeftContent,
  RightContent,
  Button,
  ButtonAddIcon,
  ButtonMinusIcon,
  HorizontalRow,
  PurchaseButton,
  PurchaseButtonText,
} from './styles';

import { useInformation } from '../../hooks/information';

enum Section {
  data = 'dados móveis',
  minute = 'minutos',
  message = 'mensagens',
}

type Operation = 'increase' | 'decrease';

enum MinPackValue {
  data = 1,
  minute = 30,
  message = 10,
}

interface IPurchase {
  navigation: NavigationProp<any, any>;
}

const Purchase: React.FC<IPurchase> = ({ navigation }) => {
  const { handleTopupPurchase } = useInformation();

  const [data, setData] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [messages, setMessages] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handlePackButton = useCallback((operation: Operation, section: Section) => {
    switch (section) {
      case Section.data: {
        setData((data) => {
          return operation === 'increase' ? data + MinPackValue.data : data > 0 ? data - MinPackValue.data : 0;
        });
        break;
      }
      case Section.minute: {
        setMinutes((data) => {
          return operation === 'increase' ? data + MinPackValue.minute : data > 0 ? data - MinPackValue.minute : 0;
        });
        break;
      }
      case Section.message: {
        setMessages((data) => {
          return operation === 'increase' ? data + MinPackValue.message : data > 0 ? data - MinPackValue.message : 0;
        });
        break;
      }
    }
  }, []);

  const getTotalPrice = useCallback(() => {
    const dataPrice = data * 12;
    const minutesPrice = minutes * 0.1;
    const messagesPrice = messages * 0.1;
    const totalPrice = Number((dataPrice + minutesPrice + messagesPrice).toFixed(2));
    setTotalPrice(totalPrice);
  }, [data, minutes, messages]);

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  const renderSections = useMemo(() => {
    const renderList = [
      {
        title: Section.data,
        sectionIcon: 'signal',
        sectionHandler: (operation: Operation) => handlePackButton(operation, Section.data),
        state: data,
        unity: 'gb',
      },
      {
        title: Section.minute,
        sectionIcon: 'phone-alt',
        sectionHandler: (operation: Operation) => handlePackButton(operation, Section.minute),
        state: minutes,
        unity: 'min',
      },
      {
        title: Section.message,
        sectionIcon: 'comment',
        sectionHandler: (operation: Operation) => handlePackButton(operation, Section.message),
        state: messages,
        unity: 'SMS',
      },
    ];

    return renderList.map((item) => {
      return (
        <WrapperRow key={item.title}>
          <LeftContent>
            <PackIcon name={item.sectionIcon} />
            <PackName>{item.title}</PackName>
          </LeftContent>
          <RightContent>
            <Button onPressIn={() => item.sectionHandler('decrease')}>
              <ButtonMinusIcon name="minus" />
            </Button>
            <DisplayNumber>
              {item.state} {item.unity}
            </DisplayNumber>
            <Button onPressIn={() => item.sectionHandler('increase')}>
              <ButtonAddIcon name="plus" />
            </Button>
          </RightContent>
        </WrapperRow>
      );
    });
  }, [data, minutes, messages, handlePackButton]);

  const handlePurchase = useCallback(() => {
    handleTopupPurchase(data * 1000, minutes);
    navigation.goBack();
  }, [data, minutes]);
  const renderButton = useMemo(() => {
    if (totalPrice > 0) {
      return (
        <PurchaseButton onPressIn={handlePurchase} android_ripple={{ radius: 10 }}>
          <PurchaseButtonText>comprar</PurchaseButtonText>
        </PurchaseButton>
      );
    }
  }, [totalPrice]);
  return (
    <Container>
      <Content>
        {renderSections}
        <HorizontalRow />

        <WrapperRow>
          <LeftContent>
            <PackIcon name="dollar-sign" />
            <PackName>valor total</PackName>
          </LeftContent>
          <DisplayNumber>R$ {totalPrice}</DisplayNumber>
        </WrapperRow>
        {renderButton}
      </Content>
    </Container>
  );
};

export default Purchase;
