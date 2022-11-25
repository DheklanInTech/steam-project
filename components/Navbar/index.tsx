import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
            <Link href={"/"}>
              <MenuLinks onClick={() => setIsOpen(!isOpen)}>Learn</MenuLinks>
            </Link>

            <Link href={""}>
              <MenuLinks onClick={() => setIsOpen(!isOpen)}>
                Buy Polygon
              </MenuLinks>
            </Link>
            <Link href={""}>
              <MenuLinks onClick={() => setIsOpen(!isOpen)}>Stake</MenuLinks>
            </Link>
            <Button>Wallet</Button>
          </Menu>
        </Container>
      </div>
    </Nav>
  );
};

export default Navbar;
