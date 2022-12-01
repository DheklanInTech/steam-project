import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterStyles } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer-right">
          <h6>Mangaed by the Steam foundation .</h6>
          <div className="buttons">
            <Image src="/Twitter.svg" height={34} width={34} alt="icon" />
            <Image src="/Discord.svg" height={34} width={34} alt="icon" />
            <Image src="/YouTube.svg" height={34} width={34} alt="icon" />
            <Image src="/Telegram.svg" height={34} width={34} alt="icon" />
            <Image src="/Reddit.svg" height={34} width={34} alt="icon" />
          </div>
          <p> &copy; 2022 Steam Foundation. All rights reserved</p>
        </div>
        <div className="footer-left">
          <h5>Steam</h5>
          <div className="contents">
            <div className="left">
              <p>Stake</p>
              <p>Buy Polygon</p>
              <p>Policies</p>
            </div>
            <div className="right">
              <p>Blog</p>
              <p>Media Kit</p>
            </div>
          </div>

          <h6>Sign up to our Newsletter</h6>
          <input type="text" placeholder="type in your email" />
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
