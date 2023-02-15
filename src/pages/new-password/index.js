import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newPassword } from "../../services";
import View from "./view";
import { toast } from "react-toast";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);

  const exeNewPassword = () => {
    newPassword({ user_id: id, data: { password: password1 } })
      .then(({ data }) => {
        toast.success("Contraseña actualizada!");
        redirectTo("/");
      })
      .catch((error) => {
        toast("Error al cambiar la contraseña, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
      });
  };

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = {
    redirectTo,
    password1,
    setPassword1,
    password2,
    setPassword2,
    exeNewPassword,
  };

  return <View {...properties} />;
}

export default Index;
