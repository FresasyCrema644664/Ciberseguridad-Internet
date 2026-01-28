document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.createElement("p");
  saludo.textContent = "Bienvenido al sitio de Ciberseguridad 👩‍💻";
  document.querySelector(".banner-text").appendChild(saludo);
});