console.log(
  `Designed & Developed by Blake Zajac — https://github.com/BlakeZajac/`
);

document.addEventListener("DOMContentLoaded", (event) => {
  stickyMobileHeader(980);

  // Add email to end of desktop header
  const desktopHeader = document.getElementById("top-menu-nav");

  let headerEmail = document.createElement("div");
  headerEmail.classList.add("header__email");
  let headerEmailHTML =
    '<div class="header__email__content"><a href="mailto:contact@blakezajac.com">contact@blakezajac.com</a></div>';
  headerEmail.innerHTML = headerEmailHTML;

  desktopHeader.append(headerEmail);

  // to do - rewrite with vanilla JS
  $(".hero__content h2 span").mouseenter(function () {
    $(".hero__content h2").css("color", "var(--black-20");
    $(".hero__content h2").css("transition", "all 0.2s ease-in-out");
  });
  $(".hero__content h2 span").mouseleave(function () {
    $(".hero__content h2").css("color", "var(--black-100)");
    $(".hero__content h2").css("transition", "all 0.2s ease-in-out");
  });

  // const heroHoverItem = document.querySelectorAll(".hero__content h2 span");
  // const heroHeading = document.querySelectorAll(".hero__content h2");

  // heroHoverItem.addEventListener("mouseenter", function(e) {
  //   heroHeading.style.color = "var(--black-20)";
  //   heroHeading.style.transition = "all 0.2s ease-in-out";
  // });
  // heroHoverItem.addEventListener("mouseleave", function(e) {
  //   heroHeading.style.color = "var(--black-100)";
  //   heroHeading.style.transition = "all 0.2s ease-in-out";
  // });
});
