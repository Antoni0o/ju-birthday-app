import styled from "styled-components";
import { theme } from "../../theme";

export const Header = styled.div`
  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: ${theme.fontSize.xxl};
    color: ${theme.colors.white};
    text-shadow: -1px 0px 5px rgba(94, 94, 94, 1);
    @media(max-width: 1024px) {
      font-size: ${theme.fontSize.l};
    }
  }
`