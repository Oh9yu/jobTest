import React from 'react';
import { styled } from 'styled-components';
import RadioButton from '../atoms/RadioButton';

const RadioForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>123</Title>
      <RadioButton radioName='test' name='test1' />
      <RadioButton radioName='test' name='test2' />
    </Container>
  );
};

export default RadioForm;

const Container = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  height: 86px;
`;

const Title = styled.h3`
  width: 140px;
  margin-right: 64px;
  font-weight: 400;
  background-color: #fff;
`;
