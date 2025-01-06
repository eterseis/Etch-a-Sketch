let container = document.querySelector(".container");

let n = 16;
for (let i = 0; i < n; i++){
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  container.appendChild(row);
  for (let j = 0; j < n; j++){
    let column = document.createElement("div");
    column.setAttribute("class", "column");
    row.appendChild(column);
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.className == "column") {
    e.target.style.backgroundColor = `rgb(${getRandomInt()}, 40, ${getRandomInt()})`;
  }
});

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}
