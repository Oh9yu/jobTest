import React from 'react';
import { styled } from 'styled-components';

const CheckBoxButton = () => {
  return (
    <Label>
      <CheckBox type='checkbox' />
    </Label>
  );
};

export default CheckBoxButton;

const Label = styled.label``;

const CheckBox = styled.input``;
