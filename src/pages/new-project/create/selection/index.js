import React, { useState, useEffect, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import { convertToBase64 } from "../../../utils";
import View from "./view";

function Index({ setStep, step }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useContext(CreateFormContext);

  const [post, setPost] = useState(
    formData?.post ? formData?.post : [{ id: 1 }]
  );
  const [postCount, setPostCount] = useState(
    formData?.post ? formData?.post[formData.post.length - 1].id : 1
  );

  const handleUpdatePost = (node, data, id) => {
    let oldArray = post.find((p) => p.id === id);
    let newArray = post.filter((p) => p.id !== id);

    if (node === "file") {
      oldArray.nameFile = data.name;
      oldArray.file = data;
      oldArray.object = URL.createObjectURL(data);
      convertToBase64(data)
        .then((base64String) => {
          oldArray.base64 = base64String;
        })
        .catch((error) => {
          console.error("Error al convertir el archivo a Base64:", error);
        });
    } else if (node === "fileInclude") {
      oldArray.nameIncludeFile = data.name;
      oldArray.fileInclude = data;
      convertToBase64(data)
        .then((base64String) => {
          oldArray.fileIncludebase64 = base64String;
        })
        .catch((error) => {
          console.error("Error al convertir el archivo a Base64:", error);
        });
    } else {
      oldArray[node] = data;
    }

    newArray.push(oldArray);

    setPost(newArray);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      post: post,
    });
  }, [post]);

  useEffect(() => {
    !formData?.project_type && navigate("/new-project");
  }, []);

  const properties = {
    setStep,
    step,
    setFormData,
    formData,
    post,
    setPost,
    setPostCount,
    postCount,
    handleUpdatePost,
  };

  return <View {...properties} />;
}

export default Index;
