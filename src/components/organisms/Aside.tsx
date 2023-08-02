import React from 'react';
import { styled } from 'styled-components';

const Aside = () => {
  return <AsideContainer>aside</AsideContainer>;
};

export default Aside;

const AsideContainer = styled.aside`
  width: 256px;
  height: 100%;
  border-right: 1px solid ${(color) => color.theme.grey};
  background-color: ${(color) => color.theme.lightGrey};
  padding-top: 20px;
`;
