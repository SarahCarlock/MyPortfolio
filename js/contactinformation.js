/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "12.5rem";
    document.getElementById("contact").style.marginLeft = "12.5rem";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("contact").style.marginLeft = "0";
  }

  $(".button").click(function(){
    $("a").toggleClass("menu");
  });