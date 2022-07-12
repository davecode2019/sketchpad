const gridbox = document.querySelector(".gridbox");
const GRIDWIDTH = 600; // Drawing area size in pixels (height is the same)
let switchOn = false; // Pen default to off
let penColor = "red"; // Default pen color
let rainbowPen = true;
let gridSize = 16; // Amount of squares on each side of the grid
let squareSize = GRIDWIDTH / gridSize; // Calculates the pixel size for each square within the drawing area

function setSize() {
  let userSize = prompt("Select grid size between 1 and 100:");
  if (userSize > 0 && userSize <= 100) {
    gridSize = userSize;
    squareSize = GRIDWIDTH / gridSize;
    pageSetup();
  } else {
    setSize();
  }
}

function setColor(color) {
  penColor = color;
}

function changeColor() {
  if (rainbowPen) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgb = `rgb(${red},${green},${blue})`;
    setColor(rgb);
  }
}

function drawGrid() {
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
}

function setListeners() {
  // Make node list of grid elements
  const squares = document.querySelectorAll(".square");
  // Add event listeners to gid elements
  squares.forEach((square) => {
    square.addEventListener("dragstart", function (e) {
      e.preventDefault();
    });
    square.addEventListener("drop", function (e) {
      e.preventDefault();
    });
    square.addEventListener("mousedown", function () {
      switchOn = true; // Pen on
    });
    square.addEventListener("mouseup", function () {
      switchOn = false; // Pen off
    });
    square.addEventListener("mouseover", function (e) {
      if (switchOn) {
        e.target.style.backgroundColor = penColor;
      }
    });
    square.addEventListener("mouseleave", () => {
      if (switchOn && rainbowPen) {
        changeColor();
      }
    });
  });

  const gridsizeButton = document.querySelector(".gridsize-button");
  gridsizeButton.addEventListener("click", setSize);

  const colorButtons = document.querySelectorAll(".colorbutton");
  colorButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      setColor(e.target.id);
      rainbowPen = false;
    });
  });
}

function pageSetup() {
  drawGrid();
  setListeners();
}

pageSetup();

// need to fine tune the rainbow pen logic and add the button.
