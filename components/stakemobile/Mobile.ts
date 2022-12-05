import styled from "styled-components";

export const MobileStyles = styled.div`
  background: rgb(13, 14, 19);
  background: linear-gradient(
    90deg,
    rgba(13, 14, 19, 1) 61%,
    rgba(31, 19, 51, 1) 100%
  );
  padding: 3rem 3rem;
  text-align: center;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;
