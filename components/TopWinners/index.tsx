import Image from "next/image";
import React from "react";
import { TopWinnerStyles } from "./TopWinnerStyles";

const data = [
  {
    id: 1,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 2,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 3,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 4,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 5,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 6,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 7,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 8,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
  {
    id: 9,
    image: "/image.png",
    amount: "100,000 Matic",
    wallet: "XkkisjlskdlssdlYUJIKKKJHn NMkK",
  },
];

const TopWinners = () => {
  return (
    <TopWinnerStyles>
      <h2 className="head-title">
        This week’s Top <span>#Winners</span>
      </h2>

      <div className="parent">
        {data.map((item) => (
          <div className="child" key={item.id}>
            <span>{item.id}</span>
            <div className="child-img">
              <Image src={item.image} width={80} height={80} alt="imgs" />
            </div>
            <div className="child-content">
              <h4>{item.amount}</h4>
              <p>{item.wallet}</p>
            </div>
          </div>
        ))}
      </div>
    </TopWinnerStyles>
  );
};

export default TopWinners;
