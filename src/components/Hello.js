import React from "react";

const Hello = ({ name, backgroundColor, bill }) => {
  return (
    <div>
      <h4 style={{ backgroundColor }}>
        Hello {name}, your payment is {bill}
      </h4>
    </div>
  );
};

export default Hello;
