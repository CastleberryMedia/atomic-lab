import React from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constats";

import ReactTooltip from "react-tooltip";
import "./styles.scss";

function View({
  id,
  post,
  setPost,
  setPostCount,
  postCount,
  formData,
  handleUpdatePost,
}) {
  return (
    <div className="columns upload-file">
      <div className="column">
        <div className="post-example">
          <div className="post-header flex">
            <div className="title flex">
              <div className="circle"></div>
              <div>@username</div>
            </div>
            <div className="icon-menu-h">{Icons("icon_menu_h")}</div>
          </div>

          <div className="post-content">
            {formData?.post?.find((item) => item.id === id)?.base64 ? (
              <img
                className="img-user"
                src={`data:image/jpeg;base64,${
                  formData?.post?.find((item) => item.id === id)?.base64
                }`}
                alt="preview"
              />
            ) : (
              Icons("icon_img_post")
            )}
          </div>
          <div className="post-footer">
            <div className="footer-top">{Icons("icons_post")}</div>
            <p>Views</p>

            <p>{"Descripción #hashtags"}</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div>
          <label htmlFor="text_include" className="title-include flex">
            <div className="title flex">
              {FORM_INPUTS.image_include.label}
              {Icons("help_circle")}
              <div className="required">*</div>
            </div>

            {postCount >= 2 && (
              <div
                className="delete"
                data-tip={"Borrar publicación"}
                onClick={() => {
                  setPost(post.filter((p) => p.id !== id));
                  setPostCount(postCount - 1);
                }}
              >
                {Icons("delete_circle")}
              </div>
            )}
            <ReactTooltip place={"bottom"} data-for={id} />
          </label>
          <label htmlFor={`reference-${id}`} className="button-blue flex">
            {Icons("clip_white")}
            {formData?.post?.find((item) => item.id === id)?.nameFile ??
              "Adjuntar *"}
          </label>

          <input
            {...FORM_INPUTS.reference_add}
            id={`reference-${id}`}
            onChange={(e) => {
              handleUpdatePost("file", e.target.files[0], id);
            }}
          />

          <textarea
            {...FORM_INPUTS.image_include}
            id="image_include"
            onChange={(e) => {
              handleUpdatePost("objetive", e.target.value, id);
            }}
            defaultValue={
              formData?.post?.find((item) => item.id === id)?.objetive
            }
          />
        </div>
        <div>
          <label htmlFor="text_include" className="title-include flex">
            <div className="title flex">
              {FORM_INPUTS.text_include.label}
              {Icons("help_circle")}
              <div className="required">*</div>
            </div>
          </label>
          <section className="section-buttons flex">
            <label
              htmlFor={`reference-text-${id}`}
              className="button-blue flex"
            >
              {Icons("clip_white")}
              {formData?.post?.find((item) => item.id === id)
                ?.nameIncludeFile ?? "Adjuntar imagen"}
            </label>
            <input
              {...FORM_INPUTS.reference_add}
              id={`reference-text-${id}`}
              onChange={(e) => {
                handleUpdatePost("fileInclude", e.target.files[0], id);
              }}
            />
          </section>
          <textarea
            {...FORM_INPUTS.text_include}
            id="text_include"
            onChange={(e) => {
              handleUpdatePost("text", e.target.value, id);
            }}
            defaultValue={formData?.post?.find((item) => item.id === id)?.text}
          />
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default View;
