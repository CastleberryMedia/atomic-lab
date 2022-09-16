import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDateReview, getAllProjects } from "../../services";
import View from "./view";

function Index({ type_home, page }) {
  let location = useLocation();

  const [newProject] = useState(location?.state?.new_project);
  const [finishProject] = useState(location?.state?.finish_project);

  const typeFin = location.pathname.split("-")[1]
    ? location.pathname.split("-")[1]
    : type_home && type_home;

  const { userData, team, allProjects, setAllProjects } =
    useContext(DataContext);

  const [modalMessage, setModalMessage] = useState(newProject);
  const [modalMessageFinish, setModalMessageFinish] = useState(finishProject);
  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalDesignerProject, setModalDesignerProject] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [menuFloat, setMenuFloat] = useState("");

  const navigate = useNavigate();

  const redirectToStatusProject = (project_id) =>
    navigate(`/status-project/${project_id}`, {
      state: { project_id: project_id },
    });
  const redirectToReviews = (id) => navigate(`/reviews/${id}`);
  const redirecToActiveProyects = () => navigate(`/projects-active`);
  const redirectTo = (route) => navigate(route);

  const getLastVersion = (project) => {
    let img = "";

    if (Array.isArray(project.review_data) || project.review_data.length >= 1) {
      const countReviews = project?.review_data?.length - 1;
      img =
        project?.review_data[countReviews]?.versions[
          project?.review_data[countReviews]?.versions?.length - 1
        ]?.content;
    }

    return img;
  };

  const updateDateNextReview = (project_id, date) => {
    updateDateReview({ project_id: project_id, date: date })
      .then((res) => {
        getAllProjects(userData.id).then(({ data }) => {
          setAllProjects(data.response);
        });
      })
      .catch((error) => {});
  };

  const [projectsFilter, setProjectsFilter] = useState([]);

  useEffect(() => {
    setProjectsFilter(
      allProjects
        ?.filter((p) => JSON.parse(p?.flow)[3].status !== typeFin)
        .sort((a, b) => b.id - a.id)
    );
  }, [typeFin, allProjects]);

  console.log("projectsFilter", projectsFilter);

  const properties = {
    page,
    setModalPrivateNotes,
    modalPrivateNotes,
    dataModals,
    setDataModals,
    modalReviews,
    setModalReviews,
    redirectToStatusProject,
    redirectToReviews,
    modalZoomImg,
    setModalZoomImg,
    menuFloat,
    setMenuFloat,
    navigate,
    redirecToActiveProyects,
    redirectTo,
    userData,
    team,
    modalDesignerProject,
    setModalDesignerProject,
    getLastVersion,
    updateDateNextReview,
    allProjects,
    projectsFilter,
    typeFin,
    type_home,
    modalMessage,
    setModalMessage,
    modalMessageFinish,
    setModalMessageFinish,
  };

  return <View {...properties} />;
}

export default Index;
