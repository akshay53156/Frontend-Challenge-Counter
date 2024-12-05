let count = document.querySelector("#count");
let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");

let counting = document.querySelector("#incrementDecrementInput");

let currentCount = parseInt(count.textContent);

decrement.addEventListener("click", () => { 
    currentCount = currentCount - parseInt(counting.value);
    count.textContent = currentCount;
});

increment.addEventListener("click", () => {
    currentCount = currentCount + parseInt(counting.value);
    count.textContent = currentCount;
});

document.querySelector("#reset").addEventListener("click", () => {
    count.textContent = 0;
});