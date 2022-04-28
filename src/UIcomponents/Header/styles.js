import styled from 'styled-components';

export const HeaderBack = styled.div`
caret-color: rgba(0,0,0,0);
  display: flex;
  flex-direction: column;
  flex-basis: 120px;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 201, 21);
`;

export const Title = styled.p`
  text-align: center;
  flex: 1;
  font-size: 2.5em;
  font-weight: 900;
  @media only screen and (max-width: 455px){
    text-align: center;
    min-width: 350px;
    font-size: 1.5em;
  }
`;
