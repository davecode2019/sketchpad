const gridbox = document.querySelector(".gridbox");
const GRIDWIDTH = 600; // Drawing area size in pixels (height is the same)
let switchOn = false; // Pen default to off
let gridSize = 100; // Amount of squares on each side of the grid
let squareSize = GRIDWIDTH / gridSize; // Calculates the pixel size for each square within the drawing area

const setSize = () => {
  let userSize = prompt("Select grid size between 1 and 100:");
  if (userSize > 0 && userSize <= 100) {
    gridSize = userSize;
    squareSize = GRIDWIDTH / gridSize;
    pageSetup();
  } else {
    setSize();
  }
};

const pageSetup = () => {
  // Clear any existing grid
  gridbox.innerHTML = "";
  // Draw grid
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("gridrow");
    gridbox.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute(
        "style",
        `width: ${squareSize}px; height: ${squareSize}px` // Square size adaptable dependant on user choice of grid size
      );
      row.appendChild(square);
    }
  }
  // Make node list of grid elements
  const squares = document.querySelectorAll(".square");
  // Add event listeners to gid elements
  squares.forEach((square) => {
    square.addEventListener("mousedown", function () {
      switchOn = true; // Pen on
    });
    square.addEventListener("mouseup", function () {
      switchOn = false; // Pen off
    });
    square.addEventListener("mouseover", function (e) {
      if (switchOn) {
        e.target.style.backgroundColor = "red";
      }
    });
  });

  const gridsizeButton = document.querySelector(".gridsize-button");
  gridsizeButton.addEventListener("click", setSize);
};

pageSetup();
