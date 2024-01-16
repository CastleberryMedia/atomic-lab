import moment from "moment";
import { Icons } from "./icons";
import ReactTooltip from "react-tooltip";

export const URL_IMG = "https://api.atomiclabco.com";

export const TEAM_ROL = [
  {
    id: 5,
    text: "You can see",
  },
  {
    id: 6,
    text: "Can edit",
  },
  {
    id: 7,
    text: "You can comment",
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
    text: "Designer",
  },
];

export const NOTIFICATION_TEXT = (notification) => {
  let noti = "";
  switch (notification.type) {
    case "creation":
      noti = `The <span> ${notification.name_project} </span> project has been <span> created </span>`;
      break;
    case "assign_designer":
      noti = `A designer has been <span> assigned  </span> to the <span> ${notification.name_project} </span> project`;
      break;
    case "finish-revision":
      noti = `A review <span> has been made </span> to the <span> ${notification.name_project} </span> project`;
      break;
    case "upload_last_files":
      noti = `Final files <span> have been uploaded </span> to the <span> ${notification.name_project} </span> project`;
      break;

    default:
      break;
  }

  return noti;
};

export const METHOD_SELECT = [
  "Credit/debit card",
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
      text: "My profile",
      redirect: "profile",
      onClick() {
        redirectTo("profile");
      },
    },
    {
      view: true,
      text: "My brands",
      onClick() {
        redirectTo("brands");
      },
    },
    {
      view: true,
      text: "My attachments",
      onClick() {
        redirectTo("attached");
      },
    },
    {
      view: rol !== 3 ? true : false,
      text: "My team",
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
      text: "My configuration",
      onClick() {
        redirectTo("configuration");
      },
    },
    {
      view: true,
      text: "Help and support",
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
      text: "Log out",
      redirect: "/",
      onClick() {
        localStorage.clear("formProject");
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
    // {
    //   view: true,
    //   id: 1,
    //   id_text: "home",
    //   redirect: "/",
    //   active: ["*"],
    //   tour_title: "Home",
    //   tour_text:
    //     "Here you can see your dashboard or an overview of your active projects, your drafts and your finished projects with the most important aspects.",
    // },
    {
      view: rol === 1 ? true : false,
      id: 1,
      id_text: "add",
      redirect: "/new-project",
      active: ["new-project", "service"],
      tour_title: "Iniciar un Proyecto",
      tour_text:
        "Here you will be able to see the different products and request the one that best suits your requirements.",
    },
    {
      view: true,
      id: 2,
      id_text: "active",
      redirect: "/projects-active",
      active: [
        "projects-active",
        "status-project",
        "reviews",
        "more-info",
        "project-detail",
      ],
      tour_title: "Proyectos Activos",
      tour_text:
        "Here you can view your active projects; see the status and track them, view the latest version, make annotations and much more.",
    },
    {
      view: true,
      id: 3,
      id_text: "finish",
      redirect: "/projects-inactive",
      active: ["projects-inactive"],
      tour_title: "Proyectos Completados",
      tour_text:
        "Here you can view your completed projects. View, share and download your projects.",
    },
    {
      view: true,
      id: 4,
      id_text: "active",
      redirect: "/brands",
      active: ["brands"],
      tour_title: "Marcas",
      tour_text:
        "Here you can view your completed projects. View, share and download your projects.",
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
    label: "Trade name of the company",
    required: true,
    className: "input-txt",
  },
  {
    id: "brand",
    type: "text",
    label: "Brand",
    required: false,
    className: "input-txt",
  },
  {
    id: "nit",
    type: "text",
    label: "NIT/ID CARD",
    required: false,
    className: "input-txt",
  },
  {
    id: "type",
    type: "text",
    label: "Type of company/organization",
    required: false,
    className: "input-txt",
  },
  {
    id: "industry",
    type: "text",
    label: "Industry",
    required: false,
    className: "input-txt",
  },
  {
    id: "web_page",
    type: "text",
    label: "Web page (URL)",
    required: false,
    className: "input-txt",
  },
  {
    label: "Social networks",
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
        label: "Others",
        required: false,
        className: "input-txt",
      },
    ],
  },
  {
    id: "employees",
    type: "number",
    label: "Number of employees",
    required: false,
    className: "input-txt",
  },
  {
    id: "offers",
    label: "What does it offer?",
    className: "input-checkbox",
    options: [
      {
        id: "services",
        type: "checkbox",
        label: "Services",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "products",
        type: "checkbox",
        label: "Products",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "two",
        type: "checkbox",
        label: "Both",
        required: false,
        className: "checkbox-txt",
      },
    ],
  },
  {
    id: "product_services",
    type: "textarea",
    label: "Products/Services",
    required: false,
    className: "input-texarea",
  },
  {
    id: "clients",
    type: "textarea",
    label: "Clients",
    required: false,
    className: "input-texarea",
  },
  {
    id: "keywords_brands",
    type: "textarea",
    label: "Keywords related to the brand",
    required: false,
    className: "input-texarea",
  },
  {
    id: "mission",
    type: "textarea",
    label: "Mission",
    required: false,
    className: "input-texarea",
  },
  {
    id: "view",
    type: "textarea",
    label: "Vision",
    required: false,
    className: "input-texarea",
  },
  {
    id: "value",
    type: "textarea",
    label: "Values",
    required: false,
    className: "input-texarea",
  },
  {
    id: "competitors",
    type: "textarea",
    label: "Competitors",
    required: false,
    className: "input-texarea",
  },
];

