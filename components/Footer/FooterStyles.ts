import styled from "styled-components";

export const FooterStyles = styled.div`
  background: rgb(13, 14, 19);
  background: linear-gradient(
    214deg,
    rgba(13, 14, 19, 1) 58%,
    rgba(31, 13, 62, 1) 98%
  );
  border-top: 1px solid #fff;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 3rem;
    color: #fff;

    & .footer-right {
      flex: 2;
      h6 {
        margin-bottom: 1rem;
      }
      .buttons {
        display: flex;
        gap: 20px;
        margin-bottom: 3rem;
      }
    }

    & .footer-left {
      flex: 1;
      // display:flex;
      // justify-content:space-between;
      // flex-direction:column;
      // align-items:start;
      .contents {
        display: flex;
        justify-content: space-between;
        align-items: start;
        padding-right: 6rem;
        margin-top: 2rem;
      }

      h6 {
        margin-top: 2rem;
        font-size: 18px;
      }

      input {
        background: transparent;
        border-bottom: 1px solid #fff;
        border-top: none;
        border-right: none;
        border-left: none;
        margin-top: 1rem;
        color: #fff;
        width: 80%;
      }
    }
  }

  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      align-items: start;
      margin-top: 2rem;

      padding: 5rem 2rem;

      & .footer-right {
        flex: 1;
        h6 {
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 3rem;
        }
      }

      & .footer-left {
        flex: 1;
        margin-top: 2rem;

        .contents {
          padding-right: 1rem;
          margin-top: 2rem;
        }

        h6 {
          margin-top: 2rem;
          font-size: 18px;
        }

        input {
          width: 100%;
        }
      }
    }
  }
`;
