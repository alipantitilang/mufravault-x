document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab]");
  const sections = document.querySelectorAll(".tab-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      sections.forEach(section => {
        section.classList.remove("active");
      });

      document.getElementById(target).classList.add("active");

      tabs.forEach(t => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");
    });
  });
});
