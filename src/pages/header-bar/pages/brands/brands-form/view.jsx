import React from "react";
import PageTitle from "../../../../page-title";
import { FORM_INPUTS_BRANDS, FROM_BRAND_TABLES } from "../../../../constats";
import "./styles.scss";
import { Icons } from "../../../../icons";

function View({
  id,
  redirectTo,
  dataBrand,
  onSubmit,
  handleSubmit,
  register,
  selectedImgArray,
  onSelectFile,
  filesBrands,
  setFilesBrands,
  rol,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="brands-form-page page">
        <PageTitle
          page={"brands-form-page"}
          user={true}
          title={id ? "Editar marca" : "Crear marca"}
        />

        <div className="description">
          Ingresa los datos de tu compañía y de la marca. Si tienes más marcas
          las puedas agregar en la pantalla anterior.
        </div>
        <section className="content ">
          {FORM_INPUTS_BRANDS.map((input, index) => (
            <div
              key={index}
              className={`item-input ${input.options && input.className}`}
            >
              <label htmlFor={input.id}>{input.label} </label>

              {input.type && (
                <div className="flex">
                  {input.type !== "textarea" && input.type !== "file" && (
                    <input
                      {...input}
                      id={input.id}
                      {...register(input.id)}
                      disabled={rol === 3}
                    />
                  )}
                  {input.type === "textarea" && (
                    <textarea
                      {...input}
                      id={input.id}
                      {...register(input.id)}
                      disabled={rol === 3}
                    />
                  )}
                  {input.type === "file" && (
                    <div className="icon-logo flex">
                      <div className="icon-img">
                        {selectedImgArray?.object || dataBrand?.url_image ? (
                          <img
                            src={
                              selectedImgArray?.object || dataBrand?.url_image
                            }
                            alt=""
                            className="icon-icon"
                          />
                        ) : (
                          Icons("icon_img_post")
                        )}
                      </div>

                      {rol !== 3 && (
                        <label
                          htmlFor={`reference-${id}`}
                          className="button-blue flex"
                        >
                          {Icons("clip_white")}
                          {selectedImgArray?.name || "Adjuntar"}
                        </label>
                      )}
                      <input
                        {...input}
                        id={`reference-${id}`}
                        onChange={(e) => {
                          onSelectFile(e, id);
                        }}
                        disabled={rol === 3}
                      />
                    </div>
                  )}
                  {rol !== 3 && Icons("edit")}
                </div>
              )}

              {input?.options?.map((option, index) => (
                <div key={index} className={input.className}>
                  <div className="flex-icon flex">
                    {option.icon && Icons(option.id)}{" "}
                    <label htmlFor={option.id}>{option.label} </label>
                  </div>
                  <div className="flex">
                    <input
                      {...option}
                      id={option.id}
                      checked={
                        option.type === "checkbox" &&
                        id &&
                        dataBrand["offers"] === option.id &&
                        true
                      }
                      {...register(option.id)}
                      disabled={rol === 3}
                    />

                    {option.type !== "checkbox" && Icons("edit")}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <table className="table">
            <tbody>
              {FROM_BRAND_TABLES.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>
                    <label
                      htmlFor={`filebrands-${item.id}`}
                      className="flex input-icon"
                    >
                      {Icons("upload_circle")}
                      Cargar
                    </label>

                    <input
                      className="input-file"
                      type="file"
                      id={`filebrands-${item.id}`}
                      onChange={(e) => {
                        setFilesBrands(
                          filesBrands.filter((file) => file.id !== item.id)
                        );
                        setFilesBrands((oldArray) => [
                          ...oldArray,
                          {
                            id: item.id,
                            name: item.title.replaceAll(" ", "").toLowerCase(),
                            file: e.target.files[0],
                          },
                        ]);
                      }}
                      disabled={rol === 3}
                    />
                  </td>
                  <td>
                    {dataBrand?.materiales ? (
                      <a
                        rel="noreferrer"
                        target={"_blank"}
                        href={
                          dataBrand.materiales.filter(
                            (material) =>
                              material.type ===
                              item.title.replaceAll(" ", "").toLowerCase()
                          )[0]?.url_image
                        }
                      >
                        <div className="flex">
                          {Icons("download_circle")} Descargar
                        </div>
                      </a>
                    ) : (
                      <div className="flex">
                        {Icons("download_circle")} Descargar
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex input-manuals">
                      {dataBrand?.materiales ? (
                        <input
                          type="text"
                          className="input-txt"
                          value={
                            dataBrand.materiales.filter(
                              (material) =>
                                material.type ===
                                item.title.replaceAll(" ", "").toLowerCase()
                            )[0]?.type
                          }
                          disabled={rol === 3}
                        />
                      ) : (
                        <input
                          type="text"
                          className="input-txt"
                          value={
                            filesBrands.filter((file) => file.id === item.id)[0]
                              ?.file.name || ""
                          }
                          disabled={rol === 3}
                        />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="flex">{Icons("delete_circle")}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="footer">
          <section className="section-buttons flex">
            <button className="button" onClick={() => redirectTo("/brands")}>
              Atrás
            </button>
            {rol !== 3 && (
              <input
                className="button"
                type="submit"
                value={"Guardar Cambios"}
              />
            )}
          </section>
        </section>
      </div>
    </form>
  );
}

export default View;
