import React from 'react';
import { styled } from 'styled-components';

const DateCustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}: any) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, index) => `${2000 + index}`
  );

  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ];

  return (
    <Container>
      <ArrowImg
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        width={16}
        height={16}
        $img='images/prevArrow.png'
        $activeImg='images/prevArrow_active.png'
      />
      <Wrapper>
        <SelectBox
          width={100}
          value={date.getFullYear()}
          onChange={({ target: { value } }) => changeYear(value)}
        >
          {years.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectBox>
        <SelectBox
          width={72}
          value={months[date.getMonth()]}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
        >
          {months.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectBox>
      </Wrapper>

      <ArrowImg
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        width={16}
        height={16}
        $img='images/nextArrow.png'
        $activeImg='images/nextArrow_active.png'
      />
    </Container>
  );
};

export default DateCustomHeader;

type ArrowStyle = {
  width: number;
  height: number;
  $img: string;
  $activeImg: string;
};

type SelectStyle = {
  width: number;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  background-color: #fff;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const SelectBox = styled.select<SelectStyle>`
  width: ${(style) => style.width}px;
  padding: 5px 12px;
  margin: 0 2px;
  border: 1px solid #dedede;
  border-radius: 5px;
  appearance: none;
  background-image: url('images/selectArrowIcon.png');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: right center;
  &:hover {
    background-color: #fafbfc;
    border: 1px solid #bebebe;
  }
  &:focus {
    outline: none;
    border: 1px solid #496af3;
    box-shadow: 0 0 0 3px rgba(219, 225, 253, 1);
  }

  option:hover {
    background-color: #fff;
    color: #000;
  }
`;

const ArrowImg = styled.button<ArrowStyle>`
  width: ${(style) => style.width}px;
  height: ${(style) => style.height}px;
  background-image: url(${(style) => style.$img});
  background-size: cover;
  background-position: center center;
  border: none;
  background-color: transparent;
  &:hover {
    background-image: url(${(style) => style.$activeImg});
    background-size: cover;
    background-position: center center;
  }
`;

const SelectOption = styled.option`
  background-color: #fff;
  appearance: none;
`;
