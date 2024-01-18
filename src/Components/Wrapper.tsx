import styled, { css } from "styled-components";
import { Card } from "./../Components/Card";
import { Title } from './Title';
import { myTheme } from "./Styles/Theme.styled";



export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    cursor: pointer; // обращение ко всем кнопкам которые лежат в этом div
   &:hover {
    border: 2px solid black;
   }
  }

  ${Card} {
    border: 1px solid red;
}

${Title} {
  text-decoration: underline;
}

@media ${myTheme.media.tablet} {
  flex-direction: column;
}



`;
