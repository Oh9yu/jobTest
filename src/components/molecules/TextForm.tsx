import React from 'react';
import { styled } from 'styled-components';

const TextForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InfoText>{data}</InfoText>
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
  font-size: 14px;
  font-weight: 500;
`;

const InfoText = styled.p`
  font-size: 14px;
`;
