// セコ勘

export const onesPayment0 = (bill, numOfPeople) => {
  return Math.floor(bill / numOfPeople);
};

export const myPayment0 = (bill, numOfPeople) => {
  return bill - onesPayment0(bill, numOfPeople) * (numOfPeople - 1);
};

// イケ勘

export const onesPayment1 = (bill, numOfPeople) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  return Math.floor(pureBill / numOfPeople / 1000) * 1000;
};

export const myPayment1 = (bill, numOfPeople) => {
  return bill - onesPayment1(bill, numOfPeople) * (numOfPeople - 1);
};

// ズル勘

export const onesPayment2 = (bill, numOfPeople) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  return Math.ceil(pureBill / numOfPeople / 1000) * 1000;
};

export const myPayment2 = (bill, numOfPeople) => {
  return bill - onesPayment2(bill, numOfPeople) * (numOfPeople - 1);
};

console.log(onesPayment2(8500, 3));
console.log(myPayment2(8500, 3));
