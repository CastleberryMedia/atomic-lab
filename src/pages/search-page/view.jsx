import React from "react";
import PageTitle from "../page-title";
import Projects from "../projects";
import "./styles.scss";

function View({ dataActive, search }) {
  const active = dataActive.filter(
    (item) => item.flow_parse[3].status !== "active"
  );
  const inactive = dataActive.filter(
    (item) => item.flow_parse[3].status !== "inactive"
  );

  console.log(active);

  return (
    <div className="page search-page">
      <PageTitle
        /*  page={page} */
        user={true}
        title={`Search`}
      />
      <div className="content">
        {!search ? (
          <p>Ingrese texto a buscar</p>
        ) : (
          dataActive.length > 0 && (
            <>
              {active.length > 0 && (
                <div className="section-page">
                  <Projects type_home="active" page="home" data={dataActive} />
                </div>
              )}
              {inactive.length > 0 && (
                <div className="section-page">
                  <Projects
                    type_home="inactive"
                    page="home"
                    data={dataActive}
                  />
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}

export default View;
