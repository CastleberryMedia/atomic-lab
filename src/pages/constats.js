import moment from "moment";
import { Icons } from "./icons";
import ReactTooltip from "react-tooltip";

export const URL_IMG = "https://api.ticvzla.xyz/public/images/";

export const TEAM_ROL = [
  {
    id: 5,
    text: "Puede ver",
  },
  {
    id: 6,
    text: "Puede editar",
  },
  {
    id: 7,
    text: "Puede comentar",
  },
  {
    id: 8,
    text: "Super-admin",
  },
  {
    id: 1,
    text: "Admin",
  },
  {
    id: 3,
    text: "Diseñador",
  },
];

export const NOTIFICATION_TEXT = (notification) => {
  let noti = "";
  switch (notification.type) {
    case "creation":
      noti = `Se ha <span> creado </span> el proyecto <span> ${notification.name_project} </span>`;
      break;
    case "assign_designer":
      noti = `Se ha <span> asignado </span> un diseñador al proyecto <span> ${notification.name_project} </span>`;
      break;
    case "finish-revision":
      noti = `Se ha <span> realizado una revisión </span> al proyecto <span> ${notification.name_project} </span>`;
      break;

    default:
      break;
  }

  return noti;
};

export const METHOD_SELECT = [
  "Tarjeta de crédito/débito",
  "PSE",
  "Paypal",
  "Mercadopago",
];

export const MAIN_SUBMENU = (
  rol,
  redirectTo,
  setIsAuthenticated,
  setModalHelp,
  modalHelp
) => {
  const listContent = [
    {
      view: true,
      text: "Mi perfil",
      redirect: "profile",
      onClick() {
        redirectTo("profile");
      },
    },
    {
      view: true,
      text: "Mis marcas",
      onClick() {
        redirectTo("brands");
      },
    },
    {
      view: true,
      text: "Mis adjuntos",
      onClick() {
        redirectTo("attached");
      },
    },
    {
      view: rol !== 3 ? true : false,
      text: "Mi equipo",
      onClick() {
        redirectTo("team");
      },
    },
    {
      view: true,
      text: "line",
    },
    {
      view: true,
      text: "Mi configuración",
      onClick() {
        redirectTo("configuration");
      },
    },
    {
      view: true,
      text: "Ayuda y soporte",
      onClick() {
        setModalHelp(!modalHelp);
      },
    },
    {
      view: true,
      text: "line",
    },
    {
      view: true,
      text: "Cerrar sesión",
      redirect: "/",
      onClick() {
        sessionStorage.removeItem("atomiclab-user");
        setIsAuthenticated(false);
        redirectTo("/");
      },
    },
  ];

  return listContent.filter((item) => item.view === true);
};

export const MAIN_MENU = (rol) => {
  const listContent = [
    {
      view: true,
      id: 1,
      id_text: "home",
      redirect: "/",
      active: ["*"],
      tour_title: "Inicio",
      tour_text:
        "Aquí podrás ver tu dashboard o un resumen de tus proyectos activos, tus borradores y tus proyectos terminados con los aspectos más importantes.",
    },
    {
      view: rol === 1 ? true : false,
      id: 2,
      id_text: "add",
      redirect: "/new-project",
      active: ["new-project", "service"],
      tour_title: "Iniciar proyecto",
      tour_text:
        "Aquí podrás ver los diferentes productos y solicitar el que más se ajuste a tu requerimiento.",
    },
    {
      view: true,
      id: 3,
      id_text: "active",
      redirect: "/projects-active",
      active: [
        "projects-active",
        "status-project",
        "reviews",
        "more-info",
        "project-detail",
      ],
      tour_title: "Proyectos activos",
      tour_text:
        "Aquí podrás ver tus proyectos que se encuentran activos; ver el estado y hacerle seguimiento, ver la última versión, realizar las anotaciones y mucho más.",
    },
    {
      view: true,
      id: 4,
      id_text: "finish",
      redirect: "/projects-inactive",
      active: ["projects-inactive"],
      tour_title: "Proyectos terminados",
      tour_text:
        "Aquí podrás ver tus proyectos que han finalizado. Visualiza, comparte y descarga tus proyectos.",
    },
  ];

  return listContent.filter((item) => item.view === true);
};

