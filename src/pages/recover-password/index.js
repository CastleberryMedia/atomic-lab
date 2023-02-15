import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recoveryPassword } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);

  const sendMailRecovery = () => {
    recoveryPassword(email).then(({ data }) => {
      redirectTo("/recover-password/email");
    });
  };

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = {
    redirectTo,
    setEmail,
    sendMailRecovery,
  };

  return <View {...properties} />;
}

export default Index;
