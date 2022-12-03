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
  const [mobilenav, setMobilenav] = useState(false);
  const handleConnectWallet = () => {
    setConnectWallet(!connectWallet);
  };

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
