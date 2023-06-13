import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import CreateFormContext from "../../../create-form-context";
import View from "./view";

function Index() {
  let location = useLocation();

  const [formData, setFormData] = useContext(CreateFormContext);

  const [step, setStep] = useState(formData?.step || 1);
  const [serviceData] = useState(location?.state?.service);

  useEffect(() => {
    setFormData({ ...formData, step: step });
  }, [step]);

  const properties = { step, setStep, serviceData };

  return <View {...properties} />;
}

export default Index;
