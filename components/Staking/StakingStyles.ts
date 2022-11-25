import styled from "styled-components";

export const StakingStyles = styled.div`
  background: #0d0e13;
  color: #fff;
  padding: 4rem 3rem;

  .gd-text {
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .staking {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 100px;

    .divider {
      background: #fff;
      height: 1px;
      width: 100%;
      margin: 1rem 0;
    }

    & .staking-left {
      padding-right: 10rem;

      .top-left {
        padding-bottom: 2rem;

        p {
          padding-left: 0.5rem;
        }
      }
      .bottom-left {
        p {
          padding-left: 0.5rem;

          span {
            color: #292929;
            padding-right: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;

    .staking {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      & .staking-left {
        padding-right: 0rem;

        .top-left {
          padding-bottom: 2rem;

          p {
            padding-left: 0.5rem;
          }
        }
        .bottom-left {
          p {
            padding-left: 0.5rem;

            span {
              color: #292929;
              padding-right: 1rem;
            }
          }
        }
      }
    }
  }
`;
