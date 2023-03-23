import React, { useState, useContext } from "react";
import AuthContext from "../../auth-context";

import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { toggleAuthenticated } = useContext(AuthContext);
  const [remember, setRemember] = useState(false);

  const redirectTo = (item) => {
    navigate(item);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [state, setState] = useState("idle");
  const [messageValidation, setMessageValidation] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  function validateEmail(e) {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }

  const login = () => {
    setPasswordValidation(false);
    postLogin({ email: email, password: password })
      .then((res) => {
        if (res.data.token) {
          remember && sessionStorage.setItem("remember", JSON.stringify(true));

          sessionStorage.setItem("atomiclab-user", JSON.stringify(res.data));
          toggleAuthenticated();
        } else if (res.data.error) {
          setMessageValidation(true);
          setState("idle");
        }
      })
      .catch((error) => {
        setMessageValidation(true);
        setState("idle");
      });
  };

  const onClickHandler = () => {
    setState("loading");
    setMessageValidation(false);

    setTimeout(() => {
      if (validateEmail(email) === false) {
        setPasswordValidation(true);
        setState("idle");
      } else {
        login();
      }
    }, 2000);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      password && email && onClickHandler();
    }
  };

  const properties = {
    redirectTo,
    email,
    setEmail,
    password,
    setPassword,
    passwordValidation,
    state,
    onClickHandler,
    messageValidation,
    handleKeyPress,
    viewPassword,
    setViewPassword,
    remember,
    setRemember,
  };

  return <View {...properties} />;
}

export default Index;
