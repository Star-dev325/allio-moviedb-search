import styled from 'styled-components';

export const TextArea = styled.input`
  display: flex;
  caret-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  min-width: 250px;
  flex: 1;
  padding: 30px 40px 30px 40px;
  font-size: 1.8em;
  border-radius: 100px;
  background-color: rgb(235, 235, 235);
  border: none;
  
  @media only screen and (max-width: 455px) {
    width: 100%;
    flex: 1;
    padding: 30px 20px 30px 20px;
    font-size: 1em;
    border-radius: 100px;
    background-color: rgb(235, 235, 235);
    border: none;
  }
`;

export const DropDown = styled.ul`
  list-style: none;
  left: 20%;
  position: absolute;
  z-index: 20;
  padding-left: 5px;
  padding-right: 5px;
  background-color:rgb(245, 201, 21);
  li:nth-child(even){
    background-color: rgb(251, 215, 68);
  }
  li:nth-child(even):hover{
    border-radius: 5px;
    border: 1px solid skyblue;
    background-color: aliceblue;
  }
  &:after {
    content:''; /* Required to display content */
    position: absolute; /* Sets the position absolute to the top div */
    top: 0;
    display: ${(props) => (props.afterVisible ? 'block' : 'none')};
    left: 50%;/* position the little arrow */
    margin-left: -15px;
    margin-top: -15px;
    width: 0;
    z-index:1;
    height: 0;
    border-bottom: solid 15px rgb(245, 201, 21); /* Creates the arrow pointing up, to change to a notch instead user border-top */
    border-left: solid 15px transparent; /* Creates triangle effect */
    border-right: solid 15px transparent; /* Creates triangle effect */
  }
  @media only screen and (max-width: 455px){
    width: 100%;
    font-size: smaller;
    padding-left: 3px;
    padding-right: 3px;
    left: 0%;
  }
`;

export const DropDownItem = styled.li`
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
