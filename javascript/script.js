let container = document.querySelector(".container");
SetGrid(16);

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

let btn = document.querySelector(".btn-newGrid");
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
  let target = e.target;
  if (target.className == "column") {
    if (target.style.backgroundColor == ""){
      target.style.backgroundColor = `rgb(${getRandomInt()}, 40, ${getRandomInt()})`;
      target.style.opacity = 0.6;
    }
    else{
      target.style.opacity *= 1.4;
    }
  }
});

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}
