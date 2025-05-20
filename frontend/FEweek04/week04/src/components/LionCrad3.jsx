import React from "react";
import lion3 from "../assets/lion3.jpg";

const LionCard1 = () => {
  const isReal = false;
  return (
    <div>
      <img src={lion3} />
      <h1> 3번 사자 </h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </div>
  );
};

export default LionCard1;
