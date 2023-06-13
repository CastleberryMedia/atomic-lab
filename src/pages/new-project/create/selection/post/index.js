import React, { useState, useContext } from "react";
import View from "./view";
import CreateFormContext from "../../../../../create-form-context";

function Index({
  id,
  post,
  setPost,
  selectedImg,
  onSelectFile,
  onSelectText,
  setPostCount,
  postCount,
}) {
  const [formData, setFormData] = useContext(CreateFormContext);

  const [objetive, setObjetive] = useState(
    post.filter((item) => item.id === id)[0]?.objetive ||
      formData?.post?.filter((item) => item.id === id)[0]?.objetive
  );
  const [textPreview, setTextPreview] = useState(
    post.filter((item) => item.id === id)[0]?.text ||
      formData?.post?.filter((item) => item.id === id)[0]?.text
  );

  const properties = {
    id,
    post,
    setPost,
    onSelectFile,
    onSelectText,
    setPostCount,
    postCount,
    formData,
    textPreview,
    objetive,
    setObjetive,
    setTextPreview,
  };

  return <View {...properties} />;
}

export default Index;
