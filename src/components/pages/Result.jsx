import React from "react";
import Layout from "../layout/Layout";
import { Text, Heading, Box, Button } from "grommet";
import OnesPayment from "../../containers/OnesPayment";
import MyPayment from "../../containers/MyPayment";

const Result = () => {
  const localData = JSON.parse(localStorage.getItem("SubmittedData"));
  return (
    <Layout>
      <Text>他の人支払いは一人...</Text>
      <Heading responsive={false} size="medium" level="3" textAlign="center">
        <OnesPayment
          bill={localData.bill}
          numOfPeople={localData.numOfPeople}
          calcOption={localData.calcOption}
        />
        円
      </Heading>
      <Text>あなたの支払いは...</Text>
      <Heading responsive={false} size="medium" level="3" textAlign="center">
        <MyPayment
          bill={localData.bill}
          numOfPeople={localData.numOfPeople}
          calcOption={localData.calcOption}
        />
        円
      </Heading>
      <Box margin={{ top: "medium", bottom: "small" }}>
        <Button primary label={<Box align="center">←戻る</Box>} href="/" />
      </Box>
    </Layout>
  );
};

export default Result;
