import React from "react";

const MyPayment = ({ bill, numOfPeople, calcOption }) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  switch (calcOption) {
    case "ダサ勘":
      return (
        <div>{bill - Math.floor(bill / numOfPeople) * (numOfPeople - 1)}</div>
      );
    case "セコ勘":
      return (
        <div>
          {bill -
            Math.ceil(pureBill / numOfPeople / 1000) * 1000 * (numOfPeople - 1)}
        </div>
      );
    case "イケ勘":
      return (
        <div>
          {bill -
            Math.floor(pureBill / numOfPeople / 1000) *
              1000 *
              (numOfPeople - 1)}
        </div>
      );

    default:
      return <div>nothing above!</div>;
  }
};

export default MyPayment;
