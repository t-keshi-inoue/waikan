import React from "react";

const Test = ({ bill, numOfPeople, calcOption }) => {
  return (
    <ul>
      <li>{bill}</li>
      <li>{numOfPeople}</li>
      <li>{calcOption}</li>
    </ul>
  );
};

export default Test;
