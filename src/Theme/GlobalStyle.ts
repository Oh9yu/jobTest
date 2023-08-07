import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  // datepicker 커스텀 스타일
  body {
    .react-datepicker-popper[data-placement^=bottom] {
        padding-top: 8px;
      }
    .react-datepicker {
    width: 276px;
    border: 1px solid #F0F2F3;
    border-radius: 5;
    padding-top: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      .react-datepicker__month-container{
        width: 100%;
      }
      .react-datepicker__triangle{
        display: none;
      }
      .react-datepicker__header{
        background-color: #fff;
        border: none;
        padding: 0;
      }
      .react-datepicker__week{
        display: flex;
        justify-content: center;
      }
      .react-datepicker__day{
        width: 32px;
        height: 32px;
        margin: 0;
      }
      .react-datepicker__day-name{
        color: #9C9C9C;
        margin-bottom: -8px;
      }
      .react-datepicker__day--today{
        font-weight: bold;
      }
      .react-datepicker__day--keyboard-selected{
        border-radius: 0;
        background-color: #fff;
        font-size: 14px;
        &:hover{
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #DBE1FD;
        }
      }
      .react-datepicker__day{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-bottom: 6px;
        &:hover{
          border-radius: 50%;
          background-color: #DBE1FD;
          color: #111;
        }
      }
      .react-datepicker__day-names{
        margin : 5px;
      }
      .react-datepicker__day--selected{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #024EEE;
        border-radius: 50%;
        &:hover{
          border-radius: 50%;
        }
      }
    }
    .react-datepicker__day--outside-month{
      color: #BEBEBE;
    }
  }
`;

export default GlobalStyle;
