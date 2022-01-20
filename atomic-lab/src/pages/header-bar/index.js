import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const redirectTo = (item) => {
    navigate(item);
    setMenuActive(false);
  };

  const properties = { redirectTo, menuActive, setMenuActive };

  return <View {...properties} />;
}

export default Index;