export const DESIGNER_LEVEL = {
  none: "None",
  medium: "Medium",
  high: "High",
};

export const DELIVERY_TIME = {
  Express: "Express (1-2 business days)",
  Estandar: "Standard (2-4 business days)",
};

export const DETAIL_PROJECT_DATA_2 = (
  projectValues,
  designers,
  Icons,
  filterProject,
  redirectToBrandForm
) => {
  return [
    { id: 1, label: "Project owner", content: filterProject?.name_user },
    {
      id: 2,
      label: "Designer",
      content: designers.length ? (
        <div className="designers-list">
          {designers.map((member) => (
            <div key={member.name}>{member.name}</div>
          ))}
        </div>
      ) : (
        "Not assigned"
      ),
    },
    {
      id: 3,
      label: "Start date",
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
      label: "Brand",
      content: (
        <div
          className="brand-pointer text-purple"
          onClick={() => redirectToBrandForm(projectValues?.brand_select)}
        >
          {projectValues?.brand_select}
        </div>
      ),
    },
    { id: 5, label: "Type of Project", content: projectValues?.project_type },
    { id: 6, label: "Social network", content: projectValues?.social_network },
    {
      id: 8,
      label: "Color palette",
      content: projectValues?.palete_colors,
    },
    { id: 9, label: "Target Audience", content: projectValues?.public_goal },
    { id: 10, label: "Idea to develop", content: projectValues?.idea_post },
    {
      id: 11,
      label: "References",
      content: projectValues?.references.length
        ? projectValues?.references.map((arr) => (
            <div className="with-icons">
              <a href={arr.name_file} target={"_blank"} rel="noreferrer">
                {Icons("download")}
              </a>
              {arr.text}
            </div>
          ))
        : "No references",
    },

    {
      id: 12,
      label: "Delivery format",
      content: (
        <div>
          <p>{projectValues?.formato_entrega}</p>
          <p>{projectValues?.f_custom}</p>
        </div>
      ),
    },
    {
      id: 13,
      label: "Designer's freedom",
      content: DESIGNER_LEVEL[projectValues?.designer_freedom]
        ? DESIGNER_LEVEL[projectValues?.designer_freedom]
        : projectValues?.designer_freedom,
    },
    {
      id: 14,
      label: "Size",
      content: (
        <div>
          <p>{projectValues?.tamaño || "-"}</p>
          <p>{projectValues?.t_custom}</p>
        </div>
      ),
    },

    {
      id: 15,
      label: "Delivery time",
      content: DELIVERY_TIME[projectValues?.tiempo_entrega],
    },
    {
      id: 16,
      label: "Editable files",
      content: projectValues?.archivos_editables,
    },
    {
      id: 17,
      label: "Revisions",
      content: (
        <div>
          {filterProject?.review} de{" "}
          {projectValues?.revisiones?.replace("To ", "")}
        </div>
      ),
    },
    {
      id: 18,
      label: "Next review date",
      content: filterProject?.review_date || "Not programmed",
    },
    {
      id: 19,
      label: "Base project cost",
      content: projectValues?.costo_base,
    },
    { id: 20, label: "Total cost", content: projectValues?.costo_base },
  ];
};

