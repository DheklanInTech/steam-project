import styled from "styled-components";

export const TopWinnerStyles = styled.div`
  background: rgb(13, 14, 19);
  background: linear-gradient(
    90deg,
    rgba(13, 14, 19, 1) 61%,
    rgba(31, 19, 51, 1) 100%
  );
  padding: 3rem 3rem;
  z-index: 2;

  .head-title {
    color: #fff;
    span {
      background: var(--gradient-text);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 5px;

    & .child {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 20px;
      padding: 2rem 0;

      span {
        font-size: 20px;
        color: #fff;
      }
      .child-img {
        margin-left: 1rem;
      }
      .child-content {
        padding-top: 1rem;
        h2 {
          color: #fff;
        }
        p {
          color: #fff;
          opacity: 95%;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;

    .parent {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 1px;
      grid-row-gap: 1px;

      & .child {
        padding: 0 0;

        span {
          font-size: 20px;
          color: #fff;
        }
        .child-img {
          margin-left: 0rem;

          img {
            height: 50px;
            width: 50px;
          }
        }
        .child-content {
          padding-top: 1rem;
          h2 {
            color: #fff;
            font-size: 15px;
          }
          p {
            color: #fff;
            opacity: 95%;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
