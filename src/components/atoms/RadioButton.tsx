import React from 'react';
import { styled, useTheme } from 'styled-components';

type Props = {
  lableWidth?: number;
  lableHeight?: number;
  radioName: string;
  name: string;
  marginRight?: number;
  fontSize?: number;
  focusColor?: string;
};

const RadioButton = ({
  lableWidth = 60,
  lableHeight = 24,
  radioName,
  name,
  marginRight = 32,
  fontSize = 14,
  focusColor
}: Props) => {
  const theme = useTheme();
  return (
    <Lable
      width={lableWidth}
      height={lableHeight}
      $marginRight={marginRight}
      fontSize={fontSize}
    >
      <Radio
        type='radio'
        name={radioName}
        $bordercolor={theme.grey}
        $hoverBgColor={theme.lightGrey}
        $hoverBdColor={theme.darkGrey}
        $focusColor={focusColor ? focusColor : theme.button.blue}
      />
      <RadioName>{name}</RadioName>
    </Lable>
  );
};

export default RadioButton;

type LabelStyle = {
  width: number;
  height: number;
  $marginRight: number;
  fontSize: number;
};

type RadioStyle = {
  $bordercolor?: string;
  $hoverBgColor?: string;
  $hoverBdColor?: string;
  $focusColor?: string;
};

const Lable = styled.label<LabelStyle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  margin-right: ${(style) => style.$marginRight}px;
  font-size: ${(style) => style.fontSize}px;
  cursor: pointer;
`;

const Radio = styled.input<RadioStyle>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${(style) => style.$bordercolor};
  border-radius: 50%;
  &:hover {
    background-color: ${(style) => style.$hoverBgColor};
    border: 1px solid ${(style) => style.$hoverBdColor};
  }
  &:focus {
    border: 5px solid ${(style) => style.$focusColor};
  }
`;

const RadioName = styled.span``;
