import React, { useContext, useState } from "react";
import DataContext from "../../../../data-context";
import { useNavigate } from "react-router-dom";
import { putPredeterminateBrand, getBrands, deleteBrand } from "../../../../services";

import View from "./view";

function Index({ brandsFilter }) {
  const { brands, setBrands, userData } = useContext(DataContext);
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState({
    visible: false,
    message: "",
  });

  const redirectToBrandForm = (id) =>
    navigate(id ? `/brands/brands-form/${id}` : `/brands/brands-form`);

  const redirectTo = (route) => navigate(route);

  const predeterminateBrand = (id) => {
    putPredeterminateBrand({
      brand_id: id,
      user_id: userData.id,
    })
      .then((res) => {
        setModalMessage({ visible: true, message: "Se predetermino la marca" });
        getBrands(userData.id).then(({ data }) => {
          setBrands(data.brands);
        });
        redirectTo("/brands");
      })
      .catch((error) => {});
  };

  const delete_brand = (id) => {
    deleteBrand(id)
      .then((res) => {
        setModalMessage({ visible: true, message: "Se eliminó la marca" });
        getBrands(userData.id).then(({ data }) => {
          setBrands(data.brands);
        });
      })
      .catch((error) => {});
  };

  const properties = {
    redirectToBrandForm,
    brands: brandsFilter || brands,
    predeterminateBrand,
    modalMessage,
    setModalMessage,
    delete_brand,
    brandsFilter,
  };

  return <View {...properties} />;
}

export default Index;
