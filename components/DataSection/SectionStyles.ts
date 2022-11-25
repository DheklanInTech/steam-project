import styled from "styled-components";

export const SectionStyle = styled.div`
  background: rgb(169, 128, 235);
  background: radial-gradient(
    circle,
    rgba(169, 128, 235, 1) 0%,
    rgba(104, 30, 225, 1) 100%
  );
  position: relative;

  .circle {
    position: absolute;
    top: 0px;
    bottom: 0;
    overflow: hidden;
    left: 320px;
  }
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    gap: 80px;

    & .section-left,
    .section-right {
      flex: 1;

      p,
      h2,
      h3 {
        color: #fff;
      }
    }
    .divider {
      background: #fff;
      height: 1px;
      width: 100%;
      margin: 1rem 0;
    }
    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -1rem;
    }
  }

  @media (max-width: 768px) {
    .circle {
      position: absolute;
      top: 20px;
      left: -100px;
    }
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem;
      gap: 20px;

      .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: -1rem;
        font-size: 14px;

        p {
          font-size: 9px;
        }
        h3 {
          font-size: 14px;
        }
        h2 {
          font-size: 14px;
        }
      }
    }
  }
`;
