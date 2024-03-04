AOS.init();

var app = document.getElementById("autotyping");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hii, I am <br>Web Developer.")
  .pauseFor(500)
  .deleteChars(14)
  .typeString("MERN Stack Developer.")
  .pauseFor(2500)
  .start();

document.getElementById("year").innerHTML = new Date().getUTCFullYear();

const scrollFunction = () => {
  let myNav = document.querySelector("header");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myNav.style.position = "fixed";
    myNav.style.width = "90%";
} else {
    myNav.style.width = "auto";
    myNav.style.position = "relative";
}
};

window.onscroll = () => {
  scrollFunction();
};
