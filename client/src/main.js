const app = document.getElementById("app");
const API_URL = "http://localhost:8080";

async function fetchPokemon() {
  const response = await fetch(`${API_URL}/pokemon`);
  const data = await response.json();
  data.forEach((pokemon) => {
    const pTag = document.createElement("p");
    pTag.innerText = `${pokemon.name} - ${pokemon.colour}`;
    app.appendChild(pTag);
  });
}
fetchPokemon();
