import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../data-context";
import View from "./view";

function Index() {
  const { search, allProjects, team, brands } = useContext(DataContext);

  const [dataActive, setDataActive] = useState([]);

  useEffect(() => {
    allProjects?.forEach((p) => {
      const info = {
        ...p,
        ...p?.values[0],
        nameMin: p?.values[0].name_project?.toLowerCase(),
        flow_parse: JSON.parse(p?.flow),
        flow_active: JSON.parse(p?.flow).filter((f) => f.status === "active")[0]
          ?.id,
      };
      setDataActive((dataActive) => [...dataActive, info]);
    });
  }, [allProjects]);

  console.log("brands", brands);

  const properties = {
    dataActive: dataActive?.filter((p) => p.nameMin.includes(search)),
    teamFilter: search
      ? team?.filter((t) => t.name.toLowerCase().includes(search))
      : [],
    brandsFilter: search
      ? brands?.filter((b) => b.name.toLowerCase().includes(search))
      : [],
    search,
  };

  return <View {...properties} />;
}

export default Index;
