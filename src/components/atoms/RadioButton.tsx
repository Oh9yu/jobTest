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
      marginright={marginRight}
      fontSize={fontSize}
    >
      <Radio
        type='radio'
        name={radioName}
        borderColor={theme.grey}
        hoverBgColor={theme.lightGrey}
        hoverBdColor={theme.darkGrey}
        focusColor={focusColor ? focusColor : theme.button.blue}
      />
      <RadioName>{name}</RadioName>
    </Lable>
  );
};

export default RadioButton;

type LableProps = {
  width: number;
  height: number;
  marginright: number;
  fontSize: number;
};

type RadioProps = {
  borderColor?: string;
  hoverBgColor?: string;
  hoverBdColor?: string;
  focusColor?: string;
};

const Lable = styled.label<LableProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  margin-right: ${(style) => style.marginright}px;
  font-size: ${(style) => style.fontSize}px;
  cursor: pointer;
`;

const Radio = styled.input<RadioProps>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${(style) => style.borderColor};
  border-radius: 50%;
  &:hover {
    background-color: ${(style) => style.hoverBgColor};
    border: 1px solid ${(style) => style.hoverBdColor};
  }
  &:focus {
    border: 5px solid ${(style) => style.focusColor};
  }
`;

const RadioName = styled.span``;
