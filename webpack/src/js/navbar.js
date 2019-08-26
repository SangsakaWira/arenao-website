/**
 * Navbar interaction
 */
const navigation = document.querySelector(".main-nav");
const toggler = navigation.querySelector(".navbar-toggler");

const handleScroll = () => {
  const navTop = navigation.offsetTop + navigation.offsetHeight;

  if (window.scrollY >= navTop) {
    navigation.classList.add("navbar-sticky");
  } else {
    navigation.classList.remove("navbar-sticky");
  }
};

// navbar toggler, for mobile interaction
toggler.addEventListener("click", evt => {
  if (!navigation.matches(".st-nav")) {
    navigation.classList.toggle("navbar-expanded");
  }
});

// windows scroll event, toggle between sticky and non-sticky navbar
window.addEventListener("scroll", handleScroll);

// trigger the scroll event when the page loads
handleScroll();
