import React, { useContext } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DETAIL_PROJECT_DATA, URL_IMG } from "../constats";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { userData, allProjects, brands } = useContext(DataContext);

  const filterProject = allProjects.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const projectValues = [JSON.parse(filterProject.values)];
  const projectId = brands.filter((brand) => brand.name === projectValues[0].brand_select)[0]?.id;
  const redirectTo = (route) => navigate(route);

  let options = [];
  for (const [key, value] of Object.entries(projectValues[0])) {
    DETAIL_PROJECT_DATA[key] &&
      options.push(
        <div className="value flex">
          <p className="title">{DETAIL_PROJECT_DATA[key]}</p>
          <p>
          {
              // If it is an object
              typeof value === "object" ? key === "post" &&
                value.map((item, index) => (
                  <div className="post_img" key={index}>
                    <img src={URL_IMG + item.name_img} alt={index} />
                  </div>
                ))
                : // If it is a value we need to check if it is the brand name
                key === "brand_select" ?
                  <Link to={`/brands/brands-form/${projectId}`}>{value}</Link>
                  :
                  value
            }
          </p>
        </div>
      );
  }

  const properties = {
    filterProject,
    projectValues,
    userData,
    redirectTo,
    navigate,
    options,
  };

  return <View {...properties} />;
}

export default Index;
