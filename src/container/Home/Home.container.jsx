import React, { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import HomeWalletForm from "./HomeForm.container";

const Home = () => {
  const [network, setNetwork] = useState(null);
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };
  const recaptchHandler = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <>
      <Header network={network} setNetwork={setNetwork} />
      <div className="home_wrapper">
        <div className="notice_board">
          <div className="container">
            <div className="notice_text">
              <p>Notice here</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home_content">
            <div className="content_title">
              <h2>Request testnet LINK</h2>
              <p>
                Get testnet LINK for an account on one of the supported
                blockchain testnets so you can create and test your own oracle
                and Chainlinked smart contract
              </p>
            </div>
            <HomeWalletForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              recaptchHandler={recaptchHandler}
              network={network}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
