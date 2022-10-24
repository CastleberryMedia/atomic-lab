import React, { useState, useContext } from "react";
import DataContext from "../../../data-context";
import { updateFinalComments, getAllProjects } from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const [commentFinals, setCommentsFinals] = useState(data?.comments_finals);
  const { setAllProjects, userData } = useContext(DataContext);

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      saveNote();
    }, 2000);
  };

  const saveNote = () => {
    updateFinalComments({
      project_id: data.project_id,
      comments_finals: commentFinals,
    })
      .then((res) => {
        getAllProjects(userData.id).then(({ data }) => {
          setAllProjects(data.response);
        });

        setState("idle");
        close();
      })
      .catch((error) => {});
  };

  const properties = {
    data,
    close,
    commentFinals,
    setCommentsFinals,
    state,
    onClickHandler,
  };

  return <View {...properties} />;
}

export default Index;