export const MENU_ACTIVE = {
  active_projects: [
    "projects-active",
    "status-project",
    "reviews",
    "more-info",
    "project-detail",
  ],
  add: ["new-project", "service"],
};

export const FORM_INPUTS_BRANDS = [
  {
    id: "url_image",
    type: "file",
    label: "Avatar",
    required: false,
    className: "input-txt",
  },
  {
    id: "name",
    type: "text",
    label: "Nombre comercial de la empresa",
    required: true,
    className: "input-txt",
  },
  {
    id: "brand",
    type: "text",
    label: "Marca",
    required: false,
    className: "input-txt",
  },
  {
    id: "nit",
    type: "text",
    label: "NIT/Cédula",
    required: false,
    className: "input-txt",
  },
  {
    id: "type",
    type: "text",
    label: "Tipo de compañía/organización",
    required: false,
    className: "input-txt",
  },
  {
    id: "industry",
    type: "text",
    label: "Industria",
    required: false,
    className: "input-txt",
  },
  {
    id: "web_page",
    type: "text",
    label: "Página web (URL)",
    required: false,
    className: "input-txt",
  },
  {
    label: "Redes sociales",
    className: "sub",
    options: [
      {
        id: "linkedin",
        type: "text",
        label: "Linkedin",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "youtube",
        type: "text",
        label: "YouTube",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "twitter",
        type: "text",
        label: "Twitter",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "instagram",
        type: "text",
        label: "Instagram",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "facebook",
        type: "text",
        label: "Facebook",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "otros",
        type: "text",
        label: "Otros",
        required: false,
        className: "input-txt",
      },
    ],
  },
  {
    id: "employees",
    type: "number",
    label: "Número de empleados",
    required: false,
    className: "input-txt",
  },
  {
    id: "offers",
    label: "¿Qué ofrece?",
    className: "input-checkbox",
    options: [
      {
        id: "services",
        type: "checkbox",
        label: "Servicios",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "products",
        type: "checkbox",
        label: "Productos",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "two",
        type: "checkbox",
        label: "Ambos",
        required: false,
        className: "checkbox-txt",
      },
    ],
  },
  {
    id: "product_services",
    type: "textarea",
    label: "Productos/Servicios",
    required: false,
    className: "input-texarea",
  },
  {
    id: "clients",
    type: "textarea",
    label: "Clientes",
    required: false,
    className: "input-texarea",
  },
  {
    id: "keywords_brands",
    type: "textarea",
    label: "Palabras clave relacionadas con la marca",
    required: false,
    className: "input-texarea",
  },
  {
    id: "mission",
    type: "textarea",
    label: "Misión",
    required: false,
    className: "input-texarea",
  },
  {
    id: "view",
    type: "textarea",
    label: "Visión",
    required: false,
    className: "input-texarea",
  },
  {
    id: "value",
    type: "textarea",
    label: "Valores",
    required: false,
    className: "input-texarea",
  },
  {
    id: "competitors",
    type: "textarea",
    label: "Competidores",
    required: false,
    className: "input-texarea",
  },
];

export const DESIGNER_LEVEL = {
  none: "Ninguna",
  medium: "Media",
  high: "Mucha",
};

export const DELIVERY_TIME = {
  Express: "Express (1-2 días hábiles)",
  Estandar: "Estándar (2-4 días hábiles)",
};

