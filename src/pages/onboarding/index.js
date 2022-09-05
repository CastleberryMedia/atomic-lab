import React, { useContext, useState } from "react";
import DataContext from "../../data-context";
import { useNavigate } from "react-router-dom";
import {
  updateOnboardingData,
  updateOnboardingView,
  postCreateBrand,
  updateProfileData,
} from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { userData, setOnboarding } = useContext(DataContext);

  const [nameOrganization, setNameOrganization] = useState(null);
  const [urlOrganization, setUrlOrganization] = useState(null);
  const [movil, setMovil] = useState(null);

  const updateDataOnboarding = () => {
    const dataBrand = {
      name: nameOrganization || "",
      web_page: urlOrganization || "",
      predeterminate: false,
      user_id: userData.id,
    };

    const formData = new FormData();
    formData.append("jsondataRequest", JSON.stringify(dataBrand));
    postCreateBrand(formData);

    updateProfileData({
      ...userData,
      cell_phone: movil,
      user_id: userData.id,
      password: "",
    })
      .then((res) => {})
      .catch((error) => {});

    const dataBody = {
      name_organization: nameOrganization,
      url_organizaton: urlOrganization,
      movil: movil,
    };

    updateOnboardingData({ user_id: userData.id, data: dataBody })
      .then((res) => {
        updateOnboardingView({ user_id: userData.id, value: 0 });

        setOnboarding(false);

        redirectTo("/");
      })
      .catch((error) => {});
  };

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = {
    redirectTo,
    setOnboarding,
    nameOrganization,
    setNameOrganization,
    urlOrganization,
    setUrlOrganization,
    movil,
    setMovil,
    updateDataOnboarding,
  };

  return <View {...properties} />;
}

export default Index;
