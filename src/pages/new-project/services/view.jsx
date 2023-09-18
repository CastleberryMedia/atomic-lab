import React from "react";
import PageTitle from "../../page-title";
import Service from "./components/service";
import { SERVICES_DATA } from "../../constats";
import "./styles.scss";

function View() {
  return (
    <div className="page services">
      <PageTitle title="What do you want to do today?" />

      <div className="service flex">
        {SERVICES_DATA.map((service, index) => (
          <Service key={index} service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default View;
