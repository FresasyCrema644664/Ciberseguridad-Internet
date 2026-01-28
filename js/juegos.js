// Juego 1: Quiz
function respuesta(correcta) {
  if (correcta) {
    alert("✅ Correcto: es un intento de phishing.");
  } else {
    alert("❌ Incorrecto: revisa la sección de Amenazas.");
  }
}

// Juego 2: Simulador de decisiones
function decision(correcta) {
  if (correcta) {
    alert("✅ Bien hecho: evita redes abiertas, usa tus datos o una VPN.");
  } else {
    alert("❌ Riesgo alto: las redes abiertas pueden ser peligrosas.");
  }
}

// Juego 3: Memoria con emparejamiento
let primeraCarta = null;
let segundaCarta = null;

document.querySelectorAll('.memoria .card').forEach(card => {
  card.addEventListener('click', () => {
    // Evitar seleccionar la misma carta dos veces
    if (card.classList.contains('volteada')) return;

    card.classList.add('volteada');

    if (!primeraCarta) {
      primeraCarta = card;
    } else {
      segundaCarta = card;

      if (
        (primeraCarta.textContent === "Phishing" && segundaCarta.textContent === "Correo falso") ||
        (primeraCarta.textContent === "Correo falso" && segundaCarta.textContent === "Phishing") ||
        (primeraCarta.textContent === "Malware" && segundaCarta.textContent === "Programa dañino") ||
        (primeraCarta.textContent === "Programa dañino" && segundaCarta.textContent === "Malware")
      ) {
        // ✅ Pareja correcta: se quedan volteadas
        primeraCarta = null;
        segundaCarta = null;
      } else {
        // ❌ No coinciden: se voltean de nuevo después de un segundo
        setTimeout(() => {
          primeraCarta.classList.remove('volteada');
          segundaCarta.classList.remove('volteada');
          primeraCarta = null;
          segundaCarta = null;
        }, 1000);
      }
    }
  });
});

// Juego 4: Verificador de contraseñas
function checkPass() {
  const pass = document.getElementById("pass").value;
  let result = "❌ Débil";
  if (pass.length >= 8 && /[A-Z]/.test(pass) && /\d/.test(pass)) {
    result = "✅ Fuerte";
  }
  document.getElementById("result").textContent = result;
}