import React from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { FORM_INPUTS } from "../../../constats";
import Post from "./post";
import "../styles.scss";
import "./styles.scss";

function View({
  setStep,
  step,
  selectedImgArray,
  setFormData,
  formData,
  post,
  setPost,
  setPostCount,
  postCount,
  handleUpdatePost,
}) {
  return (
    <div className="selection-page page">
      <div className="step flex">{Icons("step_selection")}</div>

      <PageTitle title={"Content"} />

      <section className="subtitle">
        <p>
          Enter the information you have for each of the publications to be designed.
          design
        </p>
      </section>

      <section className="content">
        <div className="columns">
          <div className="column">
            <div className="column-item">
              <label htmlFor="idea">
                {FORM_INPUTS.idea.label}{" "}
                <div className="required">
                  {FORM_INPUTS.idea.required && "(Required)"}
                </div>
              </label>
              <textarea
                {...FORM_INPUTS.idea}
                id="idea"
                onChange={(e) => {
                  setFormData({ ...formData, idea_post: e.target.value });
                }}
                defaultValue={formData?.idea_post}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>

        {post
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map(
            (item, index) =>
              item.id >= 1 && (
                <Post
                  key={index}
                  id={item.id}
                  post={post}
                  setPost={setPost}
                  setPostCount={setPostCount}
                  postCount={postCount}
                  handleUpdatePost={handleUpdatePost}
                />
              )
          )}

        <div
          className="add flex"
          onClick={() => {
            setPost((post) => [
              ...post,
              { id: postCount + 1, objetive: "", text: "" },
            ]);
            setPostCount(postCount + 1);
          }}
        >
          {Icons("add_white")}
          <p>Add a new publication to this request </p>
        </div>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <button className="button" onClick={() => setStep(step - 1)}>
            Back
          </button>

          <button
            disabled={
              !formData.idea_post ||
              !post ||
              /*     selectedTextArray?.length === 0 || */
              selectedImgArray?.length === 0
            }
            onClick={() => {
              setStep(step + 1);
            }}
            className="button"
          >
            Next
          </button>
        </section>
      </section>
    </div>
  );
}

export default View;
