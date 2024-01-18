import styled, { css } from "styled-components";
import { Button } from "./Button";



export const Container = styled.div `
  display: flex;
  justify-content: left;
  gap: 12px;

   ${Button}{
    border-radius: 10px;
  }



`;
