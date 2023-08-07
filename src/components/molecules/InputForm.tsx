import React from 'react';
import { styled, useTheme } from 'styled-components';
import TextInput from '../atoms/TextInput';

const InputForm = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>123</Title>
      <TextInput
        width={160}
        height={34}
        fontsize={14}
        padwidth={12}
        padheight={5}
        radius={5}
        bdcolor={theme.input.border}
        focuscolor={theme.input.focus}
        shadow={theme.input.shadow}
        onChange={() => {}}
      />
    </Container>
  );
};

export default InputForm;

const Container = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
`;

const Title = styled.h3`
  width: 140px;
  margin-right: 64px;
  font-weight: 400;
  background-color: #fff;
`;
