import React, { useContext, useState } from "react";
import DataContext from "../../data-context";
import View from "./view";

function Index({ page, user, title, price, modalPriceTotal, func, help }) {
  const [modalHelp, setModalHelp] = useState(false);

  const { userData } = useContext(DataContext);

  const properties = {
    page,
    user,
    title,
    price,
    modalPriceTotal,
    func,
    modalHelp,
    setModalHelp,
    userData,
    help,
  };

  return <View {...properties} />;
}

export default Index;
