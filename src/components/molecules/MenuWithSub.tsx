import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import MenuList from '../atoms/MenuList';

type SubMenu = {
  subMenuId: string;
  subMenuName: string;
};

type MainMenu = {
  mainMenuName: string;
  subMenuList: SubMenu[];
};

type Props = {
  data: MainMenu;
  selectMenu: string;
  setSelectMenu: (menuId: string) => void;
};

const isFoldIcon = {
  fold: 'images/fold_active.png',
  unfold: 'images/unFold_inactive.png'
};

const MenuWithSub = ({ data, selectMenu, setSelectMenu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const subOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ListContainer>
      <MenuList
        name={data.mainMenuName}
        clickHandler={subOpenHandler}
        foldIcon={isOpen ? isFoldIcon.fold : isFoldIcon.unfold}
      />
      <ListContainer>
        {isOpen &&
          data.subMenuList.map((subData) => {
            return (
              <MenuList
                key={subData.subMenuId}
                name={subData.subMenuName}
                padWidth={40}
                isActive={selectMenu === subData.subMenuId}
                activeColor={
                  selectMenu === subData.subMenuId
                    ? theme.menu.active
                    : 'transparents'
                }
                clickHandler={() => {
                  setSelectMenu(subData.subMenuId);
                }}
              />
            );
          })}
      </ListContainer>
    </ListContainer>
  );
};

export default MenuWithSub;

const ListContainer = styled.ul`
  width: 100%;
`;
