const btnIncrementEl = document.querySelector('[data-action="increment"]');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector("#value");

btnIncrementEl.addEventListener('click', onButtonIncrementClick)

btnDecrementEl.addEventListener('click',onButtonDecrementClick )

function onButtonIncrementClick(event) {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
} 

function onButtonDecrementClick(even) {
    if ( counterValue.textContent > 0) {
         counterValue.textContent = parseInt(counterValue.textContent) - 1;
 }
}