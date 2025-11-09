const botaoMenu = document.getElementById("botaoMenu");
const menuLinks = document.getElementById("menuLinks");
const closeMenu = document.getElementById("closeMenu");

// abrir e fechar o menu pelo botão
botaoMenu.addEventListener("click", () => {
  menuLinks.classList.add("menu-ativo");
});

closeMenu.addEventListener("click", () => {
  menuLinks.classList.remove("menu-ativo");
});

menuLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("menu-ativo");
  });
});