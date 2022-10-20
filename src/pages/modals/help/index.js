import React, { useState, useContext } from "react";
import DataContext from "../../../data-context";
import { toast } from "react-toast";
import { postHelp } from "../../../services";
import View from "./view";

function Index({ close }) {
  const { setAllProjects, userData } = useContext(DataContext);
  const [textSend, setTextSend] = useState(null);

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      saveText();
    }, 2000);
  };

  const saveText = () => {
    postHelp({ user_id: userData.id, text: textSend })
      .then((res) => {
        toast.success("Comentarios enviados!");
        setState("idle");
        close();
      })
      .catch((error) => {
        toast("Error al enviar los comentarios, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
        setState("idle");
      });
  };

  const properties = { close, textSend, setTextSend, onClickHandler, state };

  return <View {...properties} />;
}

export default Index;
