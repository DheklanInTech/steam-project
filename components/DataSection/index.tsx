import Image from "next/image";
import React from "react";
import { SectionStyle } from "./SectionStyles";

const DataSection = () => {
  return (
    <SectionStyle>
      <div className="circle">
        <Image src="/group2.svg" width={700} height={200} alt="circle" />
      </div>
      <div className="section">
        <div className="section-left">
          <div className="details">
            <p>
              Total stakes <br />
              per sec
            </p>
            <h3>1036</h3>
          </div>
          <div className="divider" />

          <div className="details">
            <p>
              Total wins <br />
              per sec
            </p>
            <h3>1036</h3>
          </div>
        </div>
        <div className="section-right">
          <div className="details">
            <p>Total stakes</p>
            <h2>19,345,234</h2>
          </div>
          <div className="divider" />
          <div className="details">
            <p>Total amount won</p>
            <h2>$19,345,234,566</h2>
          </div>
        </div>
      </div>
    </SectionStyle>
  );
};

export default DataSection;
