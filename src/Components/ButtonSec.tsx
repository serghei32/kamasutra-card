import styled, { css } from "styled-components";

type ButtonSecPropsType = {
    sendMassage?: boolean
    makeReport?: boolean
    getOrder?: boolean
    byNow?: boolean
    getStarted?: boolean
}

export const ButtonSec = styled.button<ButtonSecPropsType>`
padding: 10px;
background-color: none;
font-size: 2pm;
font-style: italic;

${props => props.sendMassage && css <ButtonSecPropsType>`
    background-color: red;
`
    }

${props => props.makeReport && css <ButtonSecPropsType>`
    background-color: #00ff0d;
`
    }

${props => props.getOrder && css <ButtonSecPropsType>`
    background-color: #d0ff00;
`
    }

${props => props.byNow && css <ButtonSecPropsType>`
   background-color: #1100ff; 
`}


${props => props.getStarted && css <ButtonSecPropsType>`
    background-color: #eea609;
    
  &:hover {
    opacity:0.1;
   }
`}

`;
