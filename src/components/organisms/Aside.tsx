import React from 'react';
import { styled, useTheme } from 'styled-components';
import MenuList from '../atoms/MenuList';
import MenuWithSub from '../molecules/MenuWithSub';

type SubMenu = {
  subMenuId: string;
  subMenuName: string;
};

type MainMenu = {
  mainMenuId: string;
  mainMenuName: string;
  subMenuList: SubMenu[];
};

type AsideProps = {
  menuData: MainMenu[];
  selectMenu: string;
  setSelectMenu: (menuId: string) => void;
};

const Aside = ({ menuData, selectMenu, setSelectMenu }: AsideProps) => {
  return (
    <AsideContainer>
      {menuData &&
        menuData.map((data) => {
          return (
            <MenuWithSub
              key={data.mainMenuId}
              data={data}
              selectMenu={selectMenu}
              setSelectMenu={setSelectMenu}
            />
          );
        })}
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
