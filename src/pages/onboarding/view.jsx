import React, { useState } from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  redirectTo,
  setOnboarding,
  nameOrganization,
  setNameOrganization,
  urlOrganization,
  setUrlOrganization,
  movil,
  setMovil,
  updateDataOnboarding,
}) {
  const [step, setStep] = useState(0);

  return (
    <div className="onboarding">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            {step === 0 && (
              <>
                <h2>¡Bienvenido! </h2>
                <h3>Configuremos tu perfil</h3>
                <div className="content">
                  <div className="item">
                    <div className="item-img">{Icons("time_circle")}</div>
                    <p>
                      Solo tomará un momento y hará que la experiencia con
                      nosotros sea la mejor posible.
                    </p>
                  </div>
                  <div className="item">
                    <div className="item-img"> {Icons("brand_circle")}</div>
                    <p>
                      En el caso que tu empresa tenga más de 1 (una) marca,
                      podrás añadir otras después en "Mis Marcas".
                    </p>
                  </div>
                  <div className="item">
                    <div className="item-img"> {Icons("profile_circle")}</div>
                    <p>
                      Si lo deseas puedes completarlo más adelante en “Mi
                      perfil”. Esto nos permitirá conocer mejor el contexto de
                      la organización.
                    </p>
                  </div>
                </div>

                <div className="buttons">
                  <button
                    className="button-blue"
                    onClick={() => {
                      setOnboarding(false);
                      redirectTo("/");
                    }}
                  >
                    Configurar déspues
                  </button>
                  <button
                    className="button-blue"
                    onClick={() => setStep(step + 1)}
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <h2>
                  1. ¿Cuál es el nombre comercial de tu empresa u organización?
                </h2>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Escribe aquí tu respuesta"
                  className="input-txt-onboarding"
                  onChange={(e) => setNameOrganization(e.target.value)}
                />

                {nameOrganization && (
                  <button
                    className="button-blue"
                    onClick={() => setStep(step + 1)}
                  >
                    Continuar
                  </button>
                )}
              </>
            )}
            {step === 2 && (
              <>
                <h2>2. ¿Cuál es la página web de tu empresa u organización?</h2>
                <p className="text-desc">
                  En caso de no tener deja el espacio en blanco y continúa.
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="https://"
                  className="input-txt-onboarding"
                  onChange={(e) => setUrlOrganization(e.target.value)}
                />
                <button
                  className="button-blue"
                  onClick={() => setStep(step + 1)}
                >
                  Continuar
                </button>
              </>
            )}
            {step === 3 && (
              <>
                <h2>
                  3. ¿Cuál es tu número de celular? (Colocar indicativo del
                  país)
                </h2>
                <p className="text-desc">
                  Si la compañía/organización tiene teléfono/celular, escríbelo
                  en otro párrafo.
                </p>
                <p className="text-desc">
                  Esto nos permitirá: 1) Recuperar el acceso a tu cuenta, en
                  caso que tengas problemas para iniciar sesión. 2) Ponernos en
                  contacto si hay algún problema..
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Escribe aquí tu respuesta"
                  className="input-txt-onboarding"
                  onChange={(e) => setMovil(e.target.value)}
                />
                {/*  <p>Pulsa Shift + Enter para añadir otro párrafo</p> */}
                {movil && (
                  <button
                    className="button-blue"
                    onClick={() => updateDataOnboarding()}
                  >
                    Aceptar
                  </button>
                )}
              </>
            )}
          </div>

          {step >= 1 && (
            <div className="footer">
              <p>Step {step} of 3</p>

              <div className="buttons">
                <button
                  className="button-blue"
                  onClick={() => {
                    setOnboarding(false);
                    redirectTo("/");
                  }}
                >
                  Configurar déspues
                </button>
                <button
                  className="button-blue"
                  onClick={() => setStep(step - 1)}
                >
                  Atrás
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
