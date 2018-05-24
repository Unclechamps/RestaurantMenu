// function getDishes(eachDish) {
//   return dishes[eachDish]
// }

// let menu = document.getElementById('fullMenu')
//
// let starter = document.getElementById('starter')
// let entrees = document.getElementById('entrees')
// let desserts = document.getElementById('desserts')
//
// let btnmenu = document.getElementById('btnFullMenu')
// let btnstarters = document.getElementById('btnStarters')
// let btnentrees = document.getElementById('btnEntrees')
// let btndesserts = document.getElementById('btnDesserts')
//
// let starterTitle = `<h3>Starters</h3>`
// let entreesTitle = `<h3>Entrees</h3>`
// let dessertsTitle = `<h3>Desserts</h3>`
//
// btnstarters.addEventListener('click', function() {
//   starter.innerHTML = starterTitle
//   var starterMeals = dishes.filter(function(i) {
//     if (i.course == "Starters") {
//       title = i.title
//       description = i.description
//       imageURL = i.imageURL
//       price = i.price
//       plate = `<div class="individualPlates">
//               <img src=${imageURL}>
//               <div class="description">
//               <h5>${title}</h5>
//               <p>${description}</p>
//               </div>
//               <p class="price">${price}</p>
//               </div>
//               `
//       starter.innerHTML += plate
//       entrees.innerHTML = ''
//       desserts.innerHTML = ''
//
//           }
//   });
//
// })
//
// btnentrees.addEventListener('click', function() {
//   entrees.innerHTML = entreesTitle
//   var entreesMeals = dishes.filter(function(i) {
//     if (i.course == "Entrees") {
//       title = i.title
//       description = i.description
//       imageURL = i.imageURL
//       price = i.price
//       plate = `<div class="individualPlates">
//               <img src=${imageURL}>
//               <div class="description">
//               <h5>${title}</h5>
//               <p>${description}</p>
//               </div>
//               <p class="price">${price}</p>
//               </div>
//               `
//       entrees.innerHTML += plate
//       starter.innerHTML = ''
//       desserts.innerHTML = ''
//           }
//   });
//
// })
//
// btndesserts.addEventListener('click', function() {
//   desserts.innerHTML = dessertsTitle
//   var dessertsMeals = dishes.filter(function(i) {
//     if (i.course == "Desserts") {
//       title = i.title
//       description = i.description
//       imageURL = i.imageURL
//       price = i.price
//       plate = `<div class="individualPlates">
//               <img src=${imageURL}>
//               <div class="description">
//               <h5>${title}</h5>
//               <p>${description}</p>
//               </div>
//               <p class="price">${price}</p>
//               </div>
//               `
//       desserts.innerHTML += plate
//       entrees.innerHTML = ''
//       starter.innerHTML = ''
//           }
//   });
//
// })

//Another way of doing this:
// let dishesDiv = document.querySelector("#fullmenu")

// for(let index = 0; index < dishes.length; index++) { //this goes through the dishes array and returns all dishes separately.
//     let dishItem = `<img src="${dishes[index].imageURL}"/>
//                     <h4>${dishes[index].title}</h4>
//                     <p>${dishes[index].description}</p>
//                     <p>${dishes[index].price}</p>
//                     `
// dishesDiv.innerHTML += dishItem
//
// }

let btnmenu = document.getElementById('btnFullMenu')
let btnstarters = document.getElementById('btnStarters')
let btnentrees = document.getElementById('btnEntrees')
let btndesserts = document.getElementById('btnDesserts')

//A third way of doing this:

let dishesDiv = document.querySelector("#fullmenu")

function getDishesBy(course) {

    let filteredDishes = dishes.filter(function(dish){
      return dish.course == course
    })

    return filteredDishes
}

function populateDishes(dishesToDisplay) {
  dishesDiv.innerHTML = ''
  dishesToDisplay.forEach(function(dish) {

    let dishItem = `<div class="individualPlates">
                    <img src="${dish.imageURL}"/>
                    <div class="description">
                    <h5>${dish.title}</h5>
                    <p>${dish.description}</p>
                    </div>
                    <p class="price">${dish.price}</p>
                    </div>`
                    dishesDiv.innerHTML += dishItem
  })
}

populateDishes(dishes)

let btnAll = document.querySelector("#btnFullMenu")
btnAll.addEventListener('click',function(){
  populateDishes(dishes)
})

let btnStarters = document.querySelector("#btnStarters")
btnStarters.addEventListener('click',function(){

  let filteredDishes = getDishesBy("Starters")
  populateDishes(filteredDishes)

})

let btnEntrees = document.querySelector("#btnEntrees")
btnEntrees.addEventListener('click',function(){

  let filteredDishes = getDishesBy("Entrees")
  populateDishes(filteredDishes)

})

let btnDesserts = document.querySelector("#btnDesserts")
btnDesserts.addEventListener('click',function(){

  let filteredDishes = getDishesBy("Desserts")
  populateDishes(filteredDishes)

})
