import React, { useState, useEffect } from "react";
import View from "./view";

function Index({ data, references, setReferences }) {
  const [referenceFile, setReferenceFile] = useState("");

  const [referenceDescription, setReferenceDescription] = useState("");

  useEffect(() => {
    setReferences(references.filter((ref) => ref.id !== data.id));
    setReferences((references) => [
      ...references,
      {
        id: data.id,
        text: referenceDescription || "-",
        name_file: referenceFile?.name,
        file: referenceFile,
      },
    ]);
  }, [referenceFile]);

  const properties = {
    data,
    references,
    setReferences,
    referenceFile,
    setReferenceFile,
    referenceDescription,
    setReferenceDescription,
  };

  return <View {...properties} />;
}

export default Index;
