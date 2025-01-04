let container = document.querySelector(".container");

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    container.appendChild(document.createElement("div"));
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.parentElement.className == "container") {
    e.target.style.backgroundColor = `rgb(${getRandomInt()}, 40, ${getRandomInt()})`;
  }
});

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}
