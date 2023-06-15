import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { DETAIL_PROJECT_DATA_2 } from "../constats";
import { getAssignDesignerProject } from "../../services";
import View from "./view";
import { Icons } from "../icons";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { brands, allProjects } = useContext(DataContext);

  const filterProject = allProjects?.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const projectValues = filterProject?.values && filterProject?.values[0];

  console.log("projectValues", projectValues);

  let options = [];
  let options_post = [];

  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    getAssignDesignerProject(id)
      .then((res) => {
        res.data.data.length && setDesigners(res.data.data);
      })
      .catch((error) => {});
  }, [id]);

  const redirectToBrandForm = (name) => {
    navigate(
      `/brands/brands-form/${
        brands.filter((brand) => brand.name === name)[0].id
      }`
    );
  };

  DETAIL_PROJECT_DATA_2(
    projectValues,
    designers,
    Icons,
    filterProject,
    redirectToBrandForm
  ).forEach((data) => {
    options.push(
      <div className="value flex">
        <p className="title">{data.label}</p>
        <p>{data?.content}</p>
      </div>
    );
  });

  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [dataModals, setDataModals] = useState(false);

  options_post.push(
    <div className="value post-dat-all flex">
      <p className="title">Post</p>

      <div className="post-container">
        {projectValues?.post?.map((item, index) => (
          <>
            <div className="post-data" key={item.id}>
              <div className="post-id">#{index + 1}</div>
              <div
                className="img-container"
                onClick={() => {
                  setModalZoomImg(!modalZoomImg);
                  setDataModals({
                    type: "normal",
                    img: item.name_img,
                  });
                }}
              >
                <img src={item.name_img} alt={index} />
              </div>
              <div className="data-text">
                <p>
                  <span>Comentario de la imagen:</span> {item.objetive}
                </p>
                <p>
                  <span>Texto a incluir:</span>
                  <div className="with-icons-text">
                    <a
                      href={
                        projectValues?.text_array?.filter(
                          (text, indexx) => indexx === index
                        )[0]?.name
                      }
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {Icons("download")}
                    </a>
                    {item.text}
                  </div>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );

  const properties = {
    projectValues,
    navigate,
    options,
    options_post,
    modalZoomImg,
    setModalZoomImg,
    dataModals,
  };

  return <View {...properties} />;
}

export default Index;
