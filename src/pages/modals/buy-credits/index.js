import React, { useState, useEffect, useContext } from "react";
import {
  postBilling,
  getPercentageDiscount,
  postUpdateCredits,
  getPercentageAvailable,
} from "../../../services";
import DataContext from "../../../data-context";
import View from "./view";

function Index({ close, data }) {
  const [coinsQ, setCoinsQ] = useState(0);
  const [total, setTotal] = useState(0);
  const [idWallet, setIdWallet] = useState();
  const { userData, setCoins } = useContext(DataContext);
  const [loadingDiscount, setLoadingDiscount] = useState(false);
  const [discountValidate, setDiscountValidate] = useState(null);
  const [discountValidateAvailable, setDiscountValidateAvailable] =
    useState(null);
  const [codeInput, setCodeInput] = useState(null);
  const [discountTotal, setDiscountTotal] = useState(null);

  useEffect(() => {
    proccessTotal();
  }, [coinsQ, discountTotal]);

  useEffect(() => {
    codeInput && getPercentajeCode(codeInput);
  }, [codeInput]);

  function getPercentajeCode(code) {
    setLoadingDiscount(true);

    let percentage = 0;

    getPercentageAvailable({
      user_id: userData?.id,
      coupon_code: code,
    })
      .then((res) => {
        percentage = getPercentageDiscount(code)
          .then((res) => {
            setLoadingDiscount(false);
            setDiscountValidate(true);
            setDiscountTotal(parseInt(res.data.percentage));
            setDiscountValidateAvailable(null);
          })
          .catch((error) => {
            setLoadingDiscount(false);
            setDiscountValidate(false);
          });
      })
      .catch((error) => {
        setLoadingDiscount(false);
        setDiscountValidateAvailable(false);
      });

    return percentage;
  }

  function proccessTotal() {
    discountTotal === null
      ? setTotal(coinsQ * 100)
      : setTotal(coinsQ * 100 - (coinsQ * 100 * discountTotal) / 100);
  }

  useEffect(() => {
    setIdWallet();
  }, [total]);

  const [loadingExcBuy, setLoadingExcBuy] = useState();

  async function excBuy() {
    const data = {
      description: "Creditos Atomic Lab",
      unit_price: total,
      quantity: 1,
      first_name: userData?.name,
      last_name: userData?.last_name,
      email: userData?.email,
      dni: userData?.cedula || 0,
      external_reference: `coins-${coinsQ}`,
    };

    setLoadingExcBuy(true);
    await postBilling(data)
      .then((res) => {
        setIdWallet(res.data.id);
      })
      .catch((error) => {});

    setLoadingExcBuy(false);
  }

  async function addCredits() {
    const user_id = JSON.parse(
      sessionStorage?.getItem("atomiclab-user")
    )?.user_id;
    await postUpdateCredits({
      value: coinsQ,
      coupon_code: codeInput,
      user_id: user_id,
    })
      .then((res) => {
        setCoins(res.data.response);
        close(false);
      })
      .catch((error) => {});
  }

  const properties = {
    close,
    setCoinsQ,
    total,
    coinsQ,
    idWallet,
    discountValidate,
    loadingDiscount,
    setCodeInput,
    discountTotal,
    excBuy,
    loadingExcBuy,
    addCredits,
    discountValidateAvailable,
  };
  return <View {...properties} />;
}

export default Index;
