import React from "react";

// セコ勘

export const myPayment0 = (bill, numOfPeople) => {
  return bill - OnesPayment0(bill, numOfPeople) * (numOfPeople - 1);
};

// イケ勘

export const myPayment1 = (bill, numOfPeople) => {
  return bill - onesPayment1(bill, numOfPeople) * (numOfPeople - 1);
};

// ズル勘

export const myPayment2 = (bill, numOfPeople) => {
  return bill - onesPayment2(bill, numOfPeople) * (numOfPeople - 1);
};

export const OnesPayment0 = ({ bill, numOfPeople }) => {
  return Math.floor(bill / numOfPeople);
};
