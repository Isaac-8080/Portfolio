// function darkLightMode() {
//   document.getElementById('dark-light').style.backgroundColor = 'black';
//   document.getElementById('dark-light').style.color = 'white';
//   document.getElementById('dark-light').style.border.color = 'white';
//   return darkLightMode();
// }


function displayNone() {
  document.getElementById("toggle").style.display = 'none';
}
displayNone();


function smallScreensNav() {

  let smallScreensNav = document.getElementById("toggle");

  smallScreensNav.style.display = 'hidden';

  if (smallScreensNav.style.display === "none") {
    smallScreensNav.style.display = "block";
  } else{
    smallScreensNav.style.display = "none";
  }
}


// function hide(params) {
  
// }

// function hideSmNavLinks() {
//   document.querySelector('#toggle').style.display = 'none';
// }

// function showSmNavLinks() {
//   document.querySelector('#toggle').style.display = 'block';
// }
