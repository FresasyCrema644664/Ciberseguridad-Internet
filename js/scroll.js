document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => observer.observe(el));
});