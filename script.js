document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var sections = document.querySelectorAll(".section");
  
    window.addEventListener("scroll", function () {
      var currentSection = "";
  
      sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });
  
      document.querySelectorAll("#navbar a").forEach(function (a) {
        a.style.color = "white"; // Reset the color
      });
  
      document.querySelector(`#navbar a[href="#${currentSection}"]`).style.color = "orange"; // Change the color for the current section
    });
  });
  