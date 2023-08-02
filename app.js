const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.item');
const calc = document.querySelector('.calc');
const delAll = document.getElementById('delete-all')
const delLast = document.getElementById('delete-last')

//delAll.onclick= apagaDisplay();

console.log(display)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        display.innerHTML += btn.value;
    })
}
)

calc.addEventListener("click", (e) => {
    e.preventDefault();
    display.innerHTML = eval(display.innerHTML) ;
})

delAll.addEventListener("click", apagaDisplay)

function apagaDisplay() {
    display.innerHTML = "";
}

delLast.addEventListener("click", apagaUltimo)

function apagaUltimo() {
    console.log("teste")
} 
