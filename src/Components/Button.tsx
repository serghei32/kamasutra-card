import styled from "styled-components";


type ButtonPropsType = {
  color?: string
  fontSize?: string
  
}



export const Button = styled.button<ButtonPropsType>`
  font-family: Inter; 
  font-size: 10px;
  color: #FFF;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  border-radius: 5px;
  background-color: ${props => props.color || "blue"};
  padding: 4px 20px;
  width: 86px;
  height: 30px;
  border: none;
  font-size: ${props=>props.fontSize};
  &:hover {  //обращаемся к родитетелю (Button) через & 
    opacity: 0.7;
  }
`;
