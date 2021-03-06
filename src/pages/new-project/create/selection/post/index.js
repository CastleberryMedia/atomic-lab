import React from "react";
import View from "./view";

function Index({ id, post, setPost, selectedImg, onSelectFile, onSelectText }) {
  const properties = {
    id,
    post,
    setPost,
    selectedImg,
    onSelectFile,
    onSelectText,
  };

  return <View {...properties} />;
}

export default Index;
