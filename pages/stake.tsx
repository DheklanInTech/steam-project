import React, { ReactElement, useState, useEffect } from "react";
import BasicLayout from "../components/Layout/Basic";
import { NextPageWithLayout } from "../components/Layout/LayoutTypes";
import { StakeStyles } from "../styles/Stake.styles";
import ReactInputVerificationCode from "react-input-verification-code";
import Mobile from "../components/stakemobile";
import myabi from "../myabi.json";
import { BigNumber, ethers } from "ethers";
// import { MetaMaskInpageProvider} from "@metamask/providers";


declare var window: any


const Stake: NextPageWithLayout = () => {
  
  const contractABI = myabi;
  const [balance, setUserBalance] = useState<string>();
  const [staking, setStaking] = useState("");
  const [time, setTime] = useState("");
  const [stakeType , setStakeType] = useState<string>();
  const [userAddr, setUserAddr] = useState("");
  const contractAddress = "0xb9C4D297b39Ad3662E7efcF99F101703C55EBD11";
  const [contractProv, setContractProv] = useState<ethers.Contract>();
  const [input , setInput] = useState("");
  const [initialprice, setInitialPrice] = useState<any>();


  
  const [stake, setStake] = useState(true);

  const getWinner = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = provider.getSigner();
      const stakeContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    
    const time = await stakeContract.winners(signer);
    console.log(time);  
  }


  const getTimer = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = provider.getSigner();
      const stakeContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    
    const time = await stakeContract.random();
    console.log(time);  
  }

  const getInitialPrice = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = provider.getSigner();
      const stakeContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    const price = await stakeContract.initialPrice();
    // setInitialPrice(price);
    
    
    
  setInitialPrice(String(price));
  console.log(String(price))
  }







  useEffect(() =>{


    (async()=>{
      try {
        const { ethereum } = window;
  
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        const signer = provider.getSigner();
        const bal = await signer.getAddress();
        setUserAddr(bal);
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
  
  
          setContractProv(stakeContract)
  
          let gameOn = await stakeContract.gameOn(signer);  
          await gameOn.wait();
            console.log(gameOn);
          
          let myTimer = await stakeContract.myTimer();
          console.log('Timer ', myTimer);

          

        //   const myTimer = async () =>{
        //     await stakeContract.myTimer();
        //     console.log('Timer ', myTimer);
        //   }

        //   const  Timer = setTimeout(() => {
        //     myTimer();
        //  }, 1000);

  
          let paywinner = await stakeContract.paywinner();
          console.log('paywinner ',paywinner);
  
    
  
          let getBalance = await stakeContract.getBalance();
          console.log('Contract Balance', getBalance);
  
          let getPlayerNumber = await stakeContract.getPlayerNumber();
          console.log('Player Number ', getPlayerNumber);
          
      } catch (error) {
        console.log(error);
      }
  

    })()
    getInitialPrice();
  } ,[])



  const handleStake = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

 
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    const bal = await signer.getAddress();
      const stakeContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

    //  const col = ethers.utils.parseEther("1");
    //  console.log(Number(col))
      try{
          console.log(input)
        let stake = await stakeContract.stake(bal,stakeType,{value: ethers.utils.parseUnits(input, "ether")});
        

      }catch(e){

        console.log(e)
      }


      // console.log(staking);
      // let amount = ethers.utils.parseEther(staking);
      // const Stake = await contractAddress.stake(String())
      // await Stake.wait()
      // const balance = await provider.getBalance(contractAddress)
      // console.log('balance', balance)
      // const balanceFormatted = ethers.utils.formatEther(balance)
      // setUserBalance(balanceFormatted);
   

    // setStake(!stake);
  };


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
                <h2>$<span>{initialprice}</span></h2>
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
                    <button className="btn-play" type="button"  onClick={()=>setStakeType("higher")+window.alert("lower selected, set your amount and stake")}>
                      Higher
                    </button>
                    <div className="same">
                      <button className="btn-play" type="button" onClick={()=>window.alert("please choose higher or lower")}>
                        Same
                      </button>
                    </div>
                    <button className="btn-play" type="button" onClick={()=>setStakeType("lower")+window.alert("lower selected, set your amount and stake")}>
                      Lower
                    </button>
                  </div>
                  <div className="right">
                    <p>stake amount</p>
                    <div className="border-input">
                      $<input type="number"  onChange={(e)=>setInput(e.target.value)} />
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
              onClick={(e)=>handleStake(e)}
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
