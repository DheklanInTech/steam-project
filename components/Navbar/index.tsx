import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { ethers } from "ethers";
import {
  Nav,
  Hamburger,
  Container,
  Menu,
  MenuLinks,
  Button,
} from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [learn, setLearn] = useState(false);
  // const [connectWallet, setConnectWallet] = useState(false);
  const [mobilenav, setMobilenav] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [currentAccount, setCurrentAccount] = useState("wallet");
  const [currentAccountCol, setCurrentAccountCol] = useState<string>("Wallet");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setCurrentAccountCol(splitter(accounts[0]));
    } catch (error) {
      console.log(error);
    }
  };





const splitter = (value:string):string =>{
   const col = value.slice(0,5);   
  const col2 = value.slice(38,42);

  return (col+"..."+col2);
}



  useEffect(() => {
    checkIfWalletIsConnected();
  }, [currentAccountCol,currentAccount]);

  // const handleConnectWallet = () => {
  //   setConnectWallet(!connectWallet);
  // };

  const handleMobileNav = () => {
    setMobilenav(!mobilenav);
    if (learn) {
      setLearn(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleLearn = () => {
    setLearn(!learn);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <Nav className={x.join(" ")}>
      <div className="container-fluid ">
        <Link href={"/"}>
          {" "}
          <Image src="/logo.svg" height={50} width={100} alt="logo" />{" "}
        </Link>
        <Hamburger onClick={handleMobileNav}>
          {mobilenav ? (
            <BiMenuAltRight size={24} color="#fff" />
          ) : (
            <BiMenuAltRight size={24} color="#fff" />
          )}
        </Hamburger>
        <Container isOpen={mobilenav}>
          <Menu>
            <MenuLinks onClick={handleLearn}>
              Learn{" "}
              <span> {learn ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>{" "}
            </MenuLinks>
            {learn && (
              <div className="learn">
                <div>
                  <h6>How to stake</h6>
                  <p>Learn the abcs of staking on steam</p>
                </div>
                <div>
                  <h6>Why steam</h6>
                  <p>Why stake on steam? we will let you decide</p>
                </div>
              </div>
            )}

            <Link href="https://polygon.technology/" target="_blank">
              <MenuLinks onClick={() => setIsOpen(!isOpen)}>
                Buy Polygon
              </MenuLinks>
            </Link>
            <Link href="/stake">
              <MenuLinks onClick={() => setIsOpen(!isOpen)}>Stake</MenuLinks>
            </Link>
            <Button type="button" onClick={connectWallet}>
              {!currentAccount ? (<span>Wallet</span>) : (<span>{currentAccountCol}</span>)}{""}
            </Button>
          </Menu>
        </Container>
      </div>
    </Nav>
  );
};

export default Navbar;
