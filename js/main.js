// /* ---------------------------------------About section tabs--------------------------------------------------*/
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    /* if event.target contains 'tab-item' class and not contains 'active' class*/
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      //deactivate existing active 'tab-item'
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      //active new 'tab-item'
      event.target.classList.add("active", "outer-shadow");

      //deactivate existing active 'tab-content'
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      //active new 'tab-content'
      aboutSection.querySelector(target).classList.add("active");
    }
  });

})();


//Preloader
window.onload = function(){ document.getElementById("loader_wrapper").style.display = "none" }

