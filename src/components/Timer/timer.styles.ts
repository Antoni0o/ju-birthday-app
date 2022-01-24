import styled from "styled-components";
import { theme } from "../../theme";

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.l};
    color: ${theme.colors.white};
    text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
  }
  hr {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
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
  .time {
    display: flex;
    gap: 1rem;
    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: ${theme.fontSize.l};
      color: ${theme.colors.white};
      text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
    }
    @media(max-width: 1024px) {
      flex-direction: column;
      text-align: center;
    }
  }
`