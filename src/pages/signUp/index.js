import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postCreateAccount } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectTo = (item) => {
    navigate(item);
  };

  let { id_project } = useParams();

  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailValidate, setEmailValidate] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [state, setState] = useState("idle");

  function validateEmail(e) {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }

  const createAccount = () => {
    postCreateAccount({
      name: name,
      last_name: lastName,
      email: email,
      password: password,
      ...(id_project && { project_id: id_project }),
    })
      .then((res) => {
        redirectTo("/sing-up/email");
      })
      .catch((error) => {
        setState("idle");
      });
  };

  const onClickHandler = () => {
    setState("loading");

    setTimeout(() => {
      createAccount();
    }, 2000);
  };

  const properties = {
    redirectTo,
    name,
    setName,
    lastName,
    setLastName,
    setEmail,
    setPassword,
    createAccount,
    passwordConfirm,
    setPasswordConfirm,
    password,
    validateEmail,
    email,
    emailValidate,
    setEmailValidate,
    state,
    onClickHandler,
  };

  return <View {...properties} />;
}

export default Index;
