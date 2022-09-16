import React, { useContext, useState } from "react";
import DataContext from "../../../../data-context";
import { useNavigate } from "react-router-dom";
import { putPredeterminateBrand, getBrands } from "../../../../services";

import View from "./view";

function Index() {
  const { brands, setBrands, userData } = useContext(DataContext);
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState(false);

  const redirectToBrandForm = (id) =>
    navigate(id ? `/brands/brands-form/${id}` : `/brands/brands-form`);

  const redirectTo = (route) => navigate(route);

  const predeterminateBrand = (id) => {
    putPredeterminateBrand({
      brand_id: id,
      user_id: userData.id,
    })
      .then((res) => {
        setModalMessage(!modalMessage);
        getBrands(userData.id).then(({ data }) => {
          setBrands(data.brands);
        });
        redirectTo("/brands");
      })
      .catch((error) => {});
  };

  const properties = {
    redirectToBrandForm,
    brands,
    predeterminateBrand,
    modalMessage,
    setModalMessage,
  };

  return <View {...properties} />;
}

export default Index;
