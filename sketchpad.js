const gridbox = document.querySelector(".gridbox");

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.classList.add(`gridrow`);
  gridbox.appendChild(row);
  for (let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.classList.add(`square`);
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
