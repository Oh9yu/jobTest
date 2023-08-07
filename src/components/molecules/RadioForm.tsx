import React from 'react';
import { styled } from 'styled-components';
import RadioButton from '../atoms/RadioButton';

const RadioForm = ({ title, data }: any) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RadioWrapper>
        <RadioSection>
          {data.map((value: string, idx: number) => {
            return <RadioButton key={idx} radioName='test' name={value} />;
          })}
        </RadioSection>
        <SelectedText>* 선택시 텍스트가 표시됩니다</SelectedText>
      </RadioWrapper>
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
  font-size: 14px;
  font-weight: 500;
  background-color: #fff;
`;

const RadioWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const RadioSection = styled.article`
  display: flex;
  margin-bottom: 12px;
`;

const SelectedText = styled.p`
  font-size: 12px;
  color: red;
`;
