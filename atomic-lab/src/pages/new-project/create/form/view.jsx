import React, { useContext, useState } from "react";
import CreateFormContext from "../../../../create-form-context";
import { FORM_INPUTS } from "../../../constats";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import References from "./references";
import "./styles.scss";

function View({ redirectToService, setStep, step }) {
  const data = useContext(CreateFormContext);
  const [formData, setFormData] = useContext(CreateFormContext);

  const [references, setReferences] = useState([{ id: 0 }]);
  const [referencesCount, setReferencesCount] = useState(1);

  console.log("DATA", data);

  return (
    <div className="form-page page">
      <div className="step flex">{Icons("step_form")}</div>

      <PageTitle
        title={"Formulario"}
        /* price={serviceData?.price?.basic}
        modalPriceTotal={modalPriceTotal} */
      />

      <section className="subtitle">
        <p>
          Contesta las siguientes preguntas por medio de
          <span className="text-purple"> texto</span>,
          <span className="text-purple"> voz</span>, y/o un video. También
          puedes
          <span className="text-purple"> adjuntar</span> un archivo si lo
          deseas.
        </p>
        <p>
          Todos los campos son opcionales excepto el
          <span className="text-purple"> nombre del proyecto</span>.
        </p>
        <p>
          Entre más información nos brindes, mejor será todo el proceso de
          desarrollo de tu requerimiento.
        </p>
      </section>

      <section className="content">
        <div className="columns">
          <div className="column">
            <div>
              <label for="name">{FORM_INPUTS.name.label}</label>
              <input
                {...FORM_INPUTS.name}
                id="name"
                onChange={(e) =>
                  setFormData({ ...formData, name_project: e.target.value })
                }
                value={formData.name_project ? formData.name_project : ""}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column">
            <div>
              <label for="public">{FORM_INPUTS.public.label}</label>
              <textarea
                {...FORM_INPUTS.public}
                id="public"
                onChange={(e) =>
                  setFormData({ ...formData, public_goal: e.target.value })
                }
                value={formData.public_goal ? formData.public_goal : ""}
              />
            </div>
          </div>
          <div className="column">
            <div>
              <label for="colors">{FORM_INPUTS.palete_colors.label}</label>
              <textarea
                {...FORM_INPUTS.palete_colors}
                id="colors"
                onChange={(e) =>
                  setFormData({ ...formData, palete_colors: e.target.value })
                }
                value={formData.palete_colors ? formData.palete_colors : ""}
              />
            </div>
          </div>
        </div>
        <p>
          Adjunta los archivos y
          <span className="text-purple"> referencias/ejemplos</span> que creas
          que nos pueden ayudar a diseñar tu requerimiento.
        </p>
        {references
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item) => (
            <References
              id={item.id}
              references={references}
              setReferences={setReferences}
            />
          ))}

        <div className="more flex">
          <div
            className="icon-add flex"
            onClick={() => {
              setReferencesCount(referencesCount + 1);
              setReferences((references) => [
                ...references,
                { id: referencesCount },
              ]);
            }}
          >
            {Icons("add_white")}
          </div>
          <p>Adjuntar más archivos/referencias/ejemplos/etc.</p>
        </div>
      </section>

      <section className="section-buttons flex">
        <div className="button" onClick={() => redirectToService()}>
          Atrás
        </div>
        <div
          className="button"
          onClick={() => {
            setStep(step + 1);
            setFormData({ ...formData, references: references });
          }}
        >
          Continuar
        </div>
      </section>
    </div>
  );
}

export default View;