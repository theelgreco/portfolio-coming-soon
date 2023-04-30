const logoImage = document.getElementById("logoImage");
const logo = document.getElementById("logo");
const logoText = document.getElementById("logoText");
const homePage = document.getElementById("homePage");

let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

let currentRotate = 0;
let currentZoom = 1;

logo.addEventListener("mousewheel", (e) => {
  if (e.deltaY > 0) {
    if (currentZoom < 2) {
      currentZoom += 0.1;
    } else {
      currentZoom += 1;
    }
    currentZoom = parseFloat(currentZoom.toFixed(1));
    console.log(currentZoom);

    if (currentZoom >= 1.5) {
      currentRotate += 20;
    }
  } else if (e.deltaY < 0 && currentZoom > 1) {
    if (currentZoom < 2.1) {
      currentZoom -= 0.1;
    } else {
      currentZoom -= 1;
    }
    currentZoom = parseFloat(currentZoom.toFixed(1));
    console.log(currentZoom);

    if (currentZoom >= 1.4) {
      currentRotate -= 20;
    }
  }

  homePage.animate(
    { rotate: `${currentRotate}deg` },
    { duration: 500, fill: "forwards" }
  );

  homePage.animate(
    { scale: `${currentZoom}` },
    { duration: 500, fill: "forwards" }
  );

  console.log("wheel");
});
