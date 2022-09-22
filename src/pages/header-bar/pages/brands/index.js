import React, { useContext, useState } from "react";
import DataContext from "../../../../data-context";
import { useNavigate } from "react-router-dom";
import { putPredeterminateBrand, getBrands } from "../../../../services";

import View from "./view";

function Index() {
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
    alert("delete" + id);
    setModalMessage({ visible: true, message: "Se elimino la marca" });
  };

  const properties = {
    redirectToBrandForm,
    brands,
    predeterminateBrand,
    modalMessage,
    setModalMessage,
    delete_brand,
  };

  return <View {...properties} />;
}

export default Index;
