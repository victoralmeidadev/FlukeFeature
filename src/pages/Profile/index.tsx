import React from 'react';
import {
  Container,
  Header,
  ProfilePicture,
  ProfileName,
  WrapperButton,
  Content,
  MenuText,
  MenuIcon,
  ChevronIcon,
  LeftContent,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Header>
        <ProfilePicture
          source={{
            uri:
              'https://scontent.fcgh23-1.fna.fbcdn.net/v/t1.6435-9/89913643_2331855266915171_3122078277980651520_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHU9XZ0_-1ZsUl8mY93BEFNulWZ6i83oFW6VZnqLzegVUFg0EL1oZGVKXt8GjxyA0qeYUYg7hOt-t1Uyc46Vawg&_nc_ohc=6brkL3cpCIsAX8MHL2Q&_nc_ht=scontent.fcgh23-1.fna&oh=a4ec1749ea5585475862652219611a43&oe=6095973B',
          }}
        />
        <ProfileName>Victor Almeida</ProfileName>
      </Header>
      <Content>
        <WrapperButton>
          <LeftContent>
            <MenuIcon name="user" />
            <MenuText>minha conta</MenuText>
          </LeftContent>

          <ChevronIcon name="chevron-right" />
        </WrapperButton>
        <WrapperButton>
          <LeftContent>
            <MenuIcon name="credit-card" />
            <MenuText>forma de pagamento</MenuText>
          </LeftContent>
          <ChevronIcon name="chevron-right" />
        </WrapperButton>
        <WrapperButton>
          <LeftContent>
            <MenuIcon name="user-plus" />
            <MenuText>indicar amigos</MenuText>
          </LeftContent>

          <ChevronIcon name="chevron-right" />
        </WrapperButton>
        <WrapperButton>
          <LeftContent>
            <MenuIcon name="question" />
            <MenuText>ajuda</MenuText>
          </LeftContent>

          <ChevronIcon name="chevron-right" />
        </WrapperButton>
      </Content>
    </Container>
  );
};

export default Profile;
