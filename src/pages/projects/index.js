import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDateReview, getAllProjects } from "../../services";
import View from "./view";
import moment from "moment";

function Index({ type_home, page, data }) {
  let location = useLocation();

  const [newProject] = useState(location?.state?.new_project);
  const [finishProject] = useState(location?.state?.finish_project);

  const typeFin = location.pathname.split("-")[1]
    ? location.pathname.split("-")[1]
    : type_home && type_home;

  const { userData, team, allProjects, setAllProjects, loadingAllProjects } =
    useContext(DataContext);

  const [modals, setModals] = useState({
    infoPDF: false,
    deleteProject: false,
    invite: false,
  });

  const [modalMessage, setModalMessage] = useState(newProject);
  const [modalMessageFinish, setModalMessageFinish] = useState(finishProject);
  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalFinalComments, setModalFinalComments] = useState(false);
  const [modalFinalDesigns, setModalFinalDesigns] = useState(false);
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalDesignerProject, setModalDesignerProject] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [menuFloat, setMenuFloat] = useState("");
  const [filter, setFilter] = useState(null);

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

    if (
      Array.isArray(project?.review_data) ||
      project?.review_data.length >= 1
    ) {
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
  const [projectsFilterOriginal, setProjectsFilterOriginal] = useState([]);

  useEffect(() => {
    if (data) {
      setProjectsFilterOriginal(data);
    }
  }, [data]);

  const [orderSelect, setOrderSelect] = useState(null);
  const [asc, setAsc] = useState(true);

  const applySort = (type, data) => {
    const oldOrder = data || projectsFilterOriginal;

    setPaginationPage(1);

    setOrderSelect(type);

    switch (type) {
      case "Nombre del proyecto":
        setProjectsFilter(
          paginate(
            asc
              ? oldOrder.sort((a, b) =>
                  a.name_project.localeCompare(b.name_project)
                )
              : oldOrder.sort((a, b) =>
                  b.name_project.localeCompare(a.name_project)
                ),
            paginationPage === 1 ? 0 : paginationPage - 1,
            5
          )
        );

        break;

      case "Fecha estimada próx. revisión":
        setProjectsFilter(
          paginate(
            asc
              ? oldOrder.sort(
                  (a, b) => new Date(a.review_date) - new Date(b.review_date)
                )
              : oldOrder.sort(
                  (a, b) => new Date(b.review_date) - new Date(a.review_date)
                ),
            paginationPage === 1 ? 0 : paginationPage - 1,
            5
          )
        );
        break;
      case "Estado":
        setProjectsFilter(
          paginate(
            asc
              ? oldOrder.sort((a, b) => a.flow_active - b.flow_active)
              : oldOrder.sort((a, b) => b.flow_active - a.flow_active),
            paginationPage === 1 ? 0 : paginationPage - 1,
            5
          )
        );
        break;
      case "Creacion":
        setProjectsFilter(
          paginate(
            asc
              ? oldOrder.sort(
                  (a, b) =>
                    new Date(b.created_format) - new Date(a.created_format)
                )
              : oldOrder.sort(
                  (a, b) =>
                    new Date(a.created_format) - new Date(b.created_format)
                ),
            paginationPage === 1 ? 0 : paginationPage - 1,
            5
          )
        );
        break;

      default:
        break;
    }
    setAsc(!asc);
  };

  function paginate(a, pageIndex, pageSize) {
    var endIndex = Math.min((pageIndex + 1) * pageSize, a.length);

    return a.slice(Math.max(endIndex - pageSize, 0), endIndex);
  }

  const [paginationPage, setPaginationPage] = useState(1);

  useEffect(() => {
    setProjectsFilter(
      paginate(
        projectsFilterOriginal,
        paginationPage === 1 ? 0 : paginationPage - 1,
        5
      )
    );
  }, [paginationPage, projectsFilterOriginal]);

  useEffect(() => {
    let tempList = [];

    allProjects?.forEach((p) => {
      if (p.values) {
        const info = {
          ...p,
          ...p?.values[0],
          flow_parse: JSON.parse(p?.flow),
          flow_active: JSON.parse(p?.flow).filter(
            (f) => f.status === "active"
          )[0]?.id,
          created_format: moment(p.created_at).format("YYYY-MM-DD"),
        };

        tempList.push(info);
      }
    });

    setProjectsFilterOriginal(tempList);
    setProjectsFilter(tempList);
    applySort("Creacion", tempList);
  }, [allProjects]);

  /*  useEffect(() => {
    applySort("Nombre del proyecto");
  }, []); */

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
    loadingAllProjects,
    setModalFinalDesigns,
    modalFinalDesigns,
    filter,
    setFilter,
    applySort,
    orderSelect,
    asc,
    setModalFinalComments,
    modalFinalComments,
    paginationPage,
    setPaginationPage,
    projectsFilterOriginal,
    modals,
    setModals,
  };

  return <View {...properties} />;
}

export default Index;
