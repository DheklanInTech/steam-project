import styled from "styled-components";

export const StakeStyles = styled.div`
  padding: 3rem 3rem;
  background: rgb(13, 14, 19);
  background: linear-gradient(
    90deg,
    rgba(13, 14, 19, 1) 61%,
    rgba(31, 19, 51, 1) 100%
  );

  .header-container {
    padding: 5rem 3rem;
    color: #fff;

    & .head-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .dashboard {
      margin: 1rem 0;
      background: #681ee1;
      border-radius: 20px;

      .divider {
        height: 1px;
        width: 100%;
        background: #b3b3b3;
      }
      .margin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      }

      .parent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // margin-top:1rem;
        padding: 3rem 2rem;

        .flex-1 {
          flex: 1;
        }
        .flex-2 {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          flex-direction: column;

          .custom-styles {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            h1 {
              font-size: 4rem;
            }
          }

          .inputs {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            input {
              background: transparent;
              border: 1px solid #fff;
              height: 80px;
              width: 80px;
            }
          }
        }
        .flex-3 {
          flex: 1;
          text-align: right;
        }
      }
    }

    & .select-prediction {
      margin: 4rem 0;
      h2 {
        span {
          background: var(--gradient-text);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .play-container {
        background: rgb(28, 30, 41);
        background: linear-gradient(
          342deg,
          rgba(28, 30, 41, 1) 11%,
          rgba(64, 69, 93, 1) 98%
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2rem;
        border-radius: 10px;

        .left {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;

          .btn-play {
            padding: 0.6rem 0;
            width: 150px;
            border: 1px solid #fff;
            outline: none;
            background: transparent;
            color: #fff;
            font-weight: 600;
            border-radius: 30px;

            &:hover {
              background: #13ff80;
              color: #000;
              border: 1px solid #13ff80;
            }

            &.active {
              background: #13ff80;
              color: #000;
              border: 1px solid #13ff80;
            }
          }
          .same {
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
            padding: 0 1rem;
          }
        }

        .right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;

          p {
            font-size: 18px;
            margin-top: 1rem;
          }

          .border-input {
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 150px;
            padding: 0.8rem 0;
            border-radius: 10px;

            input {
              width: 120px;
              border: none;
              background: transparent;
              color: #fff;
            }
          }
        }
      }
    }

    & .results-section {
      display: flex;
      justify-content: space-between;
      align-items: start;
      border-bottom: 1px solid #fff;
      margin: 4rem 0;
      padding-bottom: 1rem;

      p {
        opacity: 80%;
      }

      .content {
        padding: 2rem 0;
        text-align: left;
      }
      .last-content {
        padding: 2rem 0;
        h3 {
          text-align: right;
        }
      }
    }

    & .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;

      p {
        opacity: 50%;
      }
      .btn-play {
        padding: 0.6rem 0;
        width: 150px;
        border: 1px solid #fff;
        outline: none;
        background: transparent;
        color: #fff;
        font-weight: 600;
        border-radius: 30px;

        &:hover {
          background: #13ff80;
          color: #000;
          border: 1px solid #13ff80;
        }

        &.active {
          background: #13ff80;
          color: #000;
          border: 1px solid #13ff80;
        }
      }
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
