import React from "react";

const OnesPayment = ({ bill, numOfPeople, calcOption }) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  switch (calcOption) {
    case "ダサ勘":
      return <div>{Math.floor(bill / numOfPeople)}</div>;
    case "セコ勘":
      return <div>{Math.ceil(pureBill / numOfPeople / 1000) * 1000}</div>;
    case "イケ勘":
      return <div>{Math.floor(pureBill / numOfPeople / 1000) * 1000}</div>;
    default:
      return <div>nothing above!</div>;
  }
};

export default OnesPayment;
