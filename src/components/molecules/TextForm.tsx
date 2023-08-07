import React from 'react';
import { styled } from 'styled-components';

const TextForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>123</Title>
    </Container>
  );
};

export default TextForm;

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
