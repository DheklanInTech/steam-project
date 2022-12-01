import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
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
  const [connectWallet, setConnectWallet] = useState(false);

  const handleConnectWallet = () => {
    setConnectWallet(!connectWallet);
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
    setIsOpen(!isOpen);
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
        <Link href={"/"}>Logo</Link>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <BiMenuAltRight size={24} color="#000000" />
          ) : (
            <BiMenuAltRight size={24} color="#000000" />
          )}
        </Hamburger>
        <Container isOpen={isOpen}>
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
            <Button type="button" onClick={handleConnectWallet}>
              {!connectWallet ? <span>Wallet</span> : <span>Disconnect</span>}{" "}
            </Button>
          </Menu>
        </Container>
      </div>
    </Nav>
  );
};

export default Navbar;