export const DETAIL_PROJECT_DATA_2 = (
  projectValues,
  designers,
  Icons,
  filterProject,
  redirectToBrandForm
) => {
  return [
    { id: 1, label: "Dueño del proyecto", content: filterProject?.name_user },
    {
      id: 2,
      label: "Diseñador",
      content: designers.length ? (
        <div className="designers-list">
          {designers.map((member) => (
            <div>{member.name}</div>
          ))}
        </div>
      ) : (
        "No asignado"
      ),
    },
    {
      id: 3,
      label: "Fecha de inicio",
      content: (
        <div>
          {moment
            .utc(filterProject?.updated_at)
            .local()
            .format("YYYY-MM-DD HH:mm:ss")}
        </div>
      ),
    },
    {
      id: 4,
      label: "Marca",
      content: (
        <div
          className="brand-pointer text-purple"
          onClick={() => redirectToBrandForm(projectValues?.brand_select)}
        >
          {projectValues?.brand_select}
        </div>
      ),
    },
    { id: 5, label: "Tipo de Proyecto", content: projectValues?.type_post },
    { id: 6, label: "Red social", content: projectValues?.social_network },
    {
      id: 7,
      label: "Tipo de publicación",
      content: projectValues?.type_publication,
    },
    {
      id: 8,
      label: "Paleta de colores",
      content: projectValues?.palete_colors,
    },
    { id: 9, label: "Publico objetivo", content: projectValues?.public_goal },
    { id: 10, label: "Idea a desarollar", content: projectValues?.idea_post },
    {
      id: 11,
      label: "Referencias",
      content: projectValues?.references.length
        ? projectValues?.references.map((arr) => (
            <div className="with-icons">
              <a href={arr.name_file} target={"_blank"} rel="noreferrer">
                {Icons("download")}
              </a>
              {arr.text}
            </div>
          ))
        : "Sin referencias",
    },

    {
      id: 12,
      label: "Formato de entrega",
      content: (
        <div>
          <p>{projectValues?.formato_entrega}</p>
          <p>{projectValues?.f_custom}</p>
        </div>
      ),
    },
    {
      id: 13,
      label: "Libertad del diseñador",
      content: DESIGNER_LEVEL[projectValues?.designer_freedom]
        ? DESIGNER_LEVEL[projectValues?.designer_freedom]
        : projectValues?.designer_freedom,
    },
    {
      id: 14,
      label: "Tamaño",
      content: (
        <div>
          <p>{projectValues?.tamaño || "-"}</p>
          <p>{projectValues?.t_custom}</p>
        </div>
      ),
    },

    {
      id: 15,
      label: "Tiempo de entrega",
      content: DELIVERY_TIME[projectValues?.tiempo_entrega],
    },
    {
      id: 16,
      label: "Archivos editables",
      content: projectValues?.archivos_editables,
    },
    {
      id: 17,
      label: "Revisiones",
      content: (
        <div>
          {filterProject?.review} de{" "}
          {projectValues?.revisiones?.replace("Hasta ", "")}
        </div>
      ),
    },
    {
      id: 18,
      label: "Fecha próx. revisión",
      content: filterProject?.review_date || "No programada",
    },
    {
      id: 19,
      label: "Costo base del proyecto",
      content: projectValues?.costo_base,
    },
    { id: 20, label: "Costo total", content: projectValues?.costo_base },
  ];
};

export const FORM_INPUTS_PROFILE = [
  {
    id: "name",
    type: "text",
    label: "Nombre(s)",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "last_name",
    type: "text",
    label: "Apellido",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "email",
    type: "text",
    label: "Email",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "email_corporate",
    type: "text",
    label: "Email corporativo",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone",
    type: "text",
    label: "Celular",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone_corporate",
    type: "text",
    label: "Teléfono corporativo",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cedula",
    type: "text",
    label: "Cédula",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "passwordNew",
    type: "password",
    label: "Nueva contraseña",
    placeholder: "Ingrese nueva contraseña",
    required: false,
    className: "input-txt",
    autocomplete: "new-password",
  },
  {
    id: "passwordNew_confirm",
    type: "password",
    label: "Confirmar contraseña",
    placeholder: "Ingrese nueva contraseña",
    required: false,
    className: "input-txt",
    autocomplete: "new-password",
  },
];

