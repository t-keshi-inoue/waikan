import {
  onesPayment0,
  myPayment0,
  onesPayment1,
  myPayment1,
  onesPayment2,
  myPayment2,
} from "./Payment.js";

const answer = { bill: 8999, numOfPeople: 3, paymentMethod: 1 };

const result = (bill, numOfPeople, paymentMethod) => {
  switch (answer.paymentMethod) {
    case 0:
      return (
        onesPayment0(answer.bill, answer.numOfPeople) &&
        myPayment0(answer.bill, answer.numOfPeople)
      );

    case 1:
      return (
        onesPayment1(answer.bill, answer.numOfPeople) &&
        myPayment1(answer.bill, answer.numOfPeople)
      );

    case 2:
      return (
        onesPayment2(answer.bill, answer.numOfPeople) &&
        myPayment2(answer.bill, answer.numOfPeople)
      );

    default:
      console.log("none is above");
  }
};

console.log(result(8999, 3, 3));
