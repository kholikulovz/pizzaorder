let elForm = document.querySelector('.form')
let elSelect = document.querySelector('.form-select')

let size = document.querySelectorAll(".size-wrapper__input")

let holdInput = document.querySelectorAll(".hold__input")

let addition = document.querySelectorAll(".hold__inputt")

let bread = document.querySelector('#bread')
let sizeOfBread = document.querySelector('#sizeOfBread')
let upperIng = document.querySelectorAll('#li-wrapper li')
let additions = document.querySelectorAll('#additional-wrapper li')

elSelect.addEventListener("change", () => {
    bread.textContent = elSelect.value
})
for (let i = 0; i < size.length; i++) {
    size[i].addEventListener("click", () => {
        sizeOfBread.textContent = size[i].dataset.size
    })
}

for (let i = 0; i < holdInput.length; i++) {
    holdInput[i].addEventListener("click", () => {
        holdInput[i].checked
            ? upperIng[i].innerHTML = holdInput[i].dataset.add
            : upperIng[i].innerHTML = '';
    })
}

for (let i = 0; i < addition.length; i++) {
    addition[i].addEventListener("click", () => {
        addition[i].checked
            ? additions[i].innerHTML = addition[i].dataset.extra
            : additions[i].innerHTML = '';
    })
}






