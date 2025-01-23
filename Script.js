const clientGrid = document.getElementById("clientGrid");
const productGrid = document.getElementById("productGrid");

function fillPlaceholder(prefix, amount) {
  let List = [];
  for (let i = 1; i <= amount; i++) {
    List.push(`${prefix} ${i}`);
  }
  return List;
}

function loadButtons(nameList, Grid, Prefix) {
  nameList.forEach((name) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.type = "button";
    addEventListener("click", () => {
      document.querySelector(`#${Prefix}Grid button`).forEach((btn) => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
      button.dataset.selected = name;
    });
    Grid.appendChild(button);
  });
}

const clientList = fillPlaceholder(`Client`, 40);
const productList = fillPlaceholder(`Product`, 15);

loadButtons(clientList, clientGrid, `Client`);
loadButtons(productList, productGrid, `Product`);
