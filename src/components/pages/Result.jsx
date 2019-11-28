import React from "react";
import Layout from "../layout/Layout";
import { Text, Heading, Box, Button } from "grommet";
import { OnesPayment0 } from "../../containers/Payment";
import Switch from "../../containers/Switch";

const Result = () => {
  const localData = JSON.parse(localStorage.getItem("SubmittedData"));
  return (
    <Layout>
      <Text>お勘定は...</Text>
      <Heading responsive={false} size="medium" level="3" textAlign="center">
        一人２０００円
      </Heading>
      <Text>あなたの収支は...</Text>
      <Heading responsive={false} size="medium" level="3" textAlign="center">
        ー　２０００円
      </Heading>
      <Box margin={{ top: "medium", bottom: "small" }}>
        <Button primary label={<Box align="center">←戻る</Box>} href="/" />
      </Box>

      <ul>
        <li>{localData.bill}</li>
        <li>{localData.numOfPeople}</li>
        <li>{localData.calcOption}</li>
      </ul>

      <Switch
        bill={localData.bill}
        numOfPeople={localData.numOfPeople}
        calcOption={localData.calcOption}
      />
    </Layout>
  );
};

export default Result;
