import React from 'react';
import { styled } from 'styled-components';

type Props = {
  width: number;
  height: number;
  fontsize?: number;
  padwidth?: number;
  padheight?: number;
  bdcolor?: string;
  radius?: number;
  focuscolor?: string;
  shadow?: string;
  placeholder?: string;
  onChange: () => void;
};

const TextInput = ({
  width,
  height,
  padwidth,
  padheight,
  fontsize,
  bdcolor,
  radius,
  focuscolor,
  shadow,
  placeholder,
  onChange
}: Props) => {
  return (
    <Input
      type='text'
      width={width}
      height={height}
      $padwidth={padwidth}
      $padheight={padheight}
      fontSize={fontsize}
      $bdcolor={bdcolor}
      $radius={radius}
      $focuscolor={focuscolor}
      $shadow={shadow}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;

type InputProps = {
  width: number;
  height: number;
  $padwidth?: number;
  $padheight?: number;
  fontSize?: number;
  $bdcolor?: string;
  $radius?: number;
  $focuscolor?: string;
  $shadow?: string;
};

const Input = styled.input<InputProps>`
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  padding: ${(style) => style.$padheight}px ${(style) => style.$padwidth}px;
  border: 1px solid ${(style) => style.$bdcolor};
  border-radius: ${(style) => style.$radius}px;
  font-size: ${(style) => style.fontSize}px;
  &:focus {
    outline: none;
    border: 1px solid ${(style) => style.$focuscolor};
    box-shadow: 0 0 0 3px
      ${(style) => (style.$shadow ? style.$shadow : 'transparent')};
  }
`;
