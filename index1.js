
let addBookButton = document.getElementById("addBookButtonEl")
let bookCount = document.getElementById("bookCountEl")
let totalBookCount = 0

function increment() {
    totalBookCount += 1
    bookCount.textContent = totalBookCount
}

function save() {
    
}