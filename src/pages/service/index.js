import React, { useState, useContext, useEffect } from "react";
import CreateFormContext from "../../create-form-context";
import DataContext from "../../data-context";
import { useLocation, useNavigate } from "react-router-dom";
import { SUMMARY_OPTIONS, SERVICES_DATA } from "../constats";
import { convertToBase64, CLEAR_DB } from "../utils";
import {
  postCreateProject,
  getDataUser,
  getAllProjects,
  postUpdateCredits,
} from "../../services";

import View from "./view";

function Index() {
  let location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useContext(CreateFormContext);

  const [references, setReferences] = useState(
    formData?.references ?? [{ id: 0 }]
  );
  const [referencesCount, setReferencesCount] = useState(1);

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

    console.log(newArray);
    setPost(newArray);
  };

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

  //code final

  const { setUserData, setAllProjects, coins, setCoins } =
    useContext(DataContext);

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

  const fPrice = parseInt(formatPrice?.price) || 0;
  const tPrice = parseInt(timePrice?.price) || 0;
  const rPrice = parseInt(reviewPrice?.price) || 0;
  const sPrice = parseInt(sizePrice?.price) || 0;
  const ePrice = parseInt(editPrice?.price) || 0;
  const sub_total = tPrice + fPrice + rPrice + sPrice + ePrice;

  const getTotalProject = () => {
    const base_price = SERVICES_DATA.find(
      (s) => s?.title === formData?.project_type
    )?.base_price;

    return ( base_price + sub_total );
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

    const formDataNEW = new FormData();

    if (formData.post) {
      formData.post.forEach((item) => {
        formDataNEW.append(item.nameFile, item.file);
        formDataNEW.append(item.nameIncludeFile, item.fileInclude);
      });
    }

    if (formData.references) {
      formData.references.forEach((item) => {
        item.name_file && formDataNEW.append(item.name_file, item.file);
      });
    }

    const dataFin = {
      ...formData,
      user_id: user_id,
      costo_base: getTotalProject(),
    };
    formDataNEW.append("jsondataRequest", JSON.safeStringify(dataFin));

    console.log("dataFin", dataFin);
    console.log("formDataFIN", [...formDataNEW]);

    for (let [key, value] of formDataNEW.entries()) {
      console.log(`${key}: ${value}`);
    }

    postCreateProject(formDataNEW)
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
          message: "CONGRATULATIONS!",
          subMessage: "Your project has been successfully launched!",
        });

        //vaciar tabla indexedDb
        const clean_table = CLEAR_DB();
        // localStorage.clear("formProject");
      })
      .catch((error) => {
        setModalMessageStartStatus(true);
        setModalMessageStartData({
          type: "error",
          message: "¡ERROR!",
          subMessage: "There was an error :(, try again",
        });
      });
  };

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

  useEffect(() => {
    setFormData({ ...formData, references: references });
  }, [references]);

  useEffect(() => {
    setFormData({ ...formData, post: post });
  }, [post]);

  useEffect(() => {
    setFormData({
      ...formData,
      project_price: serviceData?.price?.basic[0].price,
      project_type: serviceData.title,
    });
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
    references,
    setReferences,
    referencesCount,
    setReferencesCount,
    post,
    setPost,
    setPostCount,
    postCount,
    handleUpdatePost,
    modalMessageStart,
    setModalMessageStart,
    modalMessageStartStatus,
    setModalMessageStartStatus,
    handleStartProject,
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
    /*     dataLocal, */
  };

  return <View {...properties} />;
}

export default Index;
