import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

let allPokemon = [
  { name: "Pikachu", colour: "yellow" },
  { name: "Charmander", colour: "orange" },
  { name: "Squirtle", colour: "blue" },
];

app.get("/", function (request, response) {
  response.json("Horray You did it!");
});

app.get("/pokemon", function (request, response) {
  response.json(allPokemon);
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080. Read to accept requests!");
});
