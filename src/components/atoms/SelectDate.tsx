import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { styled } from 'styled-components';
import DateCustomHeader from '../customs/DateCustomHeader';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectHandler = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <StyledDatePicker
      renderCustomHeader={DateCustomHeader}
      dateFormat='yyyy.MM.dd'
      selected={selectedDate}
      onChange={selectHandler}
      shouldCloseOnSelect
      placeholderText='yyyy.mm.dd'
      locale={ko}
    />
  );
};

export default SelectDate;

const StyledDatePicker = styled(DatePicker)`
  display: flex;
  align-items: center;
  width: 160px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #dedede;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f6f7f8;
  }
  &:focus {
    outline: none;
    border: 1px solid #496af3;
    box-shadow: 0 0 0 3px rgba(219, 225, 253, 1);
  }
`;
