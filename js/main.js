/* ---------------------------------------Navigation menu--------------------------------------------------*/
// (() =>{

//      const hamburgerBtn = document.querySelector(".hamburger-btn"),
//      navMenu = document.querySelector(".nav-Menu"),
//      closeNavBtn = navMenu.querySelector(".close-nav-menu");

//      hamburgerBtn.addEventListener("click", showNavMenu);
//      closeNavBtn.addEventListener("click", hideNavMenu);

//      function showNavMenu(){
//           navMenu.classList.add("open");
//      }
//      function hideNavMenu(){
//           navMenu.classList.remove("open");
//      }
// })

/* ---------------------------------------About section tabs--------------------------------------------------*/
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

/* ---------------------------------------hide all section except active-----------------------------------------*/

// (()=>{

//      const section = document.querySelectorAll(".section");
//      sections.forEach((section) =>{
//           if(!section.classList.contains("active")){
//                section.classList.add("hide");
//           }
//      })
// })();
