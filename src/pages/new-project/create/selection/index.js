import React, { useState, useEffect, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import View from "./view";

function Index({ setStep, step }) {
  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);

  const [selectedImg, setSelectedImg] = useState();
  const [selectedImgArray, setSelectedImgArray] = useState(
    data.img_array ? data.img_array : []
  );

  const [idSelect, setIdSelect] = useState("");

  useEffect(() => {
    if (!selectedImg) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    setSelectedImgArray(
      selectedImgArray.filter((item) => item.id !== idSelect)
    );

    setSelectedImgArray((selectedImgArray) => [
      ...selectedImgArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedImg.name,
        formData: selectedImg,
      },
    ]);
  }, [selectedImg, idSelect]);

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
    data.text_array ? data.text_array : []
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

  const properties = {
    selectedImg,
    onSelectFile,
    setStep,
    step,
    onSelectText,
  };

  return <View {...properties} />;
}

export default Index;
