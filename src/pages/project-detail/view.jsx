import React from "react";
import PageTitle from "../page-title";
import ModalZoomImg from "../modals/zoom-img";
import "./styles.scss";

function View({
  projectValues,
  navigate,
  options,
  options_post,
  modalZoomImg,
  setModalZoomImg,
  dataModals,
}) {
  return (
    <div className="page project-detail">
      <PageTitle user={true} title={projectValues?.name_project} />
      <p>
        The following is the information you provided about the project.
      </p>
      <div className="project-detail-content flex">{options}</div>
      <div className="project-detail-content flex">{options_post}</div>
      <section className="section-buttons flex">
        <button
          className="button"
          onClick={() => navigate(-1, { replace: true })}
        >
          Back
        </button>
      </section>

      {modalZoomImg && (
        <ModalZoomImg close={setModalZoomImg} data={dataModals} />
      )}
    </div>
  );
}

export default View;
