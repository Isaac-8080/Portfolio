// A function to display and hide the navigation menu of small screens when clicked on

function displayNone() {
  document.querySelector("#toggle").style.display = 'none';
}
displayNone();


function smallScreensNav() {

  let smallScreensNav = document.querySelector("#toggle");

  smallScreensNav.style.display = 'hidden';

  if (smallScreensNav.style.display === "none") {
    smallScreensNav.style.display = "block";
  } else{
    smallScreensNav.style.display = "none";
  }

}


// function collapseAccordion() {

//   const collapseAccordion = document.querySelector("#collapseOne");

//   // collapseAccordion.style.display = 'hidden';

//   if (collapseAccordion.style.display === "none") {

//     collapseAccordion.style.display = "block";

//   } else{

//     collapseAccordion.style.display = "none";

//   }
// }
