import styled from 'styled-components';

export const Header = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap');
  background-color: #dddee1;
  height: 70px;
  max-width: 100%;
  margin: 0 auto 0 auto;
  display: flex;
  align-items: right;

  h1 {
    font: 30px 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: #2e3440;
    text-align: left;
    padding: 10px;
  }

`;
export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap');
  width: 100%;
  background: #ffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; 

  #Box {
    background-color: #2e3440;
    resize: vertical;
    overflow: auto;
    width: 100%;

    select {
      margin: 0px 10px 10px 0px;
      background-color: #ffff;
      width: 100px;
      height: 20px;
      font: 14px 'Source Sans Pro', sans-serif
      padding: 10px;
      outline: none;
      color: #2e3440;
      border-color: #000000;

      &::placeholder {
        color: #2e3440;
      }
    }

    input {
      margin: 0px 10px 10px 0px;
      background-color: #ffff;
      width: 150px;
      height: 20px;
      font: 12px 'Source Sans Pro', sans-serif
      padding: 10px;
      outline: none;
      color: #2e3440;
      border: 1px solid #000000;

      &::placeholder {
        color: #2e3440;
      }
    }

    span {
      color: #000000;
      align-self: flex-start;
      margin: 0 0 10px;
    }
    
    #time {
      margin: 0px 10px 10px 0px;
      background-color: #ffff;
      width: 150px;
      height: 20px;
      font: 12px 'Source Sans Pro', sans-serif
      padding: 10px;
      outline: none;
      color: #2e3440;
      border: 1px solid #000000;

      &::placeholder {
        color: #2e3440;
      }
    }

    button {
      margin: 0px 10px 0px 10px;
      font: 16px 'Source Sans Pro', sans-serif
      font-weight: bold;
      color: white;
      background: none;
      border: none;
    }

    ol {
      background: #60656e;
      list-style-type: decimal;
      list-style-position: outside;

      li {
        background: #2e3440;
        margin-left: 35px;
        color: white;
        font: 12px 'Source Code Pro', monospace;
      }
    }
  }

  #graph{
    margin-top: 20px;
  }
`;

export const Footer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #dddee1;
  color: white;
  text-align: center;
  display: flex;
  align-items: right;
  height: 80px;

    a {
      padding: 5px;
      margin: 20px auto auto 10px;
      width: 150px;
      height: 30px;
      font: 14px 'Source Sans Pro', sans-serif;
      color: white;
      text-transform: uppercase;
      background: #017eff;
      border: 1px solid #017eff;
      border-radius: 6px;
    }
`;