let myVar;
let result;
// function loaded() {
//   myVar= setTimeout(showPage, 2500);
// }

function loaded(){

  document.getElementById("loader").style.display = "none";
  document.getElementById("content-loaded").style.display = "block";

  // AOS.init({
  //   duration: 1200
  // });
}
