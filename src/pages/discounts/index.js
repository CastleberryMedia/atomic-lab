import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../data-context";
import View from "./view";

function Index() {
  const [code, setCode] = useState(null);
  const [percent, setPercent] = useState(null);

  useEffect(() => {
    generateCode();
  }, []);

  function generateCode() {
    let r = (Math.random() + 1).toString(36).substring(2);

    setCode(r.toUpperCase());
  }

  const props = { generateCode, code, percent };

  return <View {...props} />;
}

export default Index;
