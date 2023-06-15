import React, { useEffect, useContext, useState } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setStep, step, serviceData }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useContext(CreateFormContext);

  const [references, setReferences] = useState(
    formData?.references ?? [{ id: 0 }]
  );
  const [referencesCount, setReferencesCount] = useState(1);

  useEffect(() => {
    setFormData({ ...formData, references: references });
  }, [references]);

  const redirectToService = () =>
    navigate(`/service/${serviceData}`, {
      state: { service: serviceData },
    });
  useEffect(() => {
    setStep(1);

    !formData?.project_type && navigate("/new-project");
  }, []);

  const properties = {
    redirectToService,
    setStep,
    step,
    formData,
    setFormData,
    references,
    setReferences,
    referencesCount,
    setReferencesCount,
  };

  return <View {...properties} />;
}

export default Index;
