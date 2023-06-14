import React, { useState, useContext, useEffect } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../../data-context";
import {
  postCreateProject,
  getDataUser,
  getAllProjects,
  postUpdateCredits,
} from "../../../../services";
import { SUMMARY_OPTIONS, SERVICES_DATA } from "../../../constats";

import View from "./view";

function Index({ setStep, step }) {
  const [formData, setFormData] = useContext(CreateFormContext);
  const navigate = useNavigate();

  const { coins } = useContext(DataContext);

  useEffect(() => {
    setFormData({
      ...formData,
      designer_freedom: "high",
      tiempo_entrega: "Estándar",
      formato_entrega: "Recomendado",
      revisiones: "Hasta 3",
      tamaño: "Recomendado",
      archivos_editables: "No",
    });
  }, []);

  const [modalMessageStart, setModalMessageStart] = useState(false);
  const [modalMessageStartStatus, setModalMessageStartStatus] = useState(false);
  const [modalMessageStartData, setModalMessageStartData] = useState({});
  const [modalBuyCredits, setModalBuyCredit] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [timePrice, setTimePrice] = useState(
    formData?.tiempo_entrega &&
      SUMMARY_OPTIONS["tiempo"].options.find(
        (t) => t.text === formData?.tiempo_entrega
      )
  );
  const [formatPrice, setFormatPrice] = useState(
    formData?.formato_entrega &&
      SUMMARY_OPTIONS["formato"].options.find(
        (t) => t.text === formData?.formato_entrega
      )
  );
  const [reviewPrice, setReviewPrice] = useState(
    formData?.revisiones &&
      SUMMARY_OPTIONS["revisiones"].options.find(
        (t) => t.text === formData?.revisiones
      )
  );
  const [sizePrice, setSizePrice] = useState(
    formData?.tamaño &&
      SUMMARY_OPTIONS["tamaño"].options.find((t) => t.text === formData?.tamaño)
  );
  const [editPrice, setEditPrice] = useState(
    formData?.archivos_editables &&
      SUMMARY_OPTIONS["editables"].options.find(
        (t) => t.text === formData?.archivos_editables
      )
  );

  const getTotalProject = () => {
    const base_price = SERVICES_DATA.find(
      (s) => s?.title === formData?.project_type
    )?.base_price;

    return (
      parseInt(base_price) +
      parseInt(timePrice?.price) +
      parseInt(formatPrice?.price) +
      parseInt(reviewPrice?.price) +
      parseInt(sizePrice?.price) +
      parseInt(editPrice?.price)
    );
  };

  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  const handleGetActiveProjects = () => {
    setFormData({});

    navigate("/projects-active", {
      state: { new_project: true },
    });
  };

  const handleStartProject = () => {
    JSON.safeStringify = (obj, indent = 2) => {
      let cache = [];
      const retVal = JSON.stringify(
        obj,
        (key, value) =>
          typeof value === "object" && value !== null
            ? cache.includes(value)
              ? undefined // Duplicate reference found, discard key
              : cache.push(value) && value // Store value in our collection
            : value,
        indent
      );
      cache = null;
      return retVal;
    };

    const formData = new FormData();

    formData.img_array &&
      formData.img_array.map((image) =>
        formData.append(image.name, image.formData)
      );

    formData.references &&
      formData.references.map(
        (reference) =>
          reference.name_file &&
          formData.append(reference.name_file, reference.file)
      );
    formData.text_array &&
      formData.text_array.map((text) =>
        formData.append(text.name, text.formData)
      );

    /*      {
    "user_id": 14,
    "costo_base": 109,
    "tiempo_entrega": "Estándar",
    "formato_entrega": "Recomendado",
    "revisiones": "Hasta 3",
    "tamaño": "Recomendado",
    "archivos_editables": "No"
} */

    console.log("formData", formData);

    const dataFin = {
      ...formData,
      user_id: user_id,
      costo_base: getTotalProject(),
      tiempo_entrega: formData.tiempo_entrega,
      formato_entrega: formData.formato_entrega,
      revisiones: formData.revisiones,
      tamaño: formData.tamaño,
      archivos_editables: formData.archivos_editables,
      ...(formData.f_custom && { f_custom: formData.f_custom }),
      ...(formData.t_custom && { t_custom: formData.t_custom }),
    };
    formData.append("jsondataRequest", JSON.safeStringify(dataFin));

    console.log("dataFin", dataFin);

    /* postCreateProject(formData)
      .then((res) => {
        setCoins(coins - getTotalProject());
        postUpdateCredits({
          value: coins - getTotalProject(),
        }).then((res) => {
          getDataUser(user_id).then(({ data }) => {
            setUserData(data.user[0]);
          });
        });

        getAllProjects(user_id).then(({ data }) => {
          setAllProjects(data.response);
        });

        setModalMessageStartStatus(true);
        setModalMessageStartData({
          type: "ok",
          message: "¡FELICITACIONES!",
          subMessage: "¡Tu proyecto se ha iniciado exitosamente!",
        });
      })
      .catch((error) => {
        setModalMessageStartStatus(true);
        setModalMessageStartData({
          type: "error",
          message: "¡ERROR!",
          subMessage: "Hubo un error :(, intente de nuevo",
        });
      }); */
  };

  useEffect(() => {
    !formData?.project_type && navigate("/new-project");
  }, []);

  const properties = {
    modalMessageStart,
    setModalMessageStart,
    modalMessageStartStatus,
    setModalMessageStartStatus,
    setStep,
    step,
    handleStartProject,
    formData,
    setFormData,
    modalMessageStartData,
    handleGetActiveProjects,
    modalBuyCredits,
    setModalBuyCredit,
    dataModals,
    setDataModals,
    timePrice,
    setTimePrice,
    formatPrice,
    setFormatPrice,
    reviewPrice,
    setReviewPrice,
    sizePrice,
    setSizePrice,
    editPrice,
    setEditPrice,
    getTotalProject,
    coins,
  };

  return <View {...properties} />;
}

export default Index;
