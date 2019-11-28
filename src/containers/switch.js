import React from "react";
import {
  OnesPayment0,
  myPayment0,
  onesPayment1,
  myPayment1,
  onesPayment2,
  myPayment2,
} from "./Payment.js";

const Switch = ({ bill, numOfPeople, calcOption }) => {
  switch (calcOption) {
    case "ダサ勘":
      return Math.floor(bill / numOfPeople);
    case "セコ勘":
      return (
        <ol>
          <li>{onesPayment1(bill, numOfPeople)}</li>
          <li>{myPayment1(bill, numOfPeople)}</li>
        </ol>
      );
    case "イケ勘":
      return onesPayment2(bill, numOfPeople) && myPayment2(bill, numOfPeople);

    default:
      return <div>nothing above!</div>;
  }
};

export default Switch;
