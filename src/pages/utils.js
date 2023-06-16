export const SAVE_LOCAL = (name, value) => {
  const oldData = JSON.parse(localStorage.getItem("formProject"));

  const newData = { ...oldData, [name]: value };

  localStorage.setItem("formProject", JSON.stringify(newData));
  window.dispatchEvent(new Event("storage"));
};

export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}
