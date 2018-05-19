let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  if (currentScrollPos > (window.innerHeight - 20)) {
    document.querySelectorAll(".navbar-link").forEach(function(link) {
      link.style.color = "#587583";
    });
  } else {
    document.querySelectorAll(".navbar-link").forEach(function(link) {
      link.style.color = "white";
    });
  }
  prevScrollpos = currentScrollPos;
}
