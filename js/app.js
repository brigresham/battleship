const squares = document.querySelectorAll(".square");
console.log(squares);

const click = document.querySelector(".click");
console.log(click);

const battleshipLocation = Math.floor(Math.random() * 9);
console.log("Battleship is at:", battleshipLocation);

squares.forEach((square, index) => {
    square.addEventListener("click", function () {
        if (index === battleshipLocation) {
            square.style.backgroundColor = "green";
            square.textContent = "Correct!";
        } else {
            square.style.backgroundColor = "red";
            square.textContent = "Incorret!";
        }
        // Optionally, disable further clicks on this square
        square.style.pointerEvents = "none";
    });
});