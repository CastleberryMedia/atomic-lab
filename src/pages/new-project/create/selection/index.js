import React, { useState, useEffect, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setStep, step }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useContext(CreateFormContext);

  const [post, setPost] = useState(
    formData?.post ? formData?.post : [{ id: 1, objetive: "", text: "" }]
  );
  const [postCount, setPostCount] = useState(
    formData?.post ? formData?.post[formData.post.length - 1].id : 1
  );

  const [selectedImg, setSelectedImg] = useState();
  const [selectedImgArray, setSelectedImgArray] = useState(
    formData?.img_array ? formData.img_array : []
  );

  const [idSelect, setIdSelect] = useState("");

  const getBase64Img = (file) => {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const fileData = event.target.result;
          resolve(fileData);
        };
        reader.onerror = function (event) {
          reject(event.target.error);
        };
        reader.readAsDataURL(file);
      } else {
        reject(new Error("No se ha seleccionado ningún archivo"));
      }
    });
  };

  console.log("selectedImg", selectedImg);

  useEffect(() => {
    if (!selectedImg) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    setSelectedImgArray(
      selectedImgArray.filter((item) => item.id !== idSelect)
    );

    const processSelectedImg = async () => {
      try {
        const imgBase64 = await getBase64Img(selectedImg);

        setSelectedImgArray((selectedImgArray) => [
          ...selectedImgArray,
          {
            id: idSelect,
            object: objectUrl,
            name: selectedImg.name,
            formData: selectedImg,
            base64img: imgBase64,
          },
        ]);
      } catch (error) {
        console.error("Error al obtener la imagen en base64:", error);
      }
    };

    processSelectedImg();

    setFormData({
      ...formData,
      post: post,
    });

    // ...
  }, [selectedImg, idSelect]);

  useEffect(() => {
    setFormData({
      ...formData,
      post: post,
    });
  }, [post]);

  useEffect(() => {
    selectedImgArray.length >= 1 &&
      setFormData({ ...formData, img_array: selectedImgArray });
  }, [selectedImgArray]);

  const onSelectFile = (e, id) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setIdSelect(id);
    setSelectedImg(e.target.files[0]);
  };

  const [selectedText, setSelectedText] = useState();
  const [selectedTextArray, setSelectedTextArray] = useState(
    formData.text_array ? formData.text_array : []
  );

  useEffect(() => {
    if (!selectedText) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedText);

    setSelectedTextArray(
      selectedTextArray.filter((item) => item.id !== idSelect)
    );

    setSelectedTextArray((selectedTextArray) => [
      ...selectedTextArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedText.name,
        formData: selectedText,
      },
    ]);
  }, [selectedText, idSelect]);

  useEffect(() => {
    selectedTextArray.length >= 1 &&
      setFormData({ ...formData, text_array: selectedTextArray });
  }, [selectedTextArray]);

  const onSelectText = (e, id) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedText(undefined);
      return;
    }

    setIdSelect(id);
    setSelectedText(e.target.files[0]);
  };

  useEffect(() => {
    !formData?.project_type && navigate("/new-project");
  }, []);

  const properties = {
    selectedImg,
    onSelectFile,
    setStep,
    step,
    onSelectText,
    selectedImgArray,
    setFormData,
    formData,
    post,
    setPost,
    setPostCount,
    postCount,
  };

  return <View {...properties} />;
}

export default Index;
