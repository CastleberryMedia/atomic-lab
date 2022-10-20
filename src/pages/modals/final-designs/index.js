import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../../data-context";
import {
  postFinalDesigns,
  getAllProjects,
  getFinalDesigns,
} from "../../../services";
import { toast } from "react-toast";
import View from "./view";

function Index({ close, data }) {
  const { setAllProjects, userData } = useContext(DataContext);

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      saveDesigns();
    }, 2000);
  };

  const [uploadFile, setUploadFile] = useState("");

  const [loading, setLoading] = useState(false);
  const [finalDesigns, setFinalDesigns] = useState(null);

  useEffect(() => {
    setLoading(true);
    getFinalDesigns(data.project_id)
      .then((res) => {
        setFinalDesigns(res.data.url_downloadable_files);
      })
      .catch((error) => {
        toast("Error al cargar los archivos, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
      });
    setLoading(false);
  }, []);

  const saveDesigns = () => {
    const formData = new FormData();
    formData.append(uploadFile.name, uploadFile);

    JSON.safeStringify = (obj, indent = 2) => {
      let cache = [];
      const retVal = JSON.stringify(
        obj,
        (key, value) =>
          typeof value === "object" && value !== null
            ? cache.includes(value)
              ? undefined
              : cache.push(value) && value
            : value,
        indent
      );
      cache = null;
      return retVal;
    };

    const dataFin = {
      project_id: data?.project_id,
      user_id: userData?.id,
    };

    formData.append("jsondataRequest", JSON.safeStringify(dataFin));

    postFinalDesigns(formData)
      .then((res) => {
        toast.success("Archivos guardados!");
        getAllProjects(userData.id).then(({ data }) => {
          setAllProjects(data.response);
        });

        setState("idle");
        close();
      })
      .catch((error) => {
        toast("Error al guardar los archivos, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
        setState("idle");
      });
  };

  const properties = {
    close,
    state,
    onClickHandler,
    uploadFile,
    finalDesigns,
    loading,
    setUploadFile,
    userData,
  };

  return <View {...properties} />;
}

export default Index;
