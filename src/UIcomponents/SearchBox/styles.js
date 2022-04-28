import styled from 'styled-components';

export const TextArea = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  min-width: 250px;
  flex: 1;
  padding: 30px 40px 30px 40px;
  font-size: 1.8em;
  border-radius: 100px;
  background-color: rgb(235, 235, 235);
  border: none;
  
  @media only screen and (max-width: 455px) {
    text-align: center;
    width: 100%;
    flex: 1;
    padding: 30px 40px 30px 40px;
    font-size: 1em;
    border-radius: 100px;
    background-color: rgb(235, 235, 235);
    border: none;
  }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.display ? 'true' : 'none')};
  position: absolute;
  z-index: 20;
  top: calc(top + 20px);
  padding-left: 5px;
  padding-right: 5px;
  background-color:rgb(245, 201, 21);
  &:nth-child(even){
    background-color: rgb(251, 215, 68);
  }
  /* &:nth-child(odd){
    background-color: rgb(245, 201, 21);
  } */
  @media only screen and (max-width: 455px){
    width: 100%;
    font-size: smaller;
    padding-left: 3px;
    padding-right: 3px;
  }
`;

export const DropDownItem = styled.label`
  width: 250px;
  padding: 5px 20px 5px 20px;
  font-size:1.5em;
  align-items: center;
  cursor: pointer;
  &:hover{
    border-radius: 5px;
    border: 1px solid skyblue;
    background-color: aliceblue;
  }
`;

export const SearchingContainer = styled.div`
  caret-color: rgba(0,0,0,0);
  position: relative;
`;
