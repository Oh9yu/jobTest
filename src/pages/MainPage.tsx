import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { API } from '../config/APIconfig';
import Aside from '../components/organisms/Aside';
import Form from '../components/organisms/Form';
import { MenuData } from '../constants/MenuData';

const MainPage = () => {
  const [selectMenu, setSelectMenu] = useState('');

  const selectMenuHandler = (menuId: string) => {
    setSelectMenu(menuId);
  };

  useEffect(() => {
    fetch(`${API.test}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <MainContainer>
      <Aside
        menuData={MenuData}
        selectMenu={selectMenu}
        setSelectMenu={selectMenuHandler}
      />
      <Content>
        <ContentHeader>
          <Title>타이틀</Title>
        </ContentHeader>
        <Form />
      </Content>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  width: 1280px;
  height: 720px;
  margin: auto;
  border: 1px solid ${(color) => color.theme.grey};
  background-color: ${(color) => color.theme.white};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  width: 92%;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
