import React from "react";
import { Helmet } from "react-helmet";
import Routers from "../routes";
import Web3 from "web3";

const App = () => {
  const web3 =new Web3("https://mainnet.infura.io/v3/681332a2c23a4ce8ac972bfbdfa75555")
  console.log(web3)
  return (
    <>
      <Helmet>
        <title>Faucets</title>
        {/* google font family link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Routers />
    </>
  );
};

export default App;
