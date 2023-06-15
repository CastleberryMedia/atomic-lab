import React, { useState, useEffect } from "react";
import View from "./view";

function Index({ data, references, setReferences }) {
  const [referenceFile, setReferenceFile] = useState("");

  const [referenceDescription, setReferenceDescription] = useState("");

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e;
    setFile(selectedFile);
  };

  function handleAddTextReference(id, newText) {
    setReferences((references) => {
      return references.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: newText,
          };
        }
        return item;
      });
    });
  }

  useEffect(() => {
    const formData = new FormData();
    formData.append("file", referenceFile);

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileData = event.target.result;
        setReferences(references.filter((ref) => ref.id !== data.id));
        setReferences((references) => [
          ...references,
          {
            id: data.id,
            text: referenceDescription || "-",
            name_file: referenceFile?.name,
            file: formData,
            referenceFile64: fileData,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  }, [file, referenceFile]);

  const properties = {
    data,
    referenceFile,
    setReferenceFile,
    referenceDescription,
    setReferenceDescription,
    handleFileChange,
    handleAddTextReference,
  };

  return <View {...properties} />;
}

export default Index;
