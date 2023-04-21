import React, { useEffect, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setStep, step, serviceData }) {
  const navigate = useNavigate();

  const [formData] = useContext(CreateFormContext);

  const redirectToService = () =>
    navigate(`/service/${serviceData}`, {
      state: { service: serviceData },
    });
  useEffect(() => {
    !formData?.project_type && navigate("/new-project");
  }, []);

  const properties = { redirectToService, setStep, step };

  return <View {...properties} />;
}

export default Index;
