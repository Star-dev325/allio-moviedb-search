import styled from 'styled-components';

export const AppBody = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  @media only screen and (max-width: 550px){
    box-sizing: border-box;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    font-size: 1em;
  }
  & *{
    box-sizing: border-box;
  }
`;

export const SearchSector = styled.div`
  padding-top: 50px;
  width: 100%;
  flex-basis: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