export const FORM_INPUTS = {
  name: {
    type: "text",
    label: "¿Qué nombre le quieres dar al proyecto?",
    placeholder:
      "Tip: Incluye el tipo de diseño en el nombre (logo, post, etc.)",
    required: true,
    className: "input-txt",
  },
  public: {
    type: "text",
    label: "¿Cual es tu público objetivo?",
    placeholder:
      "Ej. Edad (adultos, millenials, etc.), género, ocupación, industria/sector, etc.",
    required: false,
    className: "input-texarea",
  },
  palete_colors: {
    type: "text",
    label: "¿Tienes preferencia de colores o una paleta de colores?",
    placeholder:
      "Agrega más detalles sobre tus colores, estilos y fuentes preferidas",
    required: false,
    className: "input-texarea",
  },
  reference: {
    type: "text",
    label: "De éste ejemplo/referencia, ¿Qué fue lo que te gustó y por qué?",
    placeholder:
      "Adjunta preferencias de estilos, muestras, referencias, ejemplos, bosquejos/borradores, páginas web, URLs, etc.",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },
  idea: {
    type: "text",
    label: "¿Cuál es la idea que quieres desarrollar?",
    placeholder: "",
    required: true,
    className: "input-texarea",
    maxLength: 280,
  },
  image_include: {
    type: "text",
    label: "Imagen a incluir",
    placeholder:
      "¿Tienes algún comentario sobre la imagen que quieres incluir?",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },
  text_include: {
    type: "text",
    label: "Texto a incluir",
    placeholder:
      "Escribe el texto tal cual como lo quieres. En caso que lo tengas en un archivo, adjúntalo",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },

  reference_add: {
    type: "file",
    label: "Texto a incluir",
    required: false,
    className: "input-texarea",
  },
};

export const FROM_BRAND_TABLES = [
  { id: 1, title: "Manual de marca" },
  { id: 2, title: "Logo (en formato editable)" },
  { id: 3, title: "Paleta de colores" },
  { id: 4, title: "Tipografía" },
  { id: 5, title: "Brandboard (guía de estilo)" },
  { id: 6, title: "Otros" },
];

