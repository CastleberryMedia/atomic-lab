import React, { useEffect, useContext } from "react";
import { postUpdateCredits } from "../../services";
import PageTitle from "../page-title";
import { useSearchParams } from "react-router-dom";
import DataContext from "../../data-context";
import "./styles.scss";

function Index({ type }) {
  const [queryParameters] = useSearchParams();

  const { coins, setCoins } = useContext(DataContext);

  const coinsNew = parseInt(
    queryParameters.get("external_reference").split("-")[1]
  );

  useEffect(() => {
    postUpdateCredits({ value: coinsNew })
      .then((res) => setCoins(res.data.response))
      .catch((error) => {});
  }, [coinsNew]);

  const types = {
    success: {
      title: "realizado",
      sub: `Gracias por recargar tu cuenta con ${coinsNew} monedas`,
      sub1: `Nuevo saldo ${coins} monedas`,
    },
    failure: {
      title: "erroneo",
      sub: `Por favor revise su pago`,
    },
    pending: {
      title: "pendiente",
      sub: `Por revise su saldo mas tarde`,
    },
  };

  return (
    <div className="page payment">
      <PageTitle user={true} title="Transacción realizada"></PageTitle>

      <div className="payment-content">
        <div>
          <h2>! Pago {types[type].title} !</h2>
        </div>
        <div>
          <h3>{types[type].sub}</h3>
          <h3>{types[type]?.sub1}</h3>
        </div>
      </div>
    </div>
  );
}

export default Index;
