let container = document.querySelector(".container");

function SetGrid(userInput) {
  for (let i = 0; i < userInput; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let j = 0; j < userInput; j++) {
      let column = document.createElement("div");
      column.setAttribute("class", "column");
      row.appendChild(column);
    }
  }
}

let btn = document.querySelector(".newGrid");
btn.addEventListener("click", () => {
  let userInput = window.prompt("enter a new grid between 1-100: ");
  if (!(userInput > 0 && userInput < 101)) {
    window.alert("error: value not in range");
  } else {
    let rows = document.querySelectorAll(".row");
    rows.forEach((e) => {
      container.removeChild(e);
    });
    SetGrid(userInput);
  }
});

container.addEventListener("mouseover", (e) => {
  if (e.target.className == "column") {
    e.target.style.backgroundColor = `rgb(${getRandomInt()}, 40, ${getRandomInt()})`;
  }
});

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}
