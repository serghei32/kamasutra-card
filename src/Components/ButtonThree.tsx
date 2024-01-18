import styled, { css } from "styled-components";
import { myTheme } from "./Styles/Theme.styled";


type ButtonThreePropsType = {
    btnType?: "primary" | "outlined"|"second"
    paddingType?: "padding50px"| "padding10px"|"padding15px"
    size?:boolean
    padding?:string
}

export const ButtonThree = styled.button<ButtonThreePropsType>`
padding: 10px;
background-color: none;
font-style: italic;

${props=>props.btnType === "primary" && css <ButtonThreePropsType>`
    background-color: ${myTheme.colors.secondary};
    &:hover{
        opacity:0.5;
    }
`}

${props=>props.btnType === "outlined" && css <ButtonThreePropsType>`
    background-color: #3cff00;
    &:hover{
        opacity:0.5;
    }
`}

${props=>props.btnType === "second" && css <ButtonThreePropsType>`
    background-color: #ffee00;
    &:hover{
        opacity:0.5;
    }
`}

${props=>props.size && css <ButtonThreePropsType>`
    font-size: 10px;
    back
`}


${props=>props.paddingType === "padding50px" && css<ButtonThreePropsType>`
    padding: 50px;
`}

${props=>props.paddingType === "padding10px" && css <ButtonThreePropsType>`
    padding:10px;
`}

${props=>props.paddingType === "padding15px" && css <ButtonThreePropsType>`
    padding:15px;
  `}



`;
