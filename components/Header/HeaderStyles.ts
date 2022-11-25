import styled from "styled-components";

export const HeaderStyles = styled.div`
  padding: 3rem 3rem;
  background: rgb(13, 14, 19);
  background: linear-gradient(
    90deg,
    rgba(13, 14, 19, 1) 61%,
    rgba(31, 19, 51, 1) 100%
  );
  .header {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & .header-left {
      flex: 1;
      padding: 4rem 0;

      h1 {
        color: #fff;
        font-size: 5rem;

        span {
          background: var(--gradient-text);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        gap: 20px;

        .btn-green {
          background: #13ff80;
          color: #000;
          padding: 0.3rem 0;
          width: 160px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }
        .btn-transparent {
          background: transparent;
          color: #fff;
          padding: 0.3rem 0;
          width: 130px;
          border: 1px solid #fff;
          border-radius: 30px;
          cursor: pointer;
        }
      }

      p {
        color: #fff;
        width: 50%;
        text-align: left;
        padding: 1rem 0;
      }
    }
    & .header-right {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 5rem 0;
    }
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 20px;

      & .header-left {
        h1 {
          color: #fff;
          font-size: 3rem;
        }
        p {
          width: 100%;
        }
      }
      & .header-right {
        padding: 1rem 0;
        justify-content: start;

        .img-container {
          img {
            width: 250px;
            height: 250px;
          }
        }
      }
    }
  }
`;
