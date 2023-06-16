import React, { useEffect, useContext } from "react";
import CreateFormContext from "../../create-form-context";
import View from "./view";

function Index() {
  const [formData, setFormData] = useContext(CreateFormContext);

  useEffect(() => {
    if (!Object.keys(formData).length) {
      setFormData({
        ...formData,
        designer_freedom: "mucha",
        tiempo_entrega: "Estándar",
        formato_entrega: "Recomendado",
        revisiones: "Hasta 3",
        tamaño: "Recomendado",
        archivos_editables: "No",
      });
    }
  }, [formData]);

  const properties = {};

  return <View {...properties} />;
}

export default Index;
