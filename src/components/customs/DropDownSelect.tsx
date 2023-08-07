import React, { useRef, useState, useEffect } from 'react';
import { styled } from 'styled-components';
import useOutSideClick from '../../utils/hooks/useOutSideClick';

type Props = {
  selectData: any[];
  selectHandler: (date: string) => void;
  dateValue: string;
  selectType?: string;
};

const DropDownSelect = ({
  selectData,
  selectHandler,
  dateValue,
  selectType
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const openHandler = () => {
    if (isOpen) return;
    setIsOpen((prev) => !prev);
  };

  useOutSideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <SelectBox
      onClick={openHandler}
      $borderColor={isOpen ? '#496af3' : '#dedede'}
      $shadow={isOpen ? 'rgba(219, 225, 253, 1)' : 'transparent'}
      ref={ref}
    >
      {selectType === 'year' ? `${dateValue}년` : dateValue}
      <ArrowIcon src='images/selectArrowIcon.png' />
      {isOpen && (
        <ListBox>
          {selectData?.map((value: any, idx: number) => {
            return (
              <ListItem
                key={idx}
                onClick={() => {
                  selectHandler(value);
                  setIsOpen(false);
                }}
              >
                {selectType === 'year' ? `${value}년` : value}
              </ListItem>
            );
          })}
        </ListBox>
      )}
    </SelectBox>
  );
};

export default DropDownSelect;

type SelectBoxProps = {
  width?: number;
  $borderColor: string;
  $shadow: string;
};

const SelectBox = styled.section<SelectBoxProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  height: 34px;
  padding: 5px 12px;
  margin: 0 2px;
  border: 1px solid ${(style) => style.$borderColor};
  border-radius: 5px;
  box-shadow: 0 0 0 3px ${(style) => style.$shadow};
  cursor: pointer;
  &:hover {
    background-color: #fafbfc;
    border: 1px solid ${(style) => style.$borderColor};
  }
`;

const ArrowIcon = styled.img`
  margin-left: 12px;
  width: 20px;
  height: 20px;
`;

const ListBox = styled.ul`
  position: absolute;
  top: 37px;
  left: 0;
  width: 100%;
  max-height: 160px;
  padding-top: 18px 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  z-index: 9999;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 37px;
  z-index: 1;
  &:hover {
    background-color: #f6f7f8;
  }
`;
