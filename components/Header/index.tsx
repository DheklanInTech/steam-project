import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  const router = useRouter();

  const handleStake = () => {
    router.push("/stake");
  };
  return (
    <HeaderStyles>
      <div className="header">
        <div className="topeclips">
          <Image
            src="/top.svg"
            height={"200"}
            width={"200"}
            alt="header"
            className="topeclips"
          />
        </div>
        <div className="header-left">
          <h1>
            High Risks, High Profits. Not Built For <span>#Everyone.</span>
          </h1>
          <div className="buttons">
            <button
              onClick={handleStake}
              onKeyDown={handleStake}
              className="btn-green"
              type="button"
            >
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
            <div className="first rotate-center">
              <h4>5x</h4>
            </div>
            <div className="second rotate-center">
              <h6>2x</h6>
            </div>
            <div className="third rotate-center">
              <h3>10x</h3>
            </div>
            <div className="main-img ">
              <Image
                src="/Group 1.png"
                height={"500"}
                width={"480"}
                alt="header"
                className="imgs"
              />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