export const STATUS_TABLES = (page) => {
  const listContent = [
    { title: "Estado", isActive: true },
    { title: "Fecha y Hora", isActive: true },
    { title: "", isActive: true },
    { title: "Ver proyecto", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const STATUS_TABLES_FLOW = [
  { id: 1, text: "Proyecto Iniciado" },
  { id: 2, text: "Proyecto Asignado" },
  { id: 3, text: "Proyecto Cargado" },
  { id: 4, text: "Proyecto Finalizado" },
];

export const SUMMARY_OPTIONS = {
  tiempo: {
    options: [
      { text: "Estándar", extra_text: "(2-4 días hábiles)", price: 0 },
      { text: "Express", extra_text: "(1-2 días hábiles)", price: 15 },
    ],
  },
  formato: {
    options: [
      { text: "Recomendado", price: 0 },
      { text: "Personalizado", price: 0 },
    ],
  },
  revisiones: {
    options: [
      { text: "Hasta 3", price: 0 },
      { text: "Ilimitado", price: 25 },
    ],
  },
  tamaño: {
    options: [
      { text: "Recomendado", price: 0 },
      { text: "Personalizado", price: 0 },
    ],
  },
  editables: {
    options: [
      { text: "No", price: 0 },
      { text: "Si", price: 0 },
    ],
  },
};

export const PROJECTS_2 = (
  rol_id,
  page,
  typeFin,
  navigate,
  project,
  modalDesignerProject,
  setModalDesignerProject,
  setDataModals,
  modalZoomImg,
  setModalZoomImg,
  getLastVersion,
  setModalPrivateNotes,
  modalPrivateNotes,
  setMenuFloat,
  menuFloat,
  setModalReviews,
  projectValues,
  flows,
  updateDateNextReview,
  setModalFinalDesigns,
  modalFinalDesigns
) => {
  const listContent = [
    {
      title: "Nombre del proyecto",
      isActive: true,
      render: projectValues?.name_project,
    },

    {
      title: "Fecha Inicio",
      isActive: page === "home" && typeFin === "inactive" ? true : false,
      render: projectValues?.created_at,
    },

    {
      title: "Estado",
      isActive: page === "home" ? (typeFin === "active" ? true : false) : true,
      subtitle: (
        <div
          className={"view-more pointer"}
          onClick={() =>
            navigate(`/status-project/${project?.id}`, {
              state: { project_id: project?.id },
            })
          }
        >
          Ver más...
        </div>
      ),
      render: (
        <div
          data-tip={
            STATUS_TABLES_FLOW.filter(
              (flow) =>
                flow.id ===
                parseInt(
                  Array.isArray(flows) &&
                    flows.filter((flow) => flow.status === "active")[0].id
                )
            )[0]?.text
          }
        >
          {Icons(
            "status_check_" +
              parseInt(
                Array.isArray(flows) &&
                  flows.filter((flow) => flow.status === "active")[0].id
              )
          )}
          <ReactTooltip
            type={"light"}
            place={"bottom"}
            data-for={"status-check"}
          />
        </div>
      ),
    },
    {
      title: "Fecha Finalización",
      isActive: typeFin === "inactive" ? true : false,
      render: projectValues?.finish_at,
    },
    {
      title: "Fecha estimada próx. revisión",
      isActive: typeFin === "active" ? true : false,
      field: "review_date",
      icon: null,
      type: rol_id === 3 || rol_id === 8 ? "date" : null,
      render:
        rol_id === 3 || rol_id === 8 ? (
          <input
            className="select-date"
            type="date"
            name=""
            id=""
            value={project?.review_date}
            onChange={(e) =>
              updateDateNextReview(
                project?.id,
                moment(e.target.value).format("YYYY-MM-DD")
              )
            }
          />
        ) : (
          project?.review_date
        ),
    },
    {
      title: "Retroalimentación revisiones",
      isActive: typeFin === "active" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => navigate(`/reviews/${project?.id}`)}
        >
          {Icons("review")}
        </div>
      ),
    },
    {
      title: "Mis notas privadas",
      isActive: page === "home" ? false : true,
      render: (
        <div
          className="pointer"
          onClick={() => {
            setModalPrivateNotes(!modalPrivateNotes);
            setDataModals({
              project_id: project?.id,
              notes: project?.notes,
            });
          }}
        >
          {Icons("private_notes")}
        </div>
      ),
    },

    {
      title: "Visualizar diseño final",
      isActive: typeFin === "inactive" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => {
            setModalZoomImg(!modalZoomImg);
            setDataModals({
              type: "normal",
              img: getLastVersion && getLastVersion(project),
            });
          }}
        >
          {Icons("last_version")}
        </div>
      ),
    },

    {
      title: "Comentarios finales",
      isActive: page !== "home" && typeFin === "inactive" ? true : false,
      render: <div className="pointer">{Icons("comments_blue")}</div>,
    },

    {
      title: "Diseños finales",
      isActive: page !== "home" && typeFin === "inactive" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => {
            setModalFinalDesigns(!modalFinalDesigns);
            setDataModals({
              project_id: project?.id,
            });
          }}
        >
          {Icons("comments_blue")}
        </div>
      ),
    },

    /*   {
      title: "Descargar",
      isActive: typeFin === "inactive" ? true : false,
      render: (
        <div className="pointer">
          <a
            rel="noreferrer"
            download="custom-filename.jpg"
            target="_blank"
            href={getLastVersion && getLastVersion(project)}
            title="ImageName"
          >
            {Icons("download")}
          </a>
        </div>
      ),
    }, */
    {
      title: "Más Información",
      isActive: page === "home" && typeFin === "active" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => {
            navigate(`/project-detail/${project?.id}`);
          }}
        >
          {Icons("add_plus")}
        </div>
      ),
    },
    {
      title: "Visualizar última versión",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      render: getLastVersion && getLastVersion(project) && (
        <div
          className="pointer"
          onClick={() => {
            setModalZoomImg(!modalZoomImg);
            setDataModals({
              type: "normal",
              img: getLastVersion(project),
            });
          }}
        >
          {Icons("last_version")}
        </div>
      ),
    },
    {
      title: "Revisión",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      render: (
        <div className="flex review">
          <p>
            {project?.review} de{" "}
            {projectValues?.revisiones?.includes("Hasta")
              ? projectValues?.revisiones?.replace("Hasta ", "")
              : "∞"}
          </p>
          <div
            className="pointer"
            onClick={() => {
              setModalReviews(!modalDesignerProject);
              setDataModals(project?.review);
            }}
          >
            {projectValues?.revisiones?.includes("Hasta") && Icons("add_plus")}
          </div>
        </div>
      ),
    },

    {
      title: "Diseñador",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => {
            setModalDesignerProject(!modalDesignerProject);
            setDataModals({ project_id: project?.id });
          }}
        >
          {Icons("review")}
        </div>
      ),
    },
    {
      title: "",
      isActive: page === "home" ? false : true,
      render: (
        <div className="points-menu pointer">
          <div
            onClick={() =>
              setMenuFloat(menuFloat === project?.id ? "" : project?.id)
            }
          >
            {Icons("menu_points")}
          </div>
          {menuFloat === project?.id && (
            <div className={`menu-float ${project?.id} `}>
              <div
                className="menu-float-item flex"
                onClick={() => navigate(`/project-detail/${project?.id}`)}
              >
                <p>Más información</p>
                {Icons("help_circle")}
              </div>
              <div className="menu-float-item flex">
                <p>Compartir</p>
                {Icons("help_circle")}
              </div>
              <div className="menu-float-item flex">
                <p>Invitar personas</p>
                {Icons("help_circle")}
              </div>
              <div className="menu-float-item flex">
                <p>Eliminar</p>
                {Icons("help_circle")}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "",
      isActive: page === "home" ? true : false,
      render: <div></div>,
      subtitle: (
        <div
          className={"view-more pointer"}
          onClick={() => navigate(`/projects-${typeFin}`)}
        >
          Ver más...
        </div>
      ),
    },
  ];

  return listContent.filter((item) => item.isActive === true);
};

export const TYPE_PUBLICATION_DATA = {
  Post: {
    options: ["Post", "Carrusel"],
  },
  "Publicidad (Ad)": { options: ["Publicidad (Ad)", "Link", "Carrusel"] },
  Cover: { options: ["Cover", "Page", "Event", "Group", "Video", "Highlight"] },
  Story: { options: ["Post", "Video"] },
  Header: { options: ["Header"] },
};

export const SERVICES_DATA = [
  {
    status: "active",
    title: "Redes sociales",
    title_id: "redes-sociales",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: [
        {
          name: "Costo base del proyecto",
          price: 100,
        },
        {
          name: "Tiempo de entrega",
          price: 0,
        },
        {
          name: "Formato de entrega",
          price: 0,
        },
        {
          name: "Modificaciones",
          price: 0,
        },
        {
          name: "Tamaño",
          price: 0,
        },
        {
          name: "Archivos editables",
          price: 0,
        },
      ],
      complete: "$300",
    },
    description_page:
      "Revisa las especificaciones y elige que clase de publicación necesitas",
    specs: [
      {
        id: "1",
        title: "¿Para cuales redes sociales?",
        options: [
          "Facebook.",
          "Instagram.",
          "Linkedin.",
          "Próximamente más...",
        ],
      },
      {
        id: "2",
        title: "¿Qué te vamos a entregar?",
        options: [
          "Publicaciones únicas creadas desde cero, con el fin de tener mayor visibilidad y que puedas conectar con tu comunidad generando valor",
        ],
      },
      {
        id: "3",
        title: "¿Qué Incluye?",
        options: [
          "Diseño de post.",
          "Fotos de libre licencia/uso comercial.",
          "Imagen/ilustración de la publicación optimizada para redes.",
          "Diagramación.",
          "Diseño tipográfico",
        ],
      },
      {
        id: "4",
        title: "¿Qué NO incluye?",
        options: [
          "Fotografias",
          "Creacióm de textos",
          "Redaccióm de contenido",
          "Retoque fotográfico",
          "Realización de reels y videos",
        ],
      },
      {
        id: "5",
        title: "¿Qué nos tienes que entregar?",
        options: [
          "Contenido del texto (si aplica).",
          "Fotos/imágenes (si aplica).",
          "Estilos/ejemplos/referencias.",
        ],
      },

      {
        id: "6",
        title: "Extras",
        options: ["Si no tienes fotos nosotros las ponemos a un precio extra"],
      },
    ],
    publication_type: {
      title: "¿Qué tipo de publicación quieres?",
      options: ["Post", "Publicidad (Ad)", "Cover", "Story", "Header"],
    },
    social_network: {
      title: "¿Para cual red social quieres tu diseño?",
      options: [
        { name: "Facebook", status: "active" },
        { name: "Instagram", status: "active" },
        { name: "Linkedin", status: "active" },
        { name: "Youtube", status: "active" },
        { name: "Twitter", status: "active" },
        { name: "Pinterest", status: "active" },
        { name: "Twitch", status: "active" },
        { name: "Tumblr", status: "active" },
        { name: "Otra ¿Cuál?", status: "inactive" },
      ],
    },
  },
  {
    status: "coming-soon",
    title: "Impresion",
    title_id: "impresion",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Papeleria",
    title_id: "papeleria",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Diseño web",
    title_id: "diseño-web",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Infografias",
    title_id: "infografias",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Presentaciones",
    title_id: "presentaciones",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },

  {
    status: "coming-soon",
    title: "Manual de marca",
    title_id: "manual-de-marca",
    description: "Contenido compartido en las redes sociales",
    description_page:
      "<p>Un manual de marca (o de identidad) es un documento que recoge los principales elementos gráficos de la marca y explica cómo deben aplicarse visualmente. Tanto online como offline</p><p>Revisa las especificaciones y elige que clase de publicación necesitas</p><p>Los siguientes parámetros aplican para ambos manuales de marca</p> ",
    price: {
      basic: [
        {
          name: "Costo base del proyecto",
          price: 100,
        },
        {
          name: "Tiempo de entrega",
          price: 0,
        },
        {
          name: "Formato de entrega",
          price: 0,
        },
        {
          name: "Modificaciones",
          price: 0,
        },
        {
          name: "Tamaño",
          price: 0,
        },
        {
          name: "Archivos editables",
          price: 0,
        },
      ],
      complete: "$300",
    },
    specs: [
      {
        id: "1",
        title: "¿Cuál marca vas a utilizar?",
        options: ["SELECT DE BRAND."],
      },
      {
        id: "2",
        title: "¿Qué incluye?",
        options: [
          "Diseño del manual según especificaciones.",
          "Pdf en alta resolución.",
        ],
      },
      {
        id: "3",
        title: "¿Qué nos tienes que entregar?",
        options: [
          "Logotipo editable.",
          "Información existente sobre aplicaciones del logotipo.",
        ],
      },
      {
        id: "4",
        title: "¿Cuál es el alcance/objetivo?",
        options: [
          "Vas a contar con un manual de marca que permitirá a la compañía destacarse e impulsar su crecimiento.",
        ],
      },
      {
        id: "5",
        title: "¿Qué NO incluye?",
        options: [
          "Creación de textos.",
          "Fotografías.",
          "Artes finales de aplicaciones.",
        ],
      },
    ],
    types_manuals: [
      {
        title: "Manual de identidad básico",
        options: [
          "Color CMYK/RGB/Hex",
          "Version horizontal y vertical del logotipo",
          "Paleta de color principal y secundaria",
          "Tipografias",
        ],
        price: 100,
      },
      {
        title: "Manual de identidad completo",
        options: [
          "Color CMYK/RGB/Hex",
          "Version horizontal y vertical del logotipo",
          "Paleta de color principal y secundaria",
          "Tipografias",
          "Planimetria",
          "Áreas de reserva y tamaños minimos",
          "Versión blanco y negro",
          "Positivo y negativo",
          "Usos incorrectos",
          "Gráfica secundaria (iconos y otros elementos)",
        ],
        price: 120,
      },
    ],
  },
  {
    status: "coming-soon",
    title: "Logotipo",
    title_id: "logotipo",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Otros",
    title_id: "otros",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
];
