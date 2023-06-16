import React, { useState, useContext, useEffect } from "react";
import CreateFormContext from "../../create-form-context";
import DataContext from "../../data-context";
import { useLocation, useNavigate } from "react-router-dom";
import { SERVICES_DATA } from "../constats";

import View from "./view";

function Index() {
  let location = useLocation();
  const navigate = useNavigate();

  const [serviceData] = useState(
    SERVICES_DATA.filter(
      (service) => service.title_id === location?.state?.service
    )[0]
  );

  const [typeManual, setTypeManual] = useState("");
  const [modalPriceTotal, setModalPriceTotal] = useState(0);
  const [modalMessage, setModalMessage] = useState(true);
  const [socialNetwork, setSocialNetwork] = useState("");

  const { brands } = useContext(DataContext);

  const [formData, setFormData] = useContext(CreateFormContext);

  useEffect(() => {
    setFormData({
      ...formData,
      project_price: serviceData?.price?.basic[0].price,
      project_type: serviceData.title,
      step: 1,
    });

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

    let sum = 0;
    serviceData?.price?.basic.map((price) => (sum = price.price + sum));
    setModalPriceTotal(sum);
  }, []);

  const redirectToHome = () => navigate(`/new-project`);
  const redirectToForm = () =>
    navigate(`/service/create`, {
      state: { service: location?.state?.service },
    });

  /*  const [dataLocal] = useLocalStorage(); */

  const properties = {
    serviceData,
    typeManual,
    setTypeManual,
    redirectToHome,
    modalPriceTotal,
    redirectToForm,
    modalMessage,
    setModalMessage,
    socialNetwork,
    setSocialNetwork,
    brands,
    formData,
    setFormData,
    navigate,
    /*     dataLocal, */
  };

  return <View {...properties} />;
}

export default Index;
