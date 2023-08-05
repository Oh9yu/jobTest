import React from 'react';
import { styled, useTheme } from 'styled-components';

type Props = {
  name: string;
  labelWidth?: number;
  labelHeight?: number;
  fontSize?: number;
  marginRight?: number;
  checkBgColor?: string;
  checkBdColor?: string;
};

const CheckBoxButton = ({
  name,
  labelWidth = 60,
  labelHeight = 24,
  fontSize = 14,
  marginRight = 32,
  checkBgColor,
  checkBdColor
}: Props) => {
  const theme = useTheme();

  return (
    <Label
      width={labelWidth}
      height={labelHeight}
      fontSize={fontSize}
      $marginRight={marginRight}
    >
      <CheckBox
        type='checkbox'
        $bdColor={theme.grey}
        $hoverBgColor={theme.lightGrey}
        $hoverBdColor={theme.darkGrey}
        $checkBgColor={checkBgColor ? checkBgColor : theme.button.blue}
        $checkBdColor={checkBdColor ? checkBdColor : theme.button.blue}
      />
      <CheckBoxName>{name}</CheckBoxName>
    </Label>
  );
};

export default CheckBoxButton;

type LabelStyle = {
  width: number;
  height: number;
  fontSize: number;
  $marginRight: number;
};

type CheckBoxStyle = {
  $bdColor: string;
  $hoverBgColor: string;
  $hoverBdColor: string;
  $checkBgColor: string;
  $checkBdColor: string;
};

const Label = styled.label<LabelStyle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  font-size: ${(style) => style.fontSize}px;
  margin-right: ${(style) => style.$marginRight}px;
  cursor: pointer;
`;

const CheckBox = styled.input<CheckBoxStyle>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${(style) => style.$bdColor};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(style) => style.$hoverBgColor};
    border: 1px solid ${(style) => style.$hoverBdColor};
  }
  &:checked {
    background-color: ${(style) => style.$checkBgColor};
    border: 1px solid ${(style) => style.$checkBdColor};
  }
  &:checked::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url('images/Check.svg');
    background-repeat: no-repeat;
    background-position: 2px 3px;
  }
`;

const CheckBoxName = styled.span``;
