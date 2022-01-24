import styled from "styled-components";
import { theme } from "../../theme";

interface ContainerProps {
  BackgroundIMG: string;
}

export const ContentWrapper = styled.main<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${({ BackgroundIMG }) => BackgroundIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
  height: 100vh;
  hr {
    width: 50%;
    margin-bottom: 2rem;

    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    -webkit-box-shadow: 0px 4px 20px 2px rgba(0,0,0,0.57); 
    box-shadow: 0px 4px 20px 2px rgba(0,0,0,0.57);
  }
`