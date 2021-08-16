

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1
    countEl.textContent = count;
}

function save(){
    let conStr = count + " - "
    saveEl.textContent += conStr
    countEl.textContent = 0
    count = 0
}







