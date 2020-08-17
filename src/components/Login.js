import React, { Component } from "react";
import PropTypes from"prop-types";

const Login= (props) =>(

  <nav className="login">
      <h2>Inventory Store</h2>
      <p>Sign in to Manage your Store's Inventory</p>
      <button className="github" onClick={()=>props.authenticate("Github")}>LOGIN WITH GITHUB</button>
      <button className="facebook" onClick={()=>props.authenticate("Facebook")}>LOGIN WITH FACEBOOK</button>
      <button className="twitter" onClick={()=>props.authenticate("Twitter")}>LOGIN WITH TWITTER</button>
  </nav>
)

Login.propTypes={
    authenticate:PropTypes.func.isRequired
};

export default Login;