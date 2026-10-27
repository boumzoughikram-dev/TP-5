
const formulaire = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", e => {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  confirmation.textContent = "Merci " + nom + ", votre message a bien été envoyé.";
  confirmation.hidden = false;
  formulaire.reset();
});


