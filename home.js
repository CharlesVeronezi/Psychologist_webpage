document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener("click", function() {
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // Fecha todos os outros itens antes de abrir o atual
        accordionItems.forEach(item => {
          const content = item.querySelector(".accordion-content");
          content.style.display = "none";
        });

        content.style.display = "block";
      }
    });
  });
});