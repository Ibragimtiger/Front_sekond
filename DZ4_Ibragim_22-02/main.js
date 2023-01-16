const number = document.querySelector('#num')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus') 
const clear = document.querySelector('#clear')
const block = document.querySelector('.block')
const x = document.querySelector(".x")
const y = document.querySelector(".y")

function increment () {
    number.innerHTML++
    number.style.color = "green"
}

function decrement () {
    if(number.innerHTML > 0){
        number.innerHTML--
        number.style.color = "red"
    }
}

function clearCounter () {
    number.innerHTML = 0
    number.style.color = "black"
}

function findMouseCoord (e) {
    x.innerHTML = e.offsetX
    y.innerHTML = e.offsetY
}

plus.addEventListener('click', increment)

minus.addEventListener("click", decrement)

clear.addEventListener("click", clearCounter)

block.addEventListener('mousemove', findMouseCoord)