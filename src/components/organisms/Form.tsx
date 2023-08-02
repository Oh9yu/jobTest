import React from 'react';
import { styled } from 'styled-components';

const Form = () => {
  return <FormContainer></FormContainer>;
};

export default Form;

const FormContainer = styled.article`
  width: 95%;
  height: 510px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid ${(color) => color.theme.grey};
`;
