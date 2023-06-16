import React, { useContext } from "react";
import View from "./view";
import CreateFormContext from "../../../../../create-form-context";

function Index({
  id,
  post,
  setPost,
  setPostCount,
  postCount,
  handleUpdatePost,
}) {
  const [formData] = useContext(CreateFormContext);

  const properties = {
    id,
    post,
    setPost,
    setPostCount,
    postCount,
    formData,
    handleUpdatePost,
  };

  return <View {...properties} />;
}

export default Index;
