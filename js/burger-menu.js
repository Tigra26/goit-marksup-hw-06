(() => {
  const refs = {
    openBtn: document.querySelector("[data-burger-open]"),
    closeBtn: document.querySelector("[data-burger-close]"),
    menu: document.querySelector("[data-burger]"),
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) return;

  refs.openBtn.addEventListener("click", toggleMenu);
  refs.closeBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    
    document.body.classList.toggle("no-scroll");
  }
})();