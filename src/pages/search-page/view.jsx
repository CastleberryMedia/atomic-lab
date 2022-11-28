import React from "react";
import PageTitle from "../page-title";
import Projects from "../projects";
import Team from "../header-bar/pages/team";
import Brands from "../header-bar/pages/brands";
import "./styles.scss";

function View({ dataActive, teamFilter, brandsFilter, search }) {
  const active = dataActive?.filter(
    (item) => item.flow_parse[3].status !== "active"
  );
  const inactive = dataActive?.filter(
    (item) => item.flow_parse[3].status !== "inactive"
  );

  return (
    <div className="page search-page">
      <PageTitle user={true} title={`Search`} />
      <div className="content">
        {!search ? (
          <div className="message text-purple">Ingrese texto a buscar</div>
        ) : (
          dataActive?.length > 0 && (
            <div className="content-section">
              {active?.length > 0 && (
                <div className="section-page">
                  <Projects type_home="active" page="home" data={dataActive} />
                </div>
              )}
              {inactive?.length > 0 && (
                <div className="section-page">
                  <Projects
                    type_home="inactive"
                    page="home"
                    data={dataActive}
                  />
                </div>
              )}
            </div>
          )
        )}

        {teamFilter?.length > 0 && (
          <div className="content-section">
            <Team teamFilter={teamFilter} />
          </div>
        )}

        {brandsFilter?.length > 0 && (
          <div className="content-section">
            <Brands brandsFilter={brandsFilter} />
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