export const FORM_INPUTS_PROFILE = [
  {
    id: "name",
    type: "text",
    label: "Name(s)",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "last_name",
    type: "text",
    label: "Last name",
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
    label: "Corporate email",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone",
    type: "text",
    label: "Cellphone",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone_corporate",
    type: "text",
    label: "Corporate Phone",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cedula",
    type: "text",
    label: "NIT/ID CARD",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "passwordNew",
    type: "password",
    label: "New password",
    placeholder: "Enter new password",
    required: false,
    className: "input-txt",
    autocomplete: "new-password",
  },
  {
    id: "passwordNew_confirm",
    type: "password",
    label: "Confirm password",
    placeholder: "Enter new password",
    required: false,
    className: "input-txt",
    autocomplete: "new-password",
  },
];

export const FORM_INPUTS = {
  name: {
    type: "text",
    label: "Project name and specifications",
    placeholder:
      "Tip: Include the type of design in the name (logo, post, etc.)",
    required: true,
    className: "input-txt",
  },
  public: {
    type: "text",
    label: "What is your target audience?",
    placeholder:
      "Example. Age (adults, millennials, etc.), gender, occupation, industry/sector, etc., etc.",
    required: false,
    className: "input-texarea",
  },
  palete_colors: {
    type: "text",
    label: "Do you have a color preference or a color palette?",
    placeholder:
      "Add more details about your preferred colors, styles and fonts",
    required: false,
    className: "input-texarea",
  },
  reference: {
    type: "text",
    label: "From this example/reference, what did you like and why?",
    placeholder:
      "Attach style preferences, samples, references, examples, sketches/drafts, web pages, URLs, etc.",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },
  idea: {
    type: "text",
    label: "What is the idea you want to develop and expected impact?",
    placeholder: "",
    required: true,
    className: "input-texarea",
    maxLength: 280,
  },
  image_include: {
    type: "text",
    label: "Image to include",
    placeholder:
      "Do you have any comments about the image you want to include?",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },
  text_include: {
    type: "text",
    label: "Text to include",
    placeholder:
      "Write the text as you want it. If you have it in a file, attach it.",
    required: false,
    className: "input-texarea",
    maxLength: 280,
  },

  reference_add: {
    type: "file",
    label: "Text to include",
    required: false,
    className: "input-texarea",
  },
};

export const FROM_BRAND_TABLES = [
  { id: 1, title: "Brand manual" },
  { id: 2, title: "Logo (in editable format)" },
  { id: 3, title: "Color palette" },
  { id: 4, title: "Typography" },
  { id: 5, title: "Brandboard (style guide)" },
  { id: 6, title: "Other" },
];

