export const OnesPayment0 = ({ bill, numOfPeople }) => {
  return Math.floor(bill / numOfPeople);
};

export const onesPayment1 = (bill, numOfPeople) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  return Math.floor(pureBill / numOfPeople / 1000) * 1000;
};

export const onesPayment2 = (bill, numOfPeople) => {
  const pureBill = Math.floor(bill / 1000) * 1000;
  return Math.ceil(pureBill / numOfPeople / 1000) * 1000;
};
