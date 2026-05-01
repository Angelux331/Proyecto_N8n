const form = document.getElementById("justificacionForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que cambie de página

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      popup.classList.remove("hidden");
      form.reset();
    } else {
      alert("Error al enviar la solicitud");
    }

  } catch (err) {
    alert("Error de conexión");
    console.error(err);
  }
});

function closePopup() {
  popup.classList.add("hidden");
}
