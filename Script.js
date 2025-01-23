const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://yotabyte29:Singh2003!@wasserettelorentzdataba.zgt7n.mongodb.net/?retryWrites=true&w=majority&appName=WasseretteLorentzDatabase";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const clientGrid = document.getElementById("clientGrid");
const productGrid = document.getElementById("productGrid");
const submitBtn = document.getElementById("submit");

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
    button.addEventListener("click", () => {
      document.querySelectorAll(`#${Prefix}Grid button`).forEach((btn) => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
      button.dataset.selected = name;
    });
    Grid.appendChild(button);
  });
}

function submit() {
  const order = {
    client: document.querySelector(`#clientGrid button.selected`).textContent,
    product: document.querySelector(`#productGrid button.selected`).textContent,
    date: Date.parse(document.getElementById("Date").value),
    IN: parseInt(document.getElementById("IN").value),
    OUT: parseInt(document.getElementById("OUT").value),
  };

  console.log(
    `${typeof order.client} ${typeof order.product} ${typeof order.date} ${typeof order.IN} ${typeof order.OUT}`
  );
}

submitBtn.addEventListener("click", () => {
  submit();
});

const clientList = fillPlaceholder(`Client`, 40);
const productList = fillPlaceholder(`Product`, 15);

loadButtons(clientList, clientGrid, `client`);
loadButtons(productList, productGrid, `product`);
