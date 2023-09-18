import React from "react";
import { Icons } from "../../../../icons";

import "./styles.scss";

function View({ service, redirectToServicePage }) {
  return (
    <div
      className="card-service"
      onClick={() => service.status === "active" && redirectToServicePage()}
    >
      <>
        <div className="background"></div>
        <div
          className={`card-content flex ${service.title
            .replaceAll(" ", "-")
            .replaceAll("ñ", "n")
            .toLowerCase()}`}
        >
          {service.status !== "active" && "coming-soon" && (
            <div className="status flex ">Coming soon</div>
          )}
          <div className="description flex ">{service.description}</div>
        </div>
        <div className="card-footer flex">
          <div className="title">{service.title}</div>
          <div className="icon-credit flex">
            {Icons("credits")} ${service.price.basic[0].price}
          </div>
        </div>
      </>
    </div>
  );
}

export default View;
