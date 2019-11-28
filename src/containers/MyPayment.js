export const myPayment0 = (bill, numOfPeople) => {
  return bill - OnesPayment0(bill, numOfPeople) * (numOfPeople - 1);
};

export const myPayment1 = (bill, numOfPeople) => {
  return bill - onesPayment1(bill, numOfPeople) * (numOfPeople - 1);
};

export const myPayment2 = (bill, numOfPeople) => {
  return bill - onesPayment2(bill, numOfPeople) * (numOfPeople - 1);
};
