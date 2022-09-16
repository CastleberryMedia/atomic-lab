import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { getAssignDesignerProject } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { allProjects, userData } = useContext(DataContext);
  const [designers, setDesigners] = useState([]);

  const filterProject = allProjects?.filter(
    (project) => project.id === parseInt(id)
  )[0];
  const projectValues = filterProject?.values[0];
  const projectExtraData = JSON.parse(filterProject?.extra_data);

  const redirectTo = (route) => navigate(route);

  useEffect(() => {
    getAssignDesignerProject(id)
      .then((res) => {
        res.data.data.length && setDesigners(res.data.data);
      })
      .catch((error) => {});
  }, [id]);

  const properties = {
    filterProject,
    projectValues,
    userData,
    redirectTo,
    navigate,
    designers,
    projectExtraData,
  };

  return <View {...properties} />;
}

export default Index;
