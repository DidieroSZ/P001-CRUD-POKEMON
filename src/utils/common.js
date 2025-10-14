export const getLocal = (nombre) => {
  const informacion = localStorage.getItem(nombre);
  return informacion ? JSON.parse(informacion) : null;
};

export const setLocal = (nombre, data) => {
  localStorage.setItem(nombre, JSON.stringify(data));
};

export const reloadPage = () => {
  window.location.reload();
};