export const STATUS_TABLES = (page) => {
  const listContent = [
    { title: "Status", isActive: true },
    { title: "Date and Time", isActive: true },
    { title: "Designer assigned", isActive: true },
    { title: "See project", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const STATUS_TABLES_FLOW = [
  { id: 1, text: "Project Started" },
  { id: 2, text: "Project Assigned" },
  { id: 3, text: "Project Loaded" },
  { id: 4, text: "Proyecto Completed" },
];

export const SUMMARY_OPTIONS = {
  tiempo: {
    options: [
      { text: "Standard", extra_text: "(2-4 working days)", price: 0 },
      { text: "Express", extra_text: "(1-2 working days)", price: 15 },
    ],
  },
  formato: {
    options: [
      { text: "Recommended", price: 0 },
      { text: "Personalized", price: 0 },
    ],
  },
  revisiones: {
    options: [
      { text: "Up to 3", price: 0 },
      { text: "Unlimited", price: 25 },
    ],
  },
  tamaño: {
    options: [
      { text: "Recommended", price: 0 },
      { text: "Personalized", price: 0 },
    ],
  },
  editables: {
    options: [
      { text: "No", price: 0 },
      { text: "Yes", price: 0 },
    ],
  },
};

export const PROJECTS_2 = ({
  rol,
  page,
  type,
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
  updateDateNextReview,
  setModalFinalDesigns,
  modalFinalDesigns,
  setModalFinalComments,
  modalFinalComments,
  modals,
  setModals,
}) => {
  const listContent = [
    {
      title: "Project name",
      isActive: true,
      render: project?.name_project,
      sortable: true,
    },

    {
      title: "Start Date",
      isActive: page === "home" && type === "inactive" ? true : false,
      render: project?.created_at,
    },

    {
      title: "Status",
      isActive: page === "home" ? (type === "active" ? true : false) : true,
      sortable: true,
      subtitle: (
        <div
          className={"view-more pointer"}
          onClick={() =>
            navigate(`/status-project/${project?.id}`, {
              state: { project_id: project?.id },
            })
          }
        >
          See more...
        </div>
      ),
      render: (
        <div
          data-tip={
            STATUS_TABLES_FLOW.filter(
              (flow) => flow.id === parseInt(project?.flow_active)
            )[0]?.text
          }
        >
          {Icons("status_check_" + parseInt(project?.flow_active))}
          <ReactTooltip
            type={"light"}
            place={"bottom"}
            data-for={"status-check"}
          />
        </div>
      ),
    },
    {
      title: "Completion Date",
      isActive: type === "inactive" ? true : false,
      render: project?.finish_at,
    },
    {
      title: "Estimated date of next revision",
      isActive: type === "active" ? true : false,
      field: "review_date",
      icon: null,
      type: rol === 3 || rol === 8 ? "date" : null,
      sortable: true,
      render:
        rol === 3 || rol === 8 ? (
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
      title: "Feedback reviews",
      isActive: type === "active" ? true : false,
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
      title: "My private notes",
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
      title: "Visualize final design",
      isActive: type === "inactive" ? true : false,
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
      title: "Concluding remarks",
      isActive: page !== "home" && type === "inactive" ? true : false,
      render: (
        <div
          className="pointer"
          onClick={() => {
            setModalFinalComments(!modalFinalComments);
            setDataModals({
              ...project,
              project_id: project?.id,
            });
          }}
        >
          {Icons("comments_blue")}
        </div>
      ),
    },

    {
      title: "Final designs",
      isActive: page !== "home" && type === "inactive" ? true : false,
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
      title: "Download",
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
      title: "More Information",
      isActive: page === "home" && type === "active" ? true : false,
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
      title: "Display latest version",
      isActive: page !== "home" && type === "active" ? true : false,
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
      title: "Review",
      isActive: page !== "home" && type === "active" ? true : false,
      render: (
        <div className="flex review">
          <p>
            {project?.review} de{" "}
            {project?.revisiones?.includes("Hasta")
              ? project?.revisiones?.replace("Hasta ", "")
              : "∞"}
          </p>
          <div
            className="pointer"
            onClick={() => {
              setModalReviews(!modalDesignerProject);
              setDataModals(project?.review);
            }}
          >
            {project?.revisiones?.includes("Hasta") && Icons("add_plus")}
          </div>
        </div>
      ),
    },

    {
      title: "Designer",
      isActive: page !== "home" && type === "active" ? true : false,
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
                <p>More information</p>
                {Icons("help_circle")}
              </div>
              <div
                className="menu-float-item flex"
                onClick={() => {
                  setModals({
                    ...modals,
                    infoPDF: true,
                  });
                  setDataModals(project);
                }}
              >
                <p>Share</p>
                {Icons("help_circle")}
              </div>
              <div
                className="menu-float-item flex"
                onClick={() => {
                  setModals({
                    ...modals,
                    invite: true,
                  });
                  setDataModals(project);
                }}
              >
                <p>Invite people</p>
                {Icons("help_circle")}
              </div>
              <div
                className="menu-float-item flex"
                onClick={() => {
                  setModals({
                    ...modals,
                    deleteProject: true,
                  });
                  setDataModals(project);
                }}
              >
                <p>Delete</p>
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
          onClick={() => navigate(`/projects-${type}`)}
        >
          See more...
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
    title: "Social Networks",
    title_id: "social-networks",
    description: "Content shared on social networks",
    base_price: 109,
    price: {
      basic: [
        {
          name: "Base project cost",
          price: 109,
        },
        {
          name: "Delivery time",
          price: 0,
        },
        {
          name: "Delivery Format",
          price: 0,
        },
        {
          name: "Modifications",
          price: 0,
        },
        {
          name: "Size",
          price: 0,
        },
        {
          name: "Editable files",
          price: 0,
        },
      ],
      complete: "$300",
    },
    description_page:
      "Check the specifications and choose what kind of publication you need.",
    specs: [
      {
        id: "1",
        title: "For which social networks?",
        options: [
          "Facebook.",
          "Instagram.",
          "Linkedin.",
          "More coming soon...",
        ],
      },
      {
        id: "2",
        title: "What are we going to deliver?",
        options: [
          "Unique publications created from scratch, in order to have greater visibility and connect with your community generating value.",
        ],
      },
      {
        id: "3",
        title: "What does it include?",
        options: [
          "Post design.",
          "Photos for free license/commercial use.", "Post image/illustration optimized for networks.",
          "Image/illustration of the post optimized for networks.",
          "Layout.",
          "Typographic design.",
        ],
      },
      {
        id: "4",
        title: "What is NOT included?",
        options: [
          "Photographs",
          "Text creation",
          "Content writing",
          "Photographic retouching",
          "Reel and video production",
        ],
      },
      {
        id: "5",
        title: "What do you have to deliver to us?",
        options: [
          "Text content (if applicable).",
          "Photos/images (if applicable).",
          "Styles/examples/references.",
        ],
      },

      {
        id: "6",
        title: "Extras",
        options: ["If you don't have photos we will put them in at an extra price"],
      },
    ],
    publication_type: {
      title: "What type of publication do you want?",
      options: ["Post", "Advertising (Ad)", "Cover", "Story", "Header"],
    },
    social_network: {
      title: "For which social network do you want your design?",
      options: [
        { name: "Facebook", status: "active" },
        { name: "Instagram", status: "active" },
        { name: "Linkedin", status: "active" },
        { name: "Youtube", status: "active" },
        { name: "Twitter", status: "active" },
        { name: "Pinterest", status: "active" },
        { name: "Twitch", status: "active" },
        { name: "Tumblr", status: "active" },
        { name: "Other Which one?", status: "active" },
      ],
    },
  },
  {
    status: "coming-soon",
    title: "Print",
    title_id: "print",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Stationery",
    title_id: "stationery",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Web design",
    title_id: "web-design",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Infographics",
    title_id: "infographics",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Presentations",
    title_id: "presentations",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },

  {
    status: "coming-soon",
    title: "Brand Manual",
    title_id: "brand-manual",
    description: "Content shared on social networks",
    description_page:
      "<p>Un manual de marca (o de identidad) es un documento que recoge los principales elementos gráficos de la marca y explica cómo deben aplicarse visualmente. Tanto online como offline</p><p>Revisa las especificaciones y elige que clase de publicación necesitas</p><p>Los siguientes parámetros aplican para ambos manuales de marca</p> ",
    price: {
      basic: [
        {
          name: "Base project cost",
          price: 100,
        },
        {
          name: "Delivery time",
          price: 0,
        },
        {
          name: "Delivery Format",
          price: 0,
        },
        {
          name: "Modifications",
          price: 0,
        },
        {
          name: "Size",
          price: 0,
        },
        {
          name: "Editable files",
          price: 0,
        },
      ],
      complete: "$300",
    },
    specs: [
      {
        id: "1",
        title: "Which project are you going to use?",
        options: ["SELECT DE BRAND."],
      },
      {
        id: "2",
        title: "What does it include?",
        options: [
          "Design of the manual according to specifications.",
          "Pdf in high resolution.",
        ],
      },
      {
        id: "3",
        title: "What do you have to deliver to us?",
        options: [
          "Editable logo.",
          "Existing information about logo applications.",
        ],
      },
      {
        id: "4",
        title: "What is the scope/objective?",
        options: [
          "You are going to have a brand manual that will allow the company to stand out and drive growth.",
        ],
      },
      {
        id: "5",
        title: "What is NOT included?",
        options: [
          "Text creation.",
          "Photographs.",
          "Final arts of applications.",
        ],
      },
    ],
    types_manuals: [
      {
        title: "Basic identity manual",
        options: [
          "Color CMYK/RGB/Hex",
          "Horizontal and vertical version of the logo",
          "Main and secondary color palette",
          "Typographies",
        ],
        price: 100,
      },
      {
        title: "Manual de identidad completo",
        options: [
          "Color CMYK/RGB/Hex",
          "Horizontal and vertical version of the logo",
          "Main and secondary color palette",
          "Typographies",
          "Planimetry",
          "Reserve areas and minimum sizes",
          "Black and white version",
          "Positive and negative",
          "Incorrect uses",
          "Secondary graphics (icons and other elements)",
        ],
        price: 120,
      },
    ],
  },
  {
    status: "coming-soon",
    title: "Logotype",
    title_id: "logotype",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Others",
    title_id: "others",
    description: "Content shared on social networks",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
];
