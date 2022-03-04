import React, { useState, useContext } from "react";
import DataContext from "../../data-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ page }) {
  const navigate = useNavigate();
  const { finishProjects } = useContext(DataContext);

  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [menuFloat, setMenuFloat] = useState("");

  const redirectToStatusProject = (project) =>
    navigate(`/status-project/${project.id}`, {
      state: { project: project },
    });




  const properties = {
    page: page ? page : "finish-projects",
    redirectToStatusProject,
    setModalPrivateNotes,
    dataModals,
    setDataModals,
    modalPrivateNotes,
    modalZoomImg,
    setModalZoomImg,
    menuFloat,
    setMenuFloat,
    navigate,
    finishProjects,
  };

  return <View {...properties} />;
}

export default Index;
