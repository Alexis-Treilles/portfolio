
  let scrollpos = window.scrollY;
  const header = document.querySelector(".navbar");
  const mainContent = document.getElementById("mainContent"); // Récupère le main par son ID
  const headerHeight = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
  const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

  const adjustMainPadding = () => {
    const currentHeaderHeight = 0.6*header.offsetHeight; // Récupère la hauteur actuelle de la navbar
    mainContent.style.paddingTop = `${currentHeaderHeight}px`; // Ajuste le padding supérieur de main
  }

  window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= headerHeight) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }

    adjustMainPadding(); // Ajuste le padding chaque fois que l'utilisateur scroll
  });

  // Ajustement initial au chargement de la page
  window.onload = adjustMainPadding;
