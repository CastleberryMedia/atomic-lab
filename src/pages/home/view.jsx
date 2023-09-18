import React from "react";
import PageTitle from "../page-title";
import Projects from "../projects";

import { Icons } from "../icons";

import "./styles.scss";

function View({ redirectTo, userData }) {
  return (
    <div className="page home">
      <div className="home-content">
        <PageTitle user={true} title="Welcome!"></PageTitle>

        {userData?.rol_id === 1 && (
          <div
            className="add-project flex"
            onClick={() => redirectTo("new-project")}
          >
            <div className="add-project-icon">{Icons("add_circle")}</div>
            <p className="text-purple">Start a new project</p>
          </div>
        )}

        <div className="section-page">
          <Projects type_home="active" page="home" />
        </div>

        <div className="section-page">
          <Projects type_home="inactive" page="home" />
        </div>
      </div>
    </div>
  );
}

export default View;
