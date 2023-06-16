import React, { useContext } from "react";
import CreateFormContext from "../../../../../create-form-context";
import View from "./view";
import { convertToBase64 } from "../../../../utils";

function Index({ data, references, setReferences }) {
  const [formData] = useContext(CreateFormContext);

  const handleUpdateReferences = (node, data, id) => {
    let oldArray = references.find((p) => p.id === id);
    let newArray = references.filter((p) => p.id !== id);

    if (node === "file") {
      oldArray.name_file = data.name;
      oldArray.file = data;
      oldArray.object = URL.createObjectURL(data);
      convertToBase64(data)
        .then((base64String) => {
          oldArray.base64Include = base64String;
        })
        .catch((error) => {
          console.error("Error al convertir el archivo a Base64:", error);
        });
    } else {
      oldArray[node] = data;
    }

    newArray.push(oldArray);

    setReferences(newArray);
  };

  const properties = {
    data,
    formData,
    handleUpdateReferences,
  };

  return <View {...properties} />;
}

export default Index;
