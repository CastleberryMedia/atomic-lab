import React, { useState } from "react";
import PageTitle from "../../../../page-title";
import { FORM_INPUTS_BRANDS, FROM_BRAND_TABLES, FORM_INPUTS } from "../../../../constats";
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

  const [isActive, setIsActive] = useState(false);

  let list = FORM_INPUTS_BRANDS.map((input, index) => {
    return (
      <>
      <div
        key={index}
        className={`item-input ${input.options && input.className}`}
      >
        {input.label !== "Avatar" && input.label !== "Nombre comercial de la empresa" && (
          <label htmlFor={input.id}>{input.label} </label>
        )}
  
        {input.type && (
          <div className="flex">
            {input.label !== "Avatar" && input.label !== "Nombre comercial de la empresa" && input.type !== "textarea" && input.type !== "file" && (
              <input
                {...input}
                id={input.id}
                {...register(input.id)}
                disabled={rol === 3}
              />
            )}
  
            {input.label !== "Avatar" && input.label !== "Nombre comercial de la empresa" && input.type === "textarea" && (
              <textarea
                {...input}
                id={input.id}
                {...register(input.id)}
                disabled={rol === 3}
              />
            )}
            {input.label !== "Avatar" && input.label !== "Nombre comercial de la empresa" && rol !== 3 && Icons("edit")}
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
      </>
    )
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="brands-form-page page">
        <PageTitle
          page={"brands-form-page"}
          user={true}
          title={id ? "Editar marca" : "Crear marca"}
        />

        <div className="description">
          <button className="button" onClick={() => redirectTo("/brands")}>
            Atrás
          </button>
        </div>
        
        <div className="description">
          Ingresa los datos de tu compañía y de la marca. Si tienes más marcas
          las puedas agregar en la pantalla anterior.
        </div>
        <section className="content ">

          <div class="item-input undefined">
              <label for="url_image">Avatar </label>
              <div class="flex">
                  <div class="icon-logo flex">
                      <div class="icon-img">
                          <img
                              src="data:image/png;base64,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"
                              alt="icon_img_post"
                          />
                      </div>
                      <label for="reference-undefined" class="button-blue flex">
                          <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAABHNCSVQICAgIfAhkiAAAAOpJREFUKFPtko0RwUAQRl0FpAJSASqgA0kFkgpQAakAFVACFaACSkgHqOC8L7PJ3PjpwM28udzut3ub23Utlvd+xTaBAdygcM4d5KuXM9EyNNp3GoolVIa+ssAGMlhDiTAOM3o7RDgeVkpl4+w+hKGRW34LiYxgBlu4W6Yh+1Q21VhfrRr1UwurUdrG9k1YO0Nh8RfmvMdOPYYePK33etvqedTftnVGA9K1rqhDCtD4pRKe+RhBTr/3nDWTChZXE8cSjjmczKExU2AH5iDfkQRJNUaIMzbV974uGBKNXzNvdmViWUplVil15AvPKJPxIobcwwAAAABJRU5ErkJggg=="
                              alt="clip_white"
                          />
                          Adjuntar
                      </label>
                      <input id="reference-undefined" onChange={(e) => {
                          onSelectFile(e, id);
                        }} type="file" label="Avatar" class="input-txt" />
                  </div>
                  <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAALBJREFUKFNjZCAShCYVJTAyMPT/Z2AoXD2vbwFIG5BPGESklDj8//9/P0zlv///E0EGENQM0rhiTs+BsORikOJ4kAFAgz6smtcniFczyKlMjIzzgaoXrJzXlwgzgKDNcI0wt0INgLkEp58xNEINYGRkdAR5AWYehrNxaYQ5FTl4UTSTohHF2aRqhGsmRyNYM7kawZrDk4uBKQ4VYAscbOkQQzOxGjFsJkUj0RkDV9YBABOdfBDwfzKxAAAAAElFTkSuQmCC"
                      alt="edit"
                  />
              </div>
          </div>

          <div class="item-input undefined">
              <label for="name">Nombre comercial de la empresa</label>
              <div class="flex">
                  <input id="namealt" type="text" label="Nombre comercial de la empresa" required="true" class="input-txt" name="name" />
                  <span class="required">(Requerido)</span>
                  <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAALBJREFUKFNjZCAShCYVJTAyMPT/Z2AoXD2vbwFIG5BPGESklDj8//9/P0zlv///E0EGENQM0rhiTs+BsORikOJ4kAFAgz6smtcniFczyKlMjIzzgaoXrJzXlwgzgKDNcI0wt0INgLkEp58xNEINYGRkdAR5AWYehrNxaYQ5FTl4UTSTohHF2aRqhGsmRyNYM7kawZrDk4uBKQ4VYAscbOkQQzOxGjFsJkUj0RkDV9YBABOdfBDwfzKxAAAAAElFTkSuQmCC"
                      alt="edit"
                  />
              </div>
          </div>

          <div>
            {list}
          </div>

          <div>
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
            </div>

        {/* <div className="section-accordion">
          <div className="section-accordion-head" onClick={() => setIsActive(!isActive)}>
            <h3 className="plus-title-left">Ver más campos</h3>
            <h3 className="plus-title-right">{isActive ? '-' : '+'}</h3>
          </div>
          {isActive && 
            <div>
              {list}
            </div>
          }
          {isActive && 
            <div>
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
            </div>
          }
        </div> */}

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
