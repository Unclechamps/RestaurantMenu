

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
