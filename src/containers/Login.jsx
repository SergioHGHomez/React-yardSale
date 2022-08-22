import React from "react";
import "../styles/login.scss";

const Login = () => {
  return (
    <div className="container-login">
      <div className="form-container">
        <img
          className="form-container_img"
          src="Platzi_YardSale_Logos/logo_yard_sale.svg"
          alt="logo"
        />
        <form className="form-container_form" action="/">
          <label className="form-container_label" for="email-input">
            Email address
          </label>
          <input
            className="form-container_input"
            id="email-input"
            type="text"
          />
          <label className="form-container_label" for="password-input">
            password
          </label>
          <input
            className="form-container_input"
            id="password-input"
            type="text"
          />
          <input className="primary-button" type="button" value="log in" />
        </form>

        <p className="form-container_p">
          <a className="form-container_forgot-pass" href="/">
            Forgot my password
          </a>
        </p>
        <input
          className="secondary-button"
          id="signup-button"
          type="button"
          value="sign up"
        />
      </div>
    </div>
  );
};

export default Login;
