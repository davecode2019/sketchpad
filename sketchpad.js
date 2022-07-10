const gridbox = document.querySelector(".gridbox");
const GRIDWIDTH = 600;
let gridSize = 16;
let squareSize = GRIDWIDTH / gridSize;

for (let i = 0; i < gridSize; i++) {
  let row = document.createElement("div");
  row.classList.add("gridrow");
  gridbox.appendChild(row);
  for (let j = 0; j < gridSize; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute(
      "style",
      `width: ${squareSize}px; height: ${squareSize}px`
    );
    // square.setAttribute("id", `${i},${j}`); Might not be needed
    row.appendChild(square);
  }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) =>
  square.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "red";
  })
);
