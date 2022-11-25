import Image from "next/image";
import React from "react";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="header">
        <div className="header-left">
          <h1>
            High Risks, High Profits. Not Built For <span>#Everyone.</span>
          </h1>
          <div className="buttons">
            <button className="btn-green" type="button">
              {" "}
              Get Started
            </button>
            <button className="btn-transparent" type="button">
              {" "}
              learn
            </button>
          </div>
          <p>
            Steam is a decentralized casino built on polygon, that allows users
            earn by staking their polygon tokens.
          </p>
        </div>

        <div className="header-right">
          <div className="img-container">
            <Image
              src="/Group 1.png"
              height={"400"}
              width={"400"}
              alt="header"
              className="imgs"
            />
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
