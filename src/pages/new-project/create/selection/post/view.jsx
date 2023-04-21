import React, { useState, useContext } from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constats";
import CreateFormContext from "../../../../../create-form-context";
import ReactTooltip from "react-tooltip";
import "./styles.scss";

function View({
  id,
  post,
  setPost,
  selectedImg,
  onSelectFile,
  onSelectText,
  setPostCount,
  postCount,
}) {
  const data = useContext(CreateFormContext)[0];

  const [objetive, setObjetive] = useState(
    post.filter((item) => item.id === id)[0]?.objetive ||
      data?.post?.filter((item) => item.id === id)[0]?.objetive
  );
  const [textPreview, setTextPreview] = useState(
    post.filter((item) => item.id === id)[0]?.text ||
      data?.post?.filter((item) => item.id === id)[0]?.text
  );

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
            {data?.img_array?.filter((item) => item.id === id)[0]?.object ? (
              <img
                className="img-user"
                src={
                  data?.img_array?.filter((item) => item.id === id)[0]?.object
                }
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
            {data.img_array &&
            data?.img_array?.filter((item) => item.id === id)[0]?.name
              ? data?.img_array?.filter((item) => item.id === id)[0]?.name
              : "Adjuntar *"}
          </label>

          <input
            {...FORM_INPUTS.reference_add}
            id={`reference-${id}`}
            onChange={(e) => {
              onSelectFile(e, id, "image");
              setPost(post.filter((item) => item.id !== id));
              setPost((post) => [
                ...post,
                {
                  id: id,
                  text: textPreview,
                  objetive: objetive,
                  name_img:
                    data.img_array &&
                    data?.img_array?.filter((item) => item.id === id)[0]?.name,
                },
              ]);
            }}
          />

          <textarea
            {...FORM_INPUTS.image_include}
            id="image_include"
            onChange={(e) => {
              setObjetive(e.target.value);
              setPost(post.filter((item) => item.id !== id));
              setPost((post) => [
                ...post,
                {
                  id: id,
                  text: textPreview,
                  objetive: objetive,
                  name_img:
                    data.img_array &&
                    data?.img_array?.filter((item) => item.id === id)[0]?.name,
                },
              ]);
            }}
          >
            {data?.post?.filter((item) => item.id === id)[0]?.objetive
              ? data?.post?.filter((item) => item.id === id)[0].objetive
              : ""}
          </textarea>
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
              {data.text_array &&
              data?.text_array?.filter((item) => item.id === id)[0]?.name
                ? data?.text_array?.filter((item) => item.id === id)[0]?.name
                : "Adjuntar"}
            </label>
            <input
              {...FORM_INPUTS.reference_add}
              id={`reference-text-${id}`}
              onChange={(e) => {
                onSelectText(e, id);
                /*  setPost(post.filter((item) => item.id !== id));
                setPost((post) => [
                  ...post,
                  {
                    id: id,
                    text: textPreview,
                    objetive: objetive,
                    name_img:
                      data.img_array &&
                      data?.img_array?.filter((item) => item.id === id)[0]
                        ?.name,
                        
                  },
                ]); */
              }}
            />
          </section>
          <textarea
            {...FORM_INPUTS.text_include}
            id="text_include"
            onChange={(e) => {
              setTextPreview(e.target.value);
              setPost(post.filter((item) => item.id !== id));
              setPost((references) => [
                ...references,
                {
                  id: id,
                  objetive: objetive,
                  text: e.target.value,
                  name_img:
                    data.img_array &&
                    data?.img_array?.filter((item) => item.id === id)[0]?.name,
                },
              ]);
            }}
          >
            {data?.post?.filter((item) => item.id === id)[0]?.text
              ? data?.post?.filter((item) => item.id === id)[0].text
              : ""}
          </textarea>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default View;
