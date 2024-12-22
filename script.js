// VARIABLES //

// Buttons
const topLeft = document.getElementById("topLeft")
const topMid = document.getElementById("topMid")
const topRight = document.getElementById("topRight")

const midLeft = document.getElementById("midLeft")
const middle = document.getElementById("middle")
const midRight = document.getElementById("midRight")

const botLeft = document.getElementById("botLeft")
const botMid = document.getElementById("botMid")
const botRight = document.getElementById("botRight")

// Others
const turnText = document.getElementById("turnText")
let turn = 1

// FUNCTIONS //

// Win function
function checkWin() {
    if (
        topLeft.textContent === "X" && topMid.textContent === "X" && topRight.textContent === "X" ||
        midLeft.textContent === "X" && middle.textContent === "X" && midRight.textContent === "X" ||
        botLeft.textContent === "X" && botMid.textContent === "X" && botRight.textContent === "X" ||
        topLeft.textContent === "X" && midLeft.textContent === "X" && botLeft.textContent === "X" ||
        topMid.textContent === "X" && middle.textContent === "X" && botMid.textContent === "X" ||
        topRight.textContent === "X" && midRight.textContent === "X" && botRight.textContent === "X" ||
        topLeft.textContent === "X" && middle.textContent === "X" && botRight.textContent === "X" ||
        topRight.textContent === "X" && middle.textContent === "X" && botLeft.textContent === "X"
    ) {
        turnText.textContent = "Player 1 has won!"
        setTimeout(() => {
            location.reload()
        }, 1000);
    } else if (
        topLeft.textContent === "O" && topMid.textContent === "O" && topRight.textContent === "O" ||
        midLeft.textContent === "O" && middle.textContent === "O" && midRight.textContent === "O" ||
        botLeft.textContent === "O" && botMid.textContent === "O" && botRight.textContent === "O" ||
        topLeft.textContent === "O" && midLeft.textContent === "O" && botLeft.textContent === "O" ||
        topMid.textContent === "O" && middle.textContent === "O" && botMid.textContent === "O" ||
        topRight.textContent === "O" && midRight.textContent === "O" && botRight.textContent === "O" ||
        topLeft.textContent === "O" && middle.textContent === "O" && botRight.textContent === "O" ||
        topRight.textContent === "O" && middle.textContent === "O" && botLeft.textContent === "O"
    ) {
        turnText.textContent = "Player 2 has won!"
        setTimeout(() => {
            location.reload()
        }, 1000);
    } else if (
        topLeft.textContent !== "" &&
        topMid.textContent !== "" &&
        topRight.textContent !== "" &&
        midLeft.textContent !== "" &&
        middle.textContent !== "" &&
        midRight.textContent !== "" &&
        botLeft.textContent !== "" &&
        botMid.textContent !== "" &&
        botRight.textContent !== ""
    ) {
        turnText.textContent = "Its a tie!"
        setTimeout(() => {
            location.reload()
        }, 1000);
    }
}

// Button functions
topLeft.addEventListener("click", function(){
    if (turn === 1) {
        if (topLeft.textContent === "") {
            topLeft.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
            checkWin()
        } else {
            return
        }
    } else if (turn === 2) {
        if (topLeft.textContent === "") {
            topLeft.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
            checkWin()
        } else {
            return
        }
    }
})
topMid.addEventListener("click", function(){
    if (turn === 1) {
        if (topMid.textContent === "") {
            topMid.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (topMid.textContent === "") {
            topMid.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
topRight.addEventListener("click", function(){
    if (turn === 1) {
        if (topRight.textContent === "") {
            topRight.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (topRight.textContent === "") {
            topRight.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})

midLeft.addEventListener("click", function(){
    if (turn === 1) {
        if (midLeft.textContent === "") {
            midLeft.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (midLeft.textContent === "") {
            midLeft.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
middle.addEventListener("click", function(){
    if (turn === 1) {
        if (middle.textContent === "") {
            middle.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (middle.textContent === "") {
            middle.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
midRight.addEventListener("click", function(){
    if (turn === 1) {
        if (midRight.textContent === "") {
            midRight.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (midRight.textContent === "") {
            midRight.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})

botLeft.addEventListener("click", function(){
    if (turn === 1) {
        if (botLeft.textContent === "") {
            botLeft.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (botLeft.textContent === "") {
            botLeft.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
botMid.addEventListener("click", function(){
    if (turn === 1) {
        if (botMid.textContent === "") {
            botMid.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (botMid.textContent === "") {
            botMid.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
botRight.addEventListener("click", function(){
    if (turn === 1) {
        if (botRight.textContent === "") {
            botRight.textContent = "X"
            turn = 2
            turnText.textContent = "Player 2s turn:"
        } else {
            return
        }
    } else if (turn === 2) {
        if (botRight.textContent === "") {
            botRight.textContent = "O"
            turn = 1
            turnText.textContent = "Player 1s turn:"
        } else {
            return
        }
    }
    checkWin()
})
