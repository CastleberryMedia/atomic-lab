import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../../data-context";
import {
  postAssignDesignerProject,
  getAssignDesignerProject,
  deleteAssignDesignerProject,
  updateFlow,
} from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const { userData, team } = useContext(DataContext);

  const [listDesigner, setListDesigner] = useState([]);
  const [teamFilter, setTeamFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  /* useEffect(() => {
    setLoading(true);
    getAssignDesignerProject(data.project_id)
      .then((res) => {
        res.data.data.length && setListDesigner(res.data.data);
      })
      .catch((error) => {});
    setLoading(false);
    setTeamFilter(team?.filter((user) => user.rol_id === 3));
  }, [data]); */

  const deleteDesigner = (designer_id, union_id) => {
    setListDesigner(
      listDesigner.filter((user) => user.id !== parseInt(designer_id))
    );
    deleteAssignDesignerProject(union_id)
      .then((res) => {})
      .catch((error) => {});
  };

  const assignDesigner = (designer_id) => {
    setListDesigner((oldArray) => [
      ...oldArray,
      teamFilter.filter((user) => user.id === parseInt(designer_id))[0],
    ]);

    const dataBody = {
      project_id: data.project_id,
      designer_id: designer_id,
    };

    postAssignDesignerProject(dataBody).then((res) => {
      updateFlow({ project_id: data.project_id, id_flow: 2 });
    });
  };

  const properties = {
    close,
    team,
    assignDesigner,
    listDesigner,
    teamFilter,
    deleteDesigner,
    userData,
    loading,
  };
  return <View {...properties} />;
}

export default Index;
