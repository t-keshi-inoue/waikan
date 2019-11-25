import React from "react";
import Layout from "../layout/Layout";
import { Text, Heading, Box, Button } from "grommet";

const Result = () => {
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
    </Layout>
  );
};

export default Result;
