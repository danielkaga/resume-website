let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let navbar = document.getElementById("navbar")
  let about = document.getElementById("profile").offsetTop;
  let skills = document.getElementById("skills").offsetTop;
  let work = document.getElementById("work").offsetTop;
  let contact = document.getElementById("contact").offsetTop;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || [0, about, skills, work, contact].includes(currentScrollPos)) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  if (currentScrollPos > (about - 20)) {
    document.querySelectorAll(".navbar-link").forEach(function(link) {
      link.style.color = "#8991A6";
    });
  } else {
    document.querySelectorAll(".navbar-link").forEach(function(link) {
      link.style.color = "white";
    });
  }
  if (currentScrollPos == 0) {
    navbar.style.background = "rgba(255,255,255,0)";
    navbar.style.boxShadow = "0 0px 0px rgba(0,0,0,0)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.6)";
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";
  }
  prevScrollpos = currentScrollPos;
}
