import React from "react";

import { FORM_INPUTS } from "../../../constats";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import References from "./references";

import "./styles.scss";

function View({
  redirectToService,
  setStep,
  step,
  formData,
  setFormData,
  references,
  setReferences,
  referencesCount,
  setReferencesCount,
}) {
  return (
    <div className="form-page page">
      <div className="step flex">{Icons("step_form")}</div>

      <PageTitle title={"Form"} />

      <section className="subtitle">
        <p>
          Answer the following questions in
          <span className="text-purple"> text form</span>,
          <span className="text-purple"> voice</span>, &/or a
          <span className="text-purple"> video</span>. You can also
          <span className="text-purple"> attach</span> a file if you wish.
          if you wish.
        </p>
        <p>
          All fields are optional except for the
          <span className="text-purple"> project name</span>.
        </p>
        <p>
          The more information you give us, the better the whole process of developing your
          development of your requirement.
        </p>
      </section>

      <section className="content">
        <div className="columns">
          <div className="column">
            <div>
              <label htmlFor="name">
                {FORM_INPUTS.name.label}{" "}
                <span className="required">
                  {FORM_INPUTS.name.required && "(Required)"}
                </span>
              </label>
              <input
                {...FORM_INPUTS.name}
                id="name"
                onChange={(e) => {
                  setFormData({ ...formData, name_project: e.target.value });
                }}
                value={formData?.name_project}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column">
            <div>
              <label htmlFor="public">{FORM_INPUTS.public.label}</label>
              <textarea
                {...FORM_INPUTS.public}
                id="public"
                onChange={(e) => {
                  setFormData({ ...formData, public_goal: e.target.value });
                }}
                value={formData?.public_goal}
              />
            </div>
          </div>
          <div className="column">
            <div>
              <label htmlFor="colors">{FORM_INPUTS.palete_colors.label}</label>
              <textarea
                {...FORM_INPUTS.palete_colors}
                id="colors"
                onChange={(e) => {
                  setFormData({ ...formData, palete_colors: e.target.value });
                }}
                value={formData?.palete_colors}
              />
            </div>
          </div>
        </div>
        <p>
          Attach any <span className="text-purple"> files</span> and
          <span className="text-purple"> references/examples</span> that you think may help us design your requirement.
        </p>
        {references
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, index) => (
            <References
              key={index}
              references={references}
              setReferences={setReferences}
              data={item}
            />
          ))}

        <div
          className="more flex"
          onClick={() => {
            setReferencesCount(referencesCount + 1);
            setReferences((references) => [
              ...references,
              { id: referencesCount },
            ]);
          }}
        >
          <div className="icon-add flex">{Icons("add_white")}</div>
          <p>Attach more files/references/examples/etc.</p>
        </div>
      </section>

      <section className="section-buttons flex">
        <button className="button" onClick={() => redirectToService()}>
          Back
        </button>

        <button
          disabled={!formData.name_project}
          className="button"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default View;
