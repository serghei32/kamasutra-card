import styled, { css } from "styled-components";

type ButtonNewPropsType = {
 red?:boolean   
 green?:boolean   
 black?:boolean   
 blue?:boolean   
}

export const ButtonNew = styled.button<ButtonNewPropsType>`
padding: 20px;


${props=>props.red && css <ButtonNewPropsType>`
   background-color: #e20f0f; 
`}
${props=>props.green && css <ButtonNewPropsType>`
   background-color: #0b6d10; 
`}
${props=>props.black && css <ButtonNewPropsType>`
   background-color: #020202; 
`}
${props=>props.blue && css <ButtonNewPropsType>`
   background-color: #0a1baf; 
`}



`;
