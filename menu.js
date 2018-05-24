// function getDishes(eachDish) {
//   return dishes[eachDish]
// }

let menu = document.getElementById('fullMenu')

let starter = document.getElementById('starter')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

let btnmenu = document.getElementById('btnFullMenu')
let btnstarters = document.getElementById('btnStarters')
let btnentrees = document.getElementById('btnEntrees')
let btndesserts = document.getElementById('btnDesserts')

let starterTitle = `<h3>Starters</h3>`
let entreesTitle = `<h3>Entrees</h3>`
let dessertsTitle = `<h3>Desserts</h3>`

btnstarters.addEventListener('click', function() {
  starter.innerHTML = starterTitle
  var starterMeals = dishes.filter(function(i) {
    if (i.course == "Starters") {
      title = i.title
      description = i.description
      imageURL = i.imageURL
      price = i.price
      plate = `<div class="individualPlates">
              <img src=${imageURL}>
              <div class="description">
              <h5>${title}</h5>
              <p>${description}</p>
              </div>
              <p class="price">${price}</p>
              </div>
              `
      starter.innerHTML += plate
      entrees.innerHTML = ''
      desserts.innerHTML = ''

          }
  });

})

btnentrees.addEventListener('click', function() {
  entrees.innerHTML = entreesTitle
  var entreesMeals = dishes.filter(function(i) {
    if (i.course == "Entrees") {
      title = i.title
      description = i.description
      imageURL = i.imageURL
      price = i.price
      plate = `<div class="individualPlates">
              <img src=${imageURL}>
              <div class="description">
              <h5>${title}</h5>
              <p>${description}</p>
              </div>
              <p class="price">${price}</p>
              </div>
              `
      entrees.innerHTML += plate
      starter.innerHTML = ''
      desserts.innerHTML = ''
          }
  });

})

btndesserts.addEventListener('click', function() {
  desserts.innerHTML = dessertsTitle
  var dessertsMeals = dishes.filter(function(i) {
    if (i.course == "Desserts") {
      title = i.title
      description = i.description
      imageURL = i.imageURL
      price = i.price
      plate = `<div class="individualPlates">
              <img src=${imageURL}>
              <div class="description">
              <h5>${title}</h5>
              <p>${description}</p>
              </div>
              <p class="price">${price}</p>
              </div>
              `
      desserts.innerHTML += plate
      entrees.innerHTML = ''
      starter.innerHTML = ''
          }
  });

})
