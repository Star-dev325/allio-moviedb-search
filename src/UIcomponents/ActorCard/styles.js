import styled from 'styled-components';

export const CardBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
  cursor: pointer;
  caret-color: rgba(0,0,0,0);
  transition: 0.4s ease-in;
  &:hover{
    caret-color: rgba(0,0,0,0);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 250px;
    cursor: pointer;
    box-shadow: 1px 1px 2px 2px black;
    & div{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(250, 100, 100, 0.5);
    }
    & button{
      display: block;
    }
  }
`;

export const NameBar = styled.label`
  padding-top: 10px;
  text-align: center;
  color: rgb(245, 201, 21);
  font-weight: 700;
  font-size:1.2em;
`;

export const OverLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 100, 100, 0);
  transition: 0.4s ease-in;
`;

export const DeleteButton = styled.button`
  font-size: 2em;
  position: absolute;
  display: none;
  transition: 0.4s ease-in;
`;
