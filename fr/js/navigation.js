const nav = document.querySelector("#nav")
const navOverlay = document.querySelector("#nav__overlay")
const btnTop = document.querySelector("#nav--top")
const btnOpen = document.querySelector("#nav--open")
const btnClose = document.querySelector("#nav--close")
let toggle = false

function scrollLocation() {
  let scrollable = document.documentElement.scrollHeight - window.innerHeight
  let scrolled = window.scrollY
  // let navHeight = nav.offsetHeight

  // If desired, to display arrow as soon as navigation
  // comes into the viewport, uncomment navHeight above
  // and use the following:
  // if (Math.ceil(scrolled) >= scrollable - navHeight) {
  if (Math.ceil(scrolled) >= scrollable) {
    document.body.classList.add("arrowUp")
  } else {
    document.body.classList.remove("arrowUp")
  }
}

function toggleNavigation() {
  toggle = !toggle
  document.body.classList.toggle("bottomZero")
}

function scrollToTop() {
  document.body.classList.remove("bottomZero")

  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -100)
    timeOut = setTimeout("scrollToTop()", 10)
  } else clearTimeout(timeOut)
}

window.addEventListener("scroll", scrollLocation)
btnOpen.addEventListener("click", toggleNavigation)
btnClose.addEventListener("click", toggleNavigation)
navOverlay.addEventListener("click", toggleNavigation)
btnTop.addEventListener("click", scrollToTop)
