import React from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constats";
import "./styles.scss";

function View({ data, formData, handleUpdateReferences }) {
  return (
    <div className="upload-file">
      <label
        htmlFor={`reference-${data && data.id}`}
        className="button-blue flex"
      >
        {Icons("clip_white")}
        {formData?.references?.find((r) => r.id === data.id)?.name_file ??
          "Attach"}
      </label>

      <input
        {...FORM_INPUTS.reference_add}
        id={`reference-${data?.id}`}
        onChange={(e) => {
          handleUpdateReferences("file", e.target.files[0], data.id);
        }}
      />

      <div className="columns">
        <div className="column">
          <div>
            <label htmlFor="reference">{FORM_INPUTS.reference.label}</label>
            <textarea
              {...FORM_INPUTS.reference}
              id="reference"
              onChange={(e) =>
                handleUpdateReferences("text", e.target.value, data.id)
              }
              defaultValue={
                formData?.references?.find((r) => r.id === data.id)?.text
              }
            />
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default View;
