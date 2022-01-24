import styled from "styled-components";

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
`