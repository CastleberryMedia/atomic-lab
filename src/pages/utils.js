export const SAVE_LOCAL = (name, value) => {
  const oldData = JSON.parse(localStorage.getItem("formProject"));

  const newData = { ...oldData, [name]: value };

  localStorage.setItem("formProject", JSON.stringify(newData));
  window.dispatchEvent(new Event("storage"));
};
