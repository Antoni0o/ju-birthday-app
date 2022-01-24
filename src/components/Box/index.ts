import styled from 'styled-components';

export const Box = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(256, 256, 256, 0.47);
  box-shadow: 0 8px 32px 0 rgba( 256, 256, 256, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  @media(max-width: 1024px) {
    padding: 10%;
  }
`