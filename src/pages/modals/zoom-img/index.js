import React, { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";
import { postCreateAnnotation, getAnnotationsImage } from "../../../services";

import "@recogito/annotorious/dist/annotorious.min.css";

import View from "./view";

function Index({ close, data }) {
  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [anno, setAnno] = useState();

  const [allAnnotatios, setAllAnnotatios] = useState(null);
  const [countAnnotations, setCountAnnotations] = useState([]);

  useEffect(() => {
    data.type !== "normal" &&
      getAnnotationsImage(data.id).then(({ data }) => {
        setAllAnnotatios(
          data &&
            data.annotations &&
            data.annotations.length >= 1 &&
            JSON.parse(data.annotations[0].annotations)
        );
      });
  }, []);

  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
      });

      annotorious.loadAnnotations(allAnnotatios);
      annotorious.setAnnotations(allAnnotatios);

      // Attach event handlers here
      annotorious.on("createAnnotation", (annotation) => {
        console.log("created-", annotation);
        setCountAnnotations((oldArray) => [...oldArray, annotation]);
      });

      annotorious.on("updateAnnotation", (annotation, previous) => {
        console.log("updated-", annotation, previous);
      });

      annotorious.on("deleteAnnotation", (annotation) => {
        console.log("deleted-", annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, [allAnnotatios, data]);

  const [state, setState] = useState("idle");

  const save = () => {
    const annotations = anno.getAnnotations();

    const dataBody = {
      annotations: JSON.stringify([...annotations]),
      project_id: parseInt(data.project_id),
      version_id: data.version_id,
      image_id: data.id,
    };

    postCreateAnnotation(dataBody)
      .then((res) => {
        setState("idle");
      })
      .catch((error) => {
        setState("idle");
      });
  };

  const closeModal = () => {
    setAllAnnotatios(null);
    close(false);
  };

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      save();
    }, 2000);
  };

  const properties = {
    closeModal,
    data,
    imgEl,
    state,
    onClickHandler,
    countAnnotations,
  };

  return <View {...properties} />;
}

export default Index;
