import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import {
  getReviewsProject,
  addReviews,
  updateFlow,
  getAllProjects,
  putFinishReview,
} from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const redirectTo = (item) => navigate(item);

  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [menuTopView, setMenuTopView] = useState("");
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalData, setModalData] = useState({});

  const { userData, allProjects, setAllProjects } = useContext(DataContext);
  const [reviews, setReviews] = useState(null);
  const [versionSelect, setVersionSelect] = useState(1);
  const [reviewSelect, setReviewSelect] = useState([]);

  const [versionVote, setVersionVote] = useState(null);

  const filterProject = allProjects?.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const getAllReviews = () => {
    getReviewsProject(id).then(({ data }) => {
      setReviews(data);
      setVersionSelect(
        data?.review_data[data?.review_data.length - 1]?.version
      );
    });
  };

  useEffect(() => {
    setReviewSelect(
      reviews?.review_data.filter((x) => x.version === versionSelect)[0]
    );
  }, [versionSelect, reviews]);

  const projectExtraData =
    filterProject?.extra_data && JSON.parse(filterProject?.extra_data);

  useEffect(() => {
    getAllReviews();
  }, []);

  useEffect(() => {
    setProjectData(
      filterProject && {
        ...filterProject,
        values: filterProject?.values,
      }
    );
  }, [filterProject]);

  const [selectedImg, setSelectedImg] = useState();
  const [optionsImg, setOptionsImg] = useState([{ id: 1 }]);
  const [optionsCount, setOptionsCount] = useState(1);
  const [selectedImgArray, setSelectedImgArray] = useState([]);
  const [idSelect, setIdSelect] = useState("");

  useEffect(() => {
    if (!selectedImg) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    setSelectedImgArray(
      selectedImgArray.filter((item) => item.id !== idSelect)
    );

    setSelectedImgArray((selectedImgArray) => [
      ...selectedImgArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedImg.name,
        formData: selectedImg,
      },
    ]);
  }, [selectedImg, idSelect]);

  const onSelectFile = (e, id) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setIdSelect(id);
    setSelectedImg(e.target.files[0]);
  };

  const [state, setState] = useState("idle");
  const [stateFinishReview, setStateFinishReview] = useState("idle");

  const handleCreateReview = () => {
    JSON.safeStringify = (obj, indent = 2) => {
      let cache = [];
      const retVal = JSON.stringify(
        obj,
        (key, value) =>
          typeof value === "object" && value !== null
            ? cache.includes(value)
              ? undefined // Duplicate reference found, discard key
              : cache.push(value) && value // Store value in our collection
            : value,
        indent
      );
      cache = null;
      return retVal;
    };

    const formData = new FormData();

    selectedImgArray.map((image) =>
      formData.append(image.name, image.formData)
    );

    const dataFin = {
      id_project: id,
      user_id: userData.id,
      version: versionSelect || 1,
    };

    formData.append("jsondataRequest", JSON.safeStringify(dataFin));

    createReview(formData).then((res) => {
      setState("idle");

      getAllProjects(userData.id).then(({ data }) => {
        setAllProjects(data.response);
      });
    });
  };

  async function createReview(formData) {
    await addReviews(formData);
    await getAllReviews();
  }

  const onClickHandler = (type) => {
    setState("loading");
    setTimeout(() => {
      type === "save" && handleCreateReview();
      type === "finish" && finishProject();
    }, 2000);
  };

  const onClickHandlerFinishReview = () => {
    setStateFinishReview("loading");
    setTimeout(() => {
      finishReview();
    }, 2000);
  };

  const finishReview = () => {
    putFinishReview({
      project_id: id,
      img_id:
        reviews?.review_data[versionSelect - 1]?.versions.length === 1
          ? reviews?.review_data[versionSelect - 1].versions[0].id
          : versionVote,
    }).then((res) => {
      setModalMessageFinish3(true);
      setStateFinishReview("idle");

      getAllProjects(userData.id).then(({ data }) => {
        setAllProjects(data.response);
      });

      /* navigate("/projects-inactive"); */
    });
  };

  const [modalMessageFinish1, setModalMessageFinish1] = useState(false);
  const [modalMessageFinish2, setModalMessageFinish2] = useState(false);
  const [modalMessageFinish3, setModalMessageFinish3] = useState(false);

  const finishProject = () => {
    updateFlow({ project_id: id, id_flow: 4 }).then((res) => {
      setState("idle");

      getAllProjects(userData.id).then(({ data }) => {
        setAllProjects(data.response);
      });

      navigate("/projects-inactive", {
        state: { finish_project: true },
      });
    });
  };

  const properties = {
    projectData,
    redirectTo,
    setModalZoomImg,
    modalZoomImg,
    menuTopView,
    setMenuTopView,
    modalData,
    setModalData,
    reviews,
    versionSelect,
    setVersionSelect,
    versionVote,
    setVersionVote,
    id,
    userData,
    optionsImg,
    selectedImgArray,
    optionsCount,
    onSelectFile,
    setOptionsImg,
    setOptionsCount,
    handleCreateReview,
    state,
    onClickHandler,
    finishProject,
    onClickHandlerFinishReview,
    stateFinishReview,
    modalMessageFinish1,
    setModalMessageFinish1,
    modalMessageFinish2,
    setModalMessageFinish2,
    projectExtraData,
    modalMessageFinish3,
    setModalMessageFinish3,
    reviewSelect,
  };

  return <View {...properties} />;
}

export default Index;
