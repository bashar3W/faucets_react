import React, { useState } from "react";
import Header from "../../components/Shared/Header/Header";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import Footer from "../../components/Shared/Footer/Footer";
import Button from "../../components/UI/Button";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const Signup = () => {
  const [values, setValue] = useState({});
  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // password type change
  const [passwordType, setPasswordType] = useState(false);
  return (
    <>
      <Header />
      <div className="auth_page_wrapper">
        <div className="container">
          <div className="auth_form">
            <div className="title">
              <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="form_group">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordType ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                 <span onClick={()=>setPasswordType(!passwordType)}>{passwordType ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
              </div>
              <div className="form_group">
                <Button type="submit">Sign Up</Button>
              </div>
            </form>
            <div className="auth_footer">
              <p>
                Already have an account? <Link to="/login">Login</Link>{" "}
              </p>
              <div className="auth_media">
                <p>Or</p>
                <div className="media">
                  <FaGoogle />
                  <FaFacebook />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
