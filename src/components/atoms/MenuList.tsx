import React from 'react';
import { styled } from 'styled-components';

type Props = {
  name: string;
  width?: number;
  height?: number;
  padWidth?: number;
  isActive?: boolean;
  activeColor?: string;
  fontSize?: number;
  foldIcon?: string;
  clickHandler: () => void;
};

const MenuList = ({
  name,
  width = 100,
  height = 36,
  padWidth = 28,
  isActive = false,
  activeColor = 'transparents',
  fontSize = 14,
  foldIcon,
  clickHandler
}: Props) => {
  return (
    <List
      width={width}
      height={height}
      $padWidth={padWidth}
      $bgColor={isActive ? activeColor : 'transparents'}
      onClick={clickHandler}
    >
      <Content>
        <ListName fontSize={fontSize}>{name}</ListName>
        {foldIcon && <FoldImage src={foldIcon} />}
      </Content>
    </List>
  );
};

export default MenuList;

type ListStyle = {
  width: number;
  height: number;
  $padWidth: number;
  $bgColor: string;
};

type NameStyle = {
  fontSize: number;
};

const List = styled.li<ListStyle>`
  display: flex;
  align-items: center;
  width: ${(style) => style.width}%;
  height: ${(style) => style.height}px;
  padding: 0 ${(style) => style.$padWidth}px;
  background-color: ${(style) => style.$bgColor};
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ListName = styled.p<NameStyle>`
  font-size: ${(style) => style.fontSize};
`;

const FoldImage = styled.img`
  width: 18px;
  height: 18px;
`;
