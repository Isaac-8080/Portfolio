// A function to display and hide the navigation menu of small screens when clicked on

function smallScreensNav() {

  let smallScreensNav = document.querySelector("#toggle");

  if (smallScreensNav.style.display === "block") {

    smallScreensNav.style.display = "none";

  } else{

    smallScreensNav.style.display = "block";

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