import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { getAssignDesignerProject } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { allProjects } = useContext(DataContext);
  const [projectData, setProjectData] = useState([]);
  const [designers, setDesigners] = useState([]);

  const filterProject = allProjects?.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const redirectTo = (route) => navigate(route);

  useEffect(() => {
    setProjectData(
      filterProject && {
        ...filterProject,
        flow: JSON.parse(filterProject?.flow),
        values: filterProject?.values,
      }
    );
  }, [filterProject]);

  var rating = {};

  function rate(value) {
    rating.starValue = Number(value);
  }

  function reset() {
    var elements = document.querySelectorAll(".stars input[name=stars-1]");
    elements.forEach(function (element) {
      element.checked = false;
    });
    rating = {};
  }

  useEffect(() => {
    getAssignDesignerProject(id)
      .then((res) => {
        res.data.data.length && setDesigners(res.data.data);
      })
      .catch((error) => {});
  }, [id]);

  const properties = { projectData, rate, redirectTo, designers };

  return <View {...properties} />;
}

export default Index;
