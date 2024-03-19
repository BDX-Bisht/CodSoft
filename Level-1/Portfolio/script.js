AOS.init();

var app = document.getElementById("autotyping");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Web Developer")
  .pauseFor(1000)
  .deleteChars(14)
  .typeString("MERN Developer")
  .pauseFor(1000)
  .deleteChars(15)
  .typeString("FrontEnd Developer")
  .pauseFor(1000)
  .deleteChars(19)
  .typeString("BackEnd Developer")
  .start();

document.getElementById("year").innerHTML = new Date().getUTCFullYear();

window.onload(() => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
