const btnHamburguer = document.querySelector(".menu-hamburguer");
const menuLista = document.querySelector("ul");

btnHamburguer.addEventListener("click", () => {
  menuLista.classList.toggle("mostrar");
  btnHamburguer.classList.toggle("ativo")
});