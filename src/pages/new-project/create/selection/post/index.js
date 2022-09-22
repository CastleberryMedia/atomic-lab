import React from "react";
import View from "./view";

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
  const properties = {
    id,
    post,
    setPost,
    selectedImg,
    onSelectFile,
    onSelectText,
    setPostCount,
    postCount,
  };

  return <View {...properties} />;
}

export default Index;
