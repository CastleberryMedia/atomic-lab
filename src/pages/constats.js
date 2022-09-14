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

export const USER_DATA = {
  user: {
    nickname: "JArgoty",
    name: "Jhonatan",
    last_name: "Argoty",
    email: "jhonatanargoty@gmail.com",
    email_corporate: "jhonatanargoty@castleberry.com.co",
    cell_phone: "+573128755944",
    cell_phone_corporate: "+575555555",
    id: "10305554444",
  },
  credits: 1000,
  onboarding: false, //false - NO Mostrar onboarding
  tour: false, //false - NO Mostrar Tour
  brands: [
    {
      id: "1",
      name: "Pepsi",
      value: "pepsi",
      predeterminate: true,
      logo: "https://i.postimg.cc/5yr0XCdG/pepsi.png",
      name_comercial: "Pepsi",
      brand: "Pepsi brand",
      nit: "12345554-0",
      type: "Gaseosas",
      industry: "Alimentos",
      web_page: "https://pepsi.com",
      employees: 1000,
      product_services: "Alimentos, bebidas...",
      clients: "Carulla, Carrefour, Metro...",
      keywords_brands: "Gaseosas, Cocacola, refrescos, cine",
      mission: "Misión de Pepsi",
      view: "Visión de Pepsi",
      values: "Valores de Pepsi",
      competitors: "Cocacola, Bigcola, Bavaria",
      linkedin: "https://linkedin.com/pepsi",
      youtube: "https://youtube.com/pepsi",
      twitter: "https://twitter.com/pepsi",
      instagram: "https://instagram.com/pepsi",
      facebook: "https://facebook.com/pepsi",
      otros: "https://x.com/pepsi",
      offers: "products", //services - products - two
    },
    {
      id: "2",
      name: "Coca Cola",
      value: "cocacola",
      predeterminate: false,
      logo: "https://i.postimg.cc/cH85qq1n/cocacola.png",
      name_comercial: "Coca Cola",
      brand: "Coca Cola co brand",
      nit: "12345554-0",
      type: "Gaseosas",
      industry: "Alimentos",
      web_page: "https://cocacola.com",
      employees: 1000,
      product_services: "Alimentos, bebidas...",
      clients: "Carulla, Carrefour, Metro...",
      keywords_brands: "Gaseosas, Cocacola, refrescos, cine",
      mission: "Misión de cocacola",
      view: "Visión de cocacola",
      values: "Valores de cocacola",
      competitors: "Cocacola, Bigcola, Bavaria",
      linkedin: "https://linkedin.com/cocacola",
      youtube: "https://youtube.com/cocacola",
      twitter: "https://twitter.com/cocacola",
      instagram: "https://instagram.com/cocacola",
      facebook: "https://facebook.com/cocacola",
      otros: "https://x.com/cocacola",
      offers: "two", //services - products - two
    },
  ],
  team: [
    {
      id: 1,
      name: "Daniel",
      email: "d@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
    {
      id: 2,
      name: "Daniel1",
      email: "d1@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
    {
      id: 3,
      name: "Daniel2",
      email: "d2@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
  ],
  attached: [
    {
      id: 1,
      name: "logo.jpg",
      type: "jpg",
      size: "100mb",
    },
    {
      id: 2,
      name: "logo2.jpg",
      type: "jpg",
      size: "200mb",
    },
    {
      id: 3,
      name: "logo3.jpg",
      type: "jpg",
      size: "300mb",
    },
  ],
  active_projects: [
    {
      id: 123,
      name: "Manual de marca #1",
      status: 1,
      date_next_review: "2021-01-30",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "https://i.postimg.cc/g2GCWRdY/1A.png",
      delivery_time: "2022-04-05",
      delivery_format: "PDF + PNG",
      size: "1GB",
      editable_files: true,
      print: false,
      review: 2,
      status_test: [
        {
          title: "Tu proyecto ha sido confirmado e iniciado",
          date: "2022-01-18:10:18",
        },
        {
          title: "Tu proyecto ha sido asignado a un gerente de cuentas",
          date: "2022-01-18:10:18",
        },
        {
          title:
            "Tu proyecto ha sido asignado a un diseñador y está en proceso de diseño",
          date: "2022-01-18:10:18",
        },
        {
          title: "La versión 1 de tu proyecto está lista",
          date: "2022-01-18:10:18",
        },
        { title: "Tu proyecto fue finalizado", date: "2022-01-18:10:18" },
        {
          title: "Tu proyecto está listo para ser descargado",
          date: "2022-01-18:10:18",
        },
      ],
      review_data: [
        {
          version: 1,
          version_data: [
            { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
          ],
        },
        {
          version: 2,
          version_data: [
            { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
            { id: "1B", content: "https://i.postimg.cc/nr8Ww90f/1B.png" },
          ],
        },
        {
          version: 3,
          version_data: [
            { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
            { id: "1B", content: "https://i.postimg.cc/nr8Ww90f/1B.png" },
            { id: "1C", content: "https://i.postimg.cc/bYbWSLwy/1C.png" },
          ],
        },
        {
          version: 4,
          version_data: [
            { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
            { id: "1B", content: "https://i.postimg.cc/nr8Ww90f/1B.png" },
            { id: "1C", content: "https://i.postimg.cc/bYbWSLwy/1C.png" },
            { id: "1D", content: "https://i.postimg.cc/bYbWSLwy/1C.png" },
          ],
        },
      ],
      /* review_data: {
        version: 1,
        versions: [
          { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
          { id: "1B", content: "https://i.postimg.cc/nr8Ww90f/1B.png" },
          { id: "1C", content: "https://i.postimg.cc/bYbWSLwy/1C.png" },
        ],
      }, */
    },

    {
      id: 321,
      name: "Manual de marca #2",
      status: 2,
      date_next_review: "2021-01-30",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "https://i.postimg.cc/nr8Ww90f/1B.png",
      delivery_time: "2022-04-05",
      delivery_format: "PDF + PNG",
      size: "1GB",
      editable_files: true,
      print: false,
      review: 2,
      status_test: [
        {
          title: "Tu proyecto ha sido confirmado e iniciado",
          date: "2022-01-18:10:18",
        },
        {
          title: "Tu proyecto ha sido asignado a un gerente de cuentas",
          date: "2022-01-18:10:18",
        },
        {
          title:
            "Tu proyecto ha sido asignado a un diseñador y está en proceso de diseño",
          date: "2022-01-18:10:18",
        },
        {
          title: "La versión 1 de tu proyecto está lista",
          date: "2022-01-18:10:18",
        },
        { title: "Tu proyecto fue finalizado", date: "2022-01-18:10:18" },
        {
          title: "Tu proyecto está listo para ser descargado",
          date: "2022-01-18:10:18",
        },
      ],
      review_data: {
        version: 1,
        versions: [
          { id: "1A", content: "https://i.postimg.cc/g2GCWRdY/1A.png" },
          /*    { id: "1B", content: "https://i.postimg.cc/nr8Ww90f/1B.png" },
          { id: "1C", content: "https://i.postimg.cc/bYbWSLwy/1C.png" }, */
        ],
      },
    },
  ],
  finish_projects: [
    {
      id: 123,
      name: "Manual de marca #1",
      status: 3,
      date_finish: "2021-10-10",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "https://i.postimg.cc/nr8Ww90f/1B.png",
    },
    {
      id: 321,
      name: "Manual de marca #2",
      status: 3,
      date_finish: "2021-10-10",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "https://i.postimg.cc/nr8Ww90f/1B.png",
    },
  ],
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

export const DETAIL_PROJECT_DATA_2 = (
  projectValues,
  designers,
  Icons,
  filterProject
) => {
  return [
    { id: 1, label: "Dueño del proyecto", content: "" },
    {
      id: 2,
      label: "Diseñador",
      content: designers.length
        ? designers.map((member) => <div>{member.name}</div>)
        : "No asignado",
    },
    { id: 3, label: "Fecha de inicio", content: filterProject?.updated_at },
    { id: 4, label: "Marca", content: projectValues?.brand_select },
    { id: 5, label: "Tipo de Proyecto", content: projectValues?.type_post },
    { id: 6, label: "Red social", content: projectValues?.social_network },
    {
      id: 7,
      label: "Tipo de publicación",
      content: projectValues.type_publication,
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
              <a href={arr.name_file}>{Icons("download")}</a>
              {arr.text}
            </div>
          ))
        : "Sin referencias",
    },
    { id: 12, label: "Texto a incluir", content: "" },
    { id: 13, label: "Imagen a incluir", content: "" },
    {
      id: 14,
      label: "Formato de entrega",
      content: projectValues?.formato_entrega,
    },
    {
      id: 15,
      label: "Libertad del diseñador",
      content: projectValues?.designer_freedom,
    },
    {
      id: 16,
      label: "Tamaño",
      content: (
        <div>
          <p>{projectValues?.tamaño || "-"}</p>
          <p>{projectValues?.t_custom && " - " + projectValues?.t_custom}</p>
        </div>
      ),
    },

    {
      id: 17,
      label: "Tiempo de entrega",
      content: projectValues?.tiempo_entrega,
    },
    {
      id: 18,
      label: "Archivos editables",
      content: projectValues?.archivos_editables,
    },
    { id: 19, label: "Revisiones", content: "" },
    {
      id: 20,
      label: "Fecha próx. revisión",
      content: filterProject?.review_date || "No programada",
    },
    {
      id: 21,
      label: "Costo base del proyecto",
      content: projectValues?.costo_base,
    },
    { id: 22, label: "Costo total", content: projectValues?.costo_base },
  ];
};

export const DETAIL_PROJECT_DATA = {
  created_by: "Dueño del proyecto",
  brand_select: "marca",
  type_publication: "Tipo de publicación",
  type_post: "Tipo de post",
  social_network: "Red social",
  name_project: "Nombre del proyeto",
  public_goal: "Publico objetivo",
  palete_colors: "Paleta de colores",
  references: "Referencias",
  idea_post: "Idea a desarollar",
  designer_freedom: "Libertad diseñador",
  costo_base: "Costo base",
  tiempo_entrega: "Tiempo de entrega",
  formato_entrega: "Formato de entrega",
  revisiones: "Revisiones",
  archivos_editables: "Archivos editables",
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

export const FINISH_TABLES = (page) => {
  const listContent = [
    { title: "Nombre del proyecto", isActive: true },
    { title: "Estado", isActive: true },
    { title: "Fecha finalización", isActive: true },
    { title: "Mis notas privadas", isActive: page === "home" ? false : true },
    { title: "Visualizar diseño final", isActive: true },
    { title: "Comentarios finales", isActive: page === "home" ? false : true },
    { title: "Descargar", isActive: true },
    { title: "", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const ACTIVE_TABLES = (page) => {
  const listContent = [
    { title: "Nombre del proyecto", isActive: true },
    { title: "Estado", isActive: true },

    { title: "Fecha estimada próx. revisión", isActive: true },
    { title: "Mis notas privadas", isActive: page === "home" ? false : true },
    { title: "Más Información", isActive: page === "home" ? true : false },
    {
      title: "Visualizar última versión",
      isActive: page === "home" ? false : true,
    },
    { title: "Revisión", isActive: page === "home" ? false : true },
    { title: "Retroalimentación revisiones", isActive: true },
    { title: "Diseñador", isActive: page === "home" ? false : true },
    { title: "", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const PROJECTS = (
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
  flow_active,
  rol_id,
  setModalReviews
) => {
  const listContent = [
    {
      title: "Nombre del proyecto",
      isActive: true,
      field: "name_project",
      icon: null,
      onClick() {
        navigate(`/project-detail/${project?.id}`);
      },
    },

    {
      title: "Fecha Inicio",
      isActive: page === "home" && typeFin === "inactive" ? true : false,
      field: "created_at",
      icon: null,
    },

    {
      title: "Estado",
      isActive: page === "home" ? (typeFin === "active" ? true : false) : true,
      field: "status",
      icon: flow_active,
      subtitle: {
        text: "Ver más...",
        onClick() {
          navigate(`/status-project/${project?.id}`, {
            state: { project_id: project?.id },
          });
        },
      },
    },

    {
      title: "Fecha Finalización",
      isActive: typeFin === "inactive" ? true : false,
      field: "finish_at",
      icon: null,
    },

    {
      title: "Fecha estimada próx. revisión",
      isActive: typeFin === "active" ? true : false,
      field: "review_date",
      icon: null,
      type: rol_id === 3 || rol_id === 8 ? "date" : null,
    },
    {
      title: "Retroalimentación revisiones",
      isActive: typeFin === "active" ? true : false,
      field: "review_date",
      icon: "review",
      onClick() {
        navigate(`/reviews/${project?.id}`);
      },
    },
    {
      title: "Mis notas privadas",
      isActive: page === "home" ? false : true,
      field: "review_date",
      icon: "private_notes",
      onClick() {
        setModalPrivateNotes(!modalPrivateNotes);
        setDataModals({
          project_id: project.id,
          notes: project?.notes,
        });
      },
    },

    {
      title: "Visualizar diseño final",
      isActive: typeFin === "inactive" ? true : false,
      field: "review_date",
      icon: "last_version",
      onClick() {
        setModalZoomImg(!modalZoomImg);
        setDataModals({
          type: "normal",
          img: getLastVersion(project),
        });
      },
    },

    {
      title: "Comentarios finales",
      isActive: page !== "home" && typeFin === "inactive" ? true : false,
      field: "review_date",
      icon: "comments_blue",
    },

    {
      title: "Descargar",
      isActive: typeFin === "inactive" ? true : false,
      field: "review_date",
      icon: "download",
      type: "download",
    },
    {
      title: "Más Información",
      isActive: page === "home" && typeFin === "active" ? true : false,
      icon: "add_plus",
      onClick() {
        navigate(`/more-info/${project.id}`);
      },
    },
    {
      title: "Visualizar última versión",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      field: "review_date",
      icon: "last_version",
      onClick() {
        setModalZoomImg(!modalZoomImg);
        setDataModals({
          type: "normal",
          img: getLastVersion(project),
        });
      },
    },
    {
      title: "Revisión",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      field: "review",
      icon: "add_plus",
      type: "review",
      onClick() {
        setModalReviews(!modalDesignerProject);
        setDataModals(project?.review);
      },
    },

    {
      title: "Diseñador",
      isActive: page !== "home" && typeFin === "active" ? true : false,
      field: "review_date",
      icon: "review",
      onClick() {
        setModalDesignerProject(!modalDesignerProject);
        setDataModals({ project_id: project?.id });
      },
    },
    {
      title: "",
      isActive: page === "home" ? false : true,
      isMenu: [
        {
          title: "Más información",
          onClick() {
            navigate(`/more-info/${project?.id}`);
          },
        },
        {
          title: "Compartir",
        },
        {
          title: "Invitar personas",
        },
        {
          title: "Eliminar",
        },
      ],

      field: "points-menu",
      onClick() {
        setMenuFloat(menuFloat === project?.id ? "" : project?.id);
      },
    },
    {
      title: "",
      isActive: page === "home" ? true : false,
      field: "points-menu",
      subtitle: {
        text: "Ver más...",
        onClick() {
          navigate(`/projects-${typeFin}`);
        },
      },
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
        { name: "Youtube", status: "inactive" },
        { name: "Twitter", status: "inactive" },
        { name: "Pinterest", status: "inactive" },
        { name: "Twitch", status: "inactive" },
        { name: "Tumblr", status: "inactive" },
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
