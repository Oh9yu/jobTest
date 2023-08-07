import React from 'react';
import { styled } from 'styled-components';
import CheckBoxButton from '../atoms/CheckBoxButton';

const CheckBoxForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>123</Title>
      <CheckBoxButton name='선택 1' />
    </Container>
  );
};

export default CheckBoxForm;

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
