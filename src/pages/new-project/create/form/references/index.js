import React, { useState, useEffect } from "react";
import View from "./view";

function Index({ data, references, setReferences }) {
  const [referenceFile, setReferenceFile] = useState("");

  const [referenceDescription, setReferenceDescription] = useState("");

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
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
            file: referenceFile,
            referenceFile64: fileData,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

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
