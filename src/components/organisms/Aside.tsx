import React from 'react';
import { styled } from 'styled-components';
import MenuList from '../atoms/MenuList';

type MenuData = MainMenu[];

type MainMenu = {
  mainMenuId: string;
  mainMenuName: string;
  subMenuList: SubMenu[];
};
type SubMenu = {
  subMenuId: string;
  subMenuName: string;
};

const Aside = () => {
  return (
    <AsideContainer>
      <MenuList
        name='대제목'
        foldIcon='images/fold_active.png'
        clickHandler={() => {
          console.log(123);
        }}
      />
    </AsideContainer>
  );
};

export default Aside;

const AsideContainer = styled.aside`
  width: 256px;
  height: 100%;
  border-right: 1px solid ${(color) => color.theme.grey};
  background-color: ${(color) => color.theme.lightGrey};
  padding-top: 20px;
`;
