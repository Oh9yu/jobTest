import React from 'react';
import { styled } from 'styled-components';

type Props = {
  name: string;
  width: number;
  height: number;
  color?: string;
  bgColor?: string;
  hvColor?: string;
  radius?: number;
  onClick: () => void;
};

const Button = ({
  name,
  width,
  height,
  color,
  bgColor,
  hvColor,
  radius,
  onClick
}: Props) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      color={color}
      bgcolor={bgColor}
      hvcolor={hvColor}
      radius={radius}
      onClick={onClick}
    >
      {name}
    </ButtonContainer>
  );
};

export default Button;

type ButtonProps = {
  width: number;
  height: number;
  color?: string;
  bgcolor?: string;
  hvcolor?: string;
  radius?: number;
};

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  background-color: ${(style) => style.bgcolor};
  color: ${(style) => style.color};
  border: none;
  border-radius: ${(style) => style.radius}px;
  &:hover {
    background-color: ${(style) => style.hvcolor};
  }
`;
