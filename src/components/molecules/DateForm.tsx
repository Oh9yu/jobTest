import React from 'react';
import { styled } from 'styled-components';
import SelectDate from '../atoms/SelectDate';

const DateForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>123</Title>
      <SelectDate />
    </Container>
  );
};

export default DateForm;

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
