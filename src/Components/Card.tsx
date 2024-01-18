import styled, { css } from "styled-components";
import { Text } from './Text';
import { Title } from "./Title";

type CardPropsType = { // указать имя типа для компоненты по которому будут типизироваться пропсы  
  jobCard?:boolean   // создать типы разных пропсов
  testCard?:boolean // создать типы разных пропсов
  vocationCard?:boolean // создать типы разных пропсов
}

export const Card = styled.div <CardPropsType>`
  max-width: 300px;
  padding: 10px 10px 20px 10px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;

 ${Text} {


  &:hover { // обращение к родителю через амперсанд
    color: red;
    text-decoration: underline;
  }
 }

//обращение к компоненте через интерполяцию внутри другой компоненты
 ${Title} {
  cursor: pointer;
}


//обращение к пропсу через интерполяцию
${props=>props.jobCard && css <CardPropsType>`
background-color: green;

&:hover {
  opacity: 0.6;
}
`}

${props=>props.vocationCard && css <CardPropsType>`
background-color: #800031;
display:flex;
flex-direction:column;
`}

${props=>props.testCard && css <CardPropsType>`
background-color: #a19f1f;
`}


`;



