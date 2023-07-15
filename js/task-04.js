// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const valueEl = document.querySelector("#value");
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");


decr.addEventListener("click", decrement);
incr.addEventListener("click", increment);

function decrement(event){
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment(event){
    counterValue += 1;
    value.textContent = counterValue;
}
