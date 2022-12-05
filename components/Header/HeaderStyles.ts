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
    position: relative;

    & .topeclips {
      position: absolute;
      top: -20px;
      left: 250px;
      right: 0;
    }

    & .header-left {
      flex: 1.5;
      padding: 4rem 0;
      margin-top: 3rem;
      z-index: 1;
      h1 {
        color: #fff;
        font-size: 6rem;

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
          padding: 0.6rem 0;
          width: 160px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }
        .btn-transparent {
          background: transparent;
          color: #fff;
          padding: 0.6rem 0;
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
      justify-content: end;
      padding: 5rem 0;
      margin-top: 2rem;
      border: none;

      .img-container {
        position: relative;
        right: -40px;
        overflow: hidden;
      }

      .first {
        position: absolute;
        bottom: 130px;
        right: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 70px;
        height: 70px;
        color: #fff;
        background: rgb(115, 75, 179);
        background: radial-gradient(
          circle,
          rgba(115, 75, 179, 1) 42%,
          rgba(63, 44, 93, 1) 100%
        );
        box-shadow: rgba(104, 30, 225, 0.75) 0px 2px 20px 4px;
      }

      .second {
        position: absolute;
        top: 120px;
        right: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        color: #fff;
        background: rgb(196, 126, 151);
        background: radial-gradient(
          circle,
          rgba(196, 126, 151, 0.9612219887955182) 36%,
          rgba(143, 81, 104, 0.9472163865546218) 100%
        );
        box-shadow: rgba(255, 94, 152, 0.75) 0px 2px 20px 4px;
      }

      .third {
        position: absolute;
        top: 20px;
        left: 30px;
        width: 100px;
        height: 100px;
        color: #fff;
        background: rgb(48, 196, 116);
        background: radial-gradient(
          circle,
          rgba(48, 196, 116, 1) 36%,
          rgba(39, 77, 56, 1) 100%
        );
        box-shadow: rgba(19, 255, 128, 0.75) 0px 2px 20px 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 10px;

      & .topeclips {
        display: none;
      }

      & .header-left {
        flex: 1;
        padding: 1rem 0;

        h1 {
          color: #fff;
          font-size: 3rem;
        }
        p {
          width: 100%;
        }
      }
      & .header-right {
        padding: 0 0;
        justify-content: start;

        .img-container {
          position: relative;
          right: 0;
          overflow: visible;

          img {
            width: 250px;
            height: 250px;
          }
        }

        .first {
          position: absolute;
          bottom: 30px;
          right: 100px;
          width: 40px;
          height: 40px;

          h4 {
            padding-top: 0.5rem;
          }
        }

        .second {
          position: absolute;
          top: 80px;
          right: 20px;
          width: 30px;
          height: 30px;

          h6 {
            padding-top: 0.5rem;
          }
        }

        .third {
          position: absolute;
          top: -20px;
          left: 30px;
          width: 70px;
          height: 70px;
          color: #fff;
        }
      }
    }
  }
`;
