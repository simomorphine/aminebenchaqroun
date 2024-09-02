const services = document.querySelectorAll('.welcome__list__item__link')
const heading = document.querySelector('.heading')
const elWelcome = document.querySelector('.welcome')
const elTagline = document.querySelector('.tagline')
const elArrow = document.querySelector('.arrowdown')
const h1 = document.getElementsByTagName('h1')
let timer

// let elArchitecture = document.getElementById('architecture')
// let elInterior = document.getElementById('interior')
// let elBrandDesign = document.getElementById('branddesign')
// let elStudio = document.getElementById('studio')
// let elThoughts = document.getElementById('thoughts')
// let elContact = document.getElementById('contact')
// let elResources = document.getElementById('resources')
let elBody = document.body
let phone =
  'only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)'
let tablet =
  'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)'

// function fetchData(id) {
//   let data

//   // contact index is nested
//   if (id === 'contact') {
//     data = `${id}/index.html`
//   } else {
//     data = `${id}.html`
//   }

//   // fetch content
//   fetch(data)
//     .then(function (res) {
//       return res.text()
//     })
//     .then(function (html) {
//       // Convert the HTML string into a document object
//       let parser = new DOMParser()
//       let doc = parser.parseFromString(html, 'text/html')
//       // Get the header element of response page
//       let header = doc.querySelector('.site-wide-header')
//       // Get the wrapper element of response page
//       let wrapper = doc.querySelector('.wrapper')
//       // Get the header element of current page
//       let currHeader = document.querySelector('.site-wide-header')

//       if (data === 'index.html') {
//         currHeader.style.display = 'none'
//       } else {
//         currHeader.style.display = 'block'
//       }

//       // Get the wrapper element of current page
//       let currWrapper = document.querySelector('.wrapper')
//       // replace wrapper of current page with wrapper of response page
//       currHeader.innerHTML = header.innerHTML
//       // replace wrapper of current page with wrapper of response page
//       currWrapper.innerHTML = wrapper.innerHTML
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
// }

function welcomeActivated(e) {
  // take in the click ^ (e)vent

  // prevent browser from refreshing
  e.preventDefault()

  // grab id from event
  let { id } = e.target

  // if no id, assign index
  if (id === '' || e.type === 'wheel' || e.type === 'touchmove') {
    // to fetch data from
    id = 'index'
    // to change url with
    url = ''
    // if there is an id, assign it to the url
  } else {
    // to change url with
    url = id
  }

  // For reference: history(data, title, url)
  history.pushState(id, null, url)

  // fetch data
  // fetchData(id)

  // reveal content by toggling overlay & ability to scroll
  elWelcome.classList.add('welcome--active')
  elBody.classList.remove('noscroll')
}

services.forEach((service) =>
  service.addEventListener('click', welcomeActivated)
)

elTagline.addEventListener('click', welcomeActivated)

elArrow.addEventListener('click', welcomeActivated)

// Scroll is disable (overflow:hidden) so we use `wheel` event
elWelcome.addEventListener('wheel', welcomeActivated)

// Swipe Event
elWelcome.addEventListener('touchmove', welcomeActivated)

window.addEventListener('popstate', (e) => {
  // reveal content by toggling overlay & ability to scroll
  elWelcome.classList.toggle('welcome--active')
  elBody.classList.toggle('noscroll')

  // target state from event
  // const { state } = e

  // fetch data
  // fetchData(state)
})

// Changes Background Image 'ON' Hover
// function backgroundImageIn() {
//   let backgroundImage
//   switch (this.id) {
//     case 'hellostudio':
//       backgroundImage =
//         "url('https://theupstudio.com/img/theupstudio/teamUP/the-up-studio-architecture-design-team-long-island-city-ny-group-portrait.jpg')"
//       break
//     case 'architecture':
//       backgroundImage =
//         "url('https://theupstudio.com/img/harborhideaway/modern-hamptons-architecture-by-the-up-studio.jpg')"
//       break
//     case 'interior':
//       backgroundImage =
//         "url('https://theupstudio.com/img/cliffcovehouse/modern-kitchen-interiors-by-the-up-studio.jpg')"
//       break
//     case 'branddesign':
//       backgroundImage =
//         "url('https://theupstudio.com/img/559w23/up-brand-design-corporate-identity-residential-developemtn-chelsea-ny-real-estate-marketing-pamphlet.jpg')"
//       break
//     case 'studio':
//       backgroundImage =
//         "url('https://theupstudio.com/img/theupstudio/teamUP/the-up-studio-new-york-modern-architecture-interior-and-brand-design-team-portrait.jpg')"
//       break
//     case 'thoughts':
//       backgroundImage =
//         "url('https://theupstudio.com/img/blog/gracefarms/nyc-architecture-firm-the-up-studio-visiting-grace-farms-new-canaan-ct_medium.jpg')"
//       break
//     case 'resources':
//       backgroundImage =
//         "url('https://theupstudio.com/img/theupstudio/the-up-studio-architecture-and-interior-design-resources-and-tools.jpg')"
//       break
//     case 'contact':
//       backgroundImage =
//         "url('https://theupstudio.com/img/blog/gracefarms/nyc-architecture-firm-the-up-studio-visiting-grace-farms-new-canaan-ct_medium.jpg')"
//       break
//   }
//   elWelcome.style.backgroundImage = backgroundImage
// }

// Changes Background Image 'OFF' Hover
// function backgroundImageOut() {
//   elWelcome.style.backgroundImage = 'none'
// }

// Background Images - Desktop Only
// if (!window.matchMedia(phone).matches && !window.matchMedia(tablet).matches) {
//   elArchitecture.addEventListener('mouseover', backgroundImageIn)
//   elInterior.addEventListener('mouseover', backgroundImageIn)
//   elBrandDesign.addEventListener('mouseover', backgroundImageIn)
//   elStudio.addEventListener('mouseover', backgroundImageIn)
//   elResources.addEventListener('mouseover', backgroundImageIn)
//   elContact.addEventListener('mouseover', backgroundImageIn)
// }
