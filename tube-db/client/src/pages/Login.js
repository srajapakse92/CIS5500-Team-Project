import './Login.css';
import LoginButton from '../components/login';
import LogoutButton from '../components/logout';
import {gapi} from 'gapi-script';
import { useEffect, useState } from 'react';

const CLIENT_ID = "1034575332123-8tgla9079nd652nlfttj4lmub58up4ke.apps.googleusercontent.com"
const API_KEY = "AIzaSyCrG2ljgMyqUl9JS-mdHwrKZbbGscficYo"

function Login() {

  

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientID: CLIENT_ID
      })
    };

    gapi.load('client:auth2', start);

  });

  // const handleFailure = (result) => {

  //   alert(result);
  // };

  // const handleLogin = (response) => {

  //   console.log(response.credential);
  //   setUser(response.credential.profileObj);
  // };

  return (
    <div className="Login">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default Login;
