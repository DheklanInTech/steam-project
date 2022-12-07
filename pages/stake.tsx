import React, { ReactElement, useState, useEffect } from "react";
import BasicLayout from "../components/Layout/Basic";
import { NextPageWithLayout } from "../components/Layout/LayoutTypes";
import { StakeStyles } from "../styles/Stake.styles";
import ReactInputVerificationCode from "react-input-verification-code";
import Mobile from "../components/stakemobile";
import myabi from "../myabi.json";
import { ethers } from "ethers";
import type { MetaMaskInpageProvider } from "@metamask/providers";

declare var window: any


const Stake: NextPageWithLayout = () => {
  
  const contractABI = myabi;
  const [balance, setUserBalance] = useState(null);
  const [staking, setStaking] = useState("")
  
  const contractAddress = "0xc1cb94CBFF4E2c15cEa5a061f8C84B0Bb1c23580";
  
  

  
  const [stake, setStake] = useState(true);

  const handleStake = async () => {
  

    setStake(!stake);
  };

  useEffect(() =>{
    (async()=>{
      try {
        const { ethereum } = window;
  
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        const signer = provider.getSigner();
        const bal = await signer.getAddress();
        console.log("now okay")
        const balanc = await provider.getBalance(String(bal));
          console.log("this is the balance");
          console.log(signer)
          console.log(balanc)
          const stakeContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
  
  
        //   function sendTx() {
        //     stakeContract.myTimer.myFunction().send();
        //  };
  
  
            
  
          
          let myTimer = await stakeContract.myTimer();
          console.log('Timer ', myTimer);
  
          let paywinner = await stakeContract.paywinner();
          console.log('paywinner ',paywinner);
  
          let stake = await stakeContract.stake();
  
          let getBalance = await stakeContract.getBalance();
          console.log('Contract Balance', getBalance);
  
          let getPlayerNumber = await stakeContract.getPlayerNumber();
          console.log('Player Number ', getPlayerNumber);
          
      } catch (error) {
        console.log(error);
      }
  

    })()
  } ,[])

  return (
    <>
      <Mobile />
      <StakeStyles>
        <div className="header-container">
          <div className="head-title">
            <h4>Stake</h4>
            <p>Live</p>
            <p>Previous result</p>
          </div>

          {/* dasboard starts here */}
          <div className="dashboard">
            <div className="margin">
              <p>Profit margin</p>
              <p>200%</p>
              <p>300%</p>
              <p>500%</p>
            </div>
            <div className="divider" />
            <div className="parent">
              <div className="flex-1">
                <p>Current token price</p>
                <h2>$3279</h2>
              </div>
              <div className="flex-2">
                <p>Price After 1 year</p>
                <div className="custom-styles">
                  <h1>$</h1>
                  <div className="inputs">
                    <input type="text" readOnly />
                    <input type="text" readOnly />
                    <input type="text" readOnly />
                    <input type="text" readOnly />
                    <input type="text" readOnly />
                  </div>
                </div>
              </div>
              <div className="flex-3">
                <p>Timer</p>
                <h2>20:34</h2>
              </div>
            </div>
          </div>
          {/* dasboard ends here */}

          {stake ? (
            <>
              {/* select prediction section  starts here */}
              <div className="select-prediction">
                <h2>
                  Select your <span>#prediction</span>
                </h2>
                <div className="play-container">
                  <div className="left">
                    <button className="btn-play       " type="button">
                      Higher
                    </button>
                    <div className="same">
                      <button className="btn-play" type="button">
                        Same
                      </button>
                    </div>
                    <button className="btn-play" type="button">
                      Lower
                    </button>
                  </div>
                  <div className="right">
                    <p>stake amount</p>
                    <div className="border-input">
                      $<input type="number" />
                    </div>
                  </div>
                </div>
              </div>
              {/* select prediction section  ends here */}
            </>
          ) : (
            <>
              {/* result section starts here */}
              <div className="results-section">
                <div className="content">
                  <p>Result</p>
                  <h3 className="win">You Won!</h3>
                  <h3 className="lost">Sorry you lost!</h3>
                </div>
                <div className="content">
                  <p>Your prediction</p>
                  <h3>Higher</h3>
                </div>
                <div className="content">
                  <p>Stake</p>
                  <h3>$250</h3>
                </div>
                <div className="content">
                  <p>Profit made</p>
                  <h3>$500</h3>
                </div>
                <div className="last-content">
                  <p>Total revenue</p>
                  <h3>$400</h3>
                </div>
              </div>
              {/* result section  ends here */}
            </>
          )}

          {/* footer starts here */}
          <div className="footer">
            <p>May the odds be with you</p>
            <button
              className="btn-play active"
              type="button"
              onClick={handleStake}
            >
              Stake
            </button>
          </div>
          {/* footer ends here */}
        </div>
      </StakeStyles>
    </>
  );
};

export default Stake;

Stake.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
