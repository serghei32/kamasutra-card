import styled from "styled-components";
import { Button } from "./../Components/Button";





export const ButtonSave = styled(Button)`
  background-color: white;
  border: 2px solid #4E71FE;
  border-radius: 5px;
  color: ${(props => props.color || 'green')};

  &:hover {
    background-color: ${props =>props.color || 'black'};
    opacity: 0.9;
    
  }
`;


