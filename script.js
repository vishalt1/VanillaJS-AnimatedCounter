let count = 0;
let counter = document.querySelector(".count");
let note = document.querySelector(".content p")

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count
    }
}, 1);

setTimeout(() => {
    note.style.visibility = "visible";
}, 7300);