import React from 'react';
import { styled, useTheme } from 'styled-components';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import RadioButton from '../atoms/RadioButton';
import CheckBox from '../atoms/CheckBoxButton';

const Form = () => {
  const theme = useTheme();
  return (
    <FormContainer>
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
        onChange={() => {
          console.log(13);
        }}
      />
      <RadioButton radioName='test' name='test1' />
      <RadioButton radioName='test' name='test2' />
      <Button
        name='저장'
        width={74}
        height={40}
        color={theme.white}
        bgColor={theme.button.blue}
        hvColor={theme.button.hover}
        radius={5}
        onClick={() => {
          console.log(123);
        }}
      />
      <CheckBox name='선택1' />
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.article`
  width: 92%;
  height: 510px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid ${(color) => color.theme.grey};
`;
