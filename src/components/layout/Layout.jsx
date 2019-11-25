import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "grommet";

const Layout = props => (
  <Box pad="medium" height="100vh">
    <Header />
    <Footer />
    <Box
      justify="evenly"
      margin={{ horizontal: "small" }}
      height="80vh"
      width="medium"
      alignSelf="center"
      alignContent="stretch"
      round="small"
      background={{
        color: "white",
        opacity: "0.9",
      }}
      pad={{ vertical: "small", horizontal: "large" }}
      elevation="large"
      style={{ zIndex: "1" }}
      {...props}
    />
  </Box>
);

export default Layout;
