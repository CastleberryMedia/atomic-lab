import React, { useEffect, useState } from "react";
import View from "./view";
import {
  postCreateDiscount,
  getDiscountsAll,
  deleteDiscount,
} from "../../services";
import { toast } from "react-toast";

function Index() {
  const [code, setCode] = useState(null);
  const [percent, setPercent] = useState(null);
  const [discountsList, setDiscountsList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateCode();
    handleDiscountsAll();
  }, []);

  const handleDeleteDiscount = (code) => {
    deleteDiscount({ code: code })
      .then((res) => {
        toast.success("Descuento eliminado!");
        handleDiscountsAll();
      })
      .catch((error) =>
        toast("Error al eliminar el descuento, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        })
      );
  };

  const handleDiscountsAll = () => {
    setLoading(true);
    getDiscountsAll()
      .then((res) => setDiscountsList(res?.data?.data))
      .catch((error) => {});
    setLoading(false);
  };

  const createDiscount = () => {
    postCreateDiscount({
      code: code,
      percentage: percent,
    })
      .then((res) => {
        setCode(null);
        setPercent("");
        generateCode();
        toast.success("Descuento agregado!");
        handleDiscountsAll();
      })
      .catch((error) =>
        toast("Error al guardar el descuento, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        })
      );
  };

  function generateCode() {
    setPercent("");
    let code = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 10; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setCode(code);
  }

  const props = {
    generateCode,
    code,
    percent,
    setPercent,
    createDiscount,
    discountsList,
    handleDeleteDiscount,
    loading,
  };

  return <View {...props} />;
}

export default Index;
