import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" className="modal help">
      <div className="modal-content">
        <h3>Ayuda</h3>

        <p>
          Si tienes problemas o dudas solicita ayuda por medio de alguna de las
          siguientes opciones:
        </p>

        <div className="info">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("tel")}</div>
                    <p className="text-blue">Teléfono</p>
                    <p>+1 519 778 1224</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("email")} </div>
                    <p className="text-blue">Email</p>
                    <p>info@atomiclabco.com</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("whatsapp")} </div>
                    <p className="text-blue">WhatsApp</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=15197781224"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +1 519 778 1224
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("video_call")} </div>
                    <p className="button-gray">Videollamada</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.atomiclabco.com/#FAQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex">
                      <div className="icon">{Icons("idea")} </div>
                      <p className="button-blue">FAQ - Preguntas Frecuentes</p>
                    </div>
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.atomiclabco.com/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex">
                      <div className="icon">{Icons("blog")} </div>
                      <p className="button-gray">Blog</p>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("form")} </div>
                    <p className="text-blue">Formulario</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("chat")} </div>
                    <p className="button-gray">Chat</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <label htmlFor="questions">
            ¿Cuáles son tus dudas?{Icons("help_circle")}
          </label>
          <p>
            <textarea
              className="input-texarea"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </p>
        </div>

        <section className="footer-modal">
          <section className="section-buttons flex">
            <div className="icons">
              <a
                href="https://www.linkedin.com/company/atomiclab"
                target={"_blank"}
                rel="noreferrer"
              >
                {Icons("linkedin_black")}
              </a>

              {Icons("twitter_black")}
              {Icons("facebook_black")}
              {Icons("instagram_black")}
            </div>

            <div className="button">Enviar</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
