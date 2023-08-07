import React from 'react';
import { styled, useTheme } from 'styled-components';
import Button from '../atoms/Button';
import CheckBox from '../atoms/CheckBoxButton';
import SelectDate from '../atoms/SelectDate';
import TextForm from '../molecules/TextForm';
import InputForm from '../molecules/InputForm';
import RadioForm from '../molecules/RadioForm';
import DateForm from '../molecules/DateForm';
import CheckBoxForm from '../molecules/CheckBoxForm';

const Form = () => {
  const theme = useTheme();
  return (
    <FormContainer>
      <TextForm />
      <InputForm />
      <RadioForm />
      <DateForm />
      <CheckBoxForm />
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
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.section`
  width: 92%;
  height: 510px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid ${(color) => color.theme.grey};
`;
