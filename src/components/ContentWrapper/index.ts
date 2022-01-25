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
  h1:nth-child(3) {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.l};
    color: ${theme.colors.white};
    text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
  }
  h3 {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.m};
    color: ${theme.colors.white};
    text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
    @media(max-width: 1024px) {
      text-align: center;
    }
  }
  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.l};
    font-weight: 400;
    color: ${theme.colors.white};
    text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
  }
  hr {
    width: 40%;
    margin-bottom: 1rem;

    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    -webkit-box-shadow: 0px 4px 20px 2px rgba(0,0,0,0.57); 
    box-shadow: 0px 4px 20px 2px rgba(0,0,0,0.57);
  }
`