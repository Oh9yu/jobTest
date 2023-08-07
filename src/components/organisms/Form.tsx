import React from 'react';
import { styled, useTheme } from 'styled-components';
import Button from '../atoms/Button';
import TextForm from '../molecules/TextForm';
import InputForm from '../molecules/InputForm';
import RadioForm from '../molecules/RadioForm';
import DateForm from '../molecules/DateForm';
import CheckBoxForm from '../molecules/CheckBoxForm';
import { FormData } from '../../constants/FormData';

const Form = () => {
  const theme = useTheme();
  return (
    <FormContainer>
      <TextForm title={FormData.info_1.title} />
      <InputForm title={FormData.info_2.title} />
      <TextForm title={FormData.info_3.title} />
      <InputForm title={FormData.info_4.title} />
      <DateForm title={FormData.date.title} />
      <RadioForm title={FormData.info_5.title} data={FormData.info_5.value} />
      <CheckBoxForm
        title={FormData.info_6.title}
        data={FormData.info_6.value}
      />
      <ButtomWrapper>
        <Button
          name='저장'
          width={74}
          height={40}
          color={theme.white}
          bgColor={theme.button.blue}
          hvColor={theme.button.hover}
          radius={5}
          onClick={() => {}}
        />
      </ButtomWrapper>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  width: 92%;
  height: 510px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid ${(color) => color.theme.grey};
`;

const ButtomWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${(style) => style.theme.grey};
`;
