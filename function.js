
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-transparent');
  } else {
    header.classList.remove('header-transparent');
  }
});
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

mybutton.addEventListener("click", scrollToTop);
});

