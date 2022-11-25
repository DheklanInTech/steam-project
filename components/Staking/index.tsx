import React from "react";
import { StakingStyles } from "./StakingStyles";

const Staking = () => {
  return (
    <StakingStyles>
      <div className="staking">
        <div className="staking-left">
          <div className="top-left">
            <h3>
              Staking on <span className="gd-text">#Steam</span>
            </h3>
            <div className="divider" />

            <p>
              You&apos;re basically predicting whether the market provided goes
              higher, lower, stays the same or rug pulls depending on your
              desired profiy margin.
              <br />
              The rug pull option only appears in the 5x and 10x section.{" "}
            </p>
          </div>

          <div className="bottom-left">
            <h3>
              How to <span className="gd-text">#Stake</span>
            </h3>
            <div className="divider" />

            <p>
              <span>1</span> Open the &quot;Stake&quot; page
            </p>
            <p>
              <span>2</span> Select the desired profit margin (e.g 2x,5x or 10x)
            </p>
            <p>
              <span>3</span> Select your bet - Higher, Lower, The same or Rug
              pull
            </p>
            <p>
              <span>4</span> Place bet.
            </p>
            <div className="divider" />
          </div>
        </div>
        <div className="staking-right">
          <h3>
            Why <span className="gd-text">#Steam</span>
          </h3>
          <div className="divider" />

          <p>
            The ones who understand money will always take finacial risks with
            crazy profit margins, <br />
            we figured if you&apos;re going to stake regardless, we&apos;d
            better provide a platform where you actually have a chance at
            winning.{" "}
          </p>
          <h4>So why not steam?</h4>
        </div>
      </div>
    </StakingStyles>
  );
};

export default Staking;
