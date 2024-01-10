const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;

// export const SAVE_LOCAL = (name, value) => {
//   const oldData = JSON.parse(localStorage.getItem("formProject"));

//   const newData = { ...oldData, [name]: value };

//   localStorage.setItem("formProject", JSON.stringify(newData));
//   window.dispatchEvent(new Event("storage"));
// };

export const OPEN_DB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("formProjectDB", 1);

    request.onerror = (event) => {
      reject("IndexedDB error:", event.target.errorCode);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore('formData', { keyPath: 'id', autoIncrement: true });
      objectStore.transaction.oncomplete = () => {
        resolve(db);
      };
    };
  });
};

export const SAVE_LOCAL = async (name, value) => {
  try {
    const db = await OPEN_DB();
    const transaction = db.transaction(['formData'], 'readwrite');
    const store = transaction.objectStore('formData');

    const request = store.get("formProject");
    request.onsuccess = () => {
        const oldData = request.result || {};
        var keyValue = undefined;
        // Objeto JSON que se va a guardar en IndexedDB
        const jsonObject = {
          ...oldData,
          [name]: value,
        };

        const jsonString = JSON.stringify(jsonObject);

        store.put(jsonObject);

        store.onsuccess = function(event) {
            console.log('My record saved :)!');
        };
        
        store.onerror = function() {
            console.log('My record was not saved :(!');
        };

        window.dispatchEvent(new Event("storage"));
    };
  } catch (error) {
    console.error("Error saving to IndexedDB:", error);
  }
};

export const CLEAR_DB = async (name, value) => {
  try {
    const db = await OPEN_DB();
    const transaction = db.transaction(['formData'], 'readwrite');
    const store = transaction.objectStore('formData');

    // Limpiar el almacén de objetos utilizando el método clear()
    const requestClear = store.clear();

    requestClear.onsuccess = function(event) {
      console.log('Tabla limpiada correctamente');
    };
  } catch (error) {
    console.error("Error cleaning table to IndexedDB:", error);
  }
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
