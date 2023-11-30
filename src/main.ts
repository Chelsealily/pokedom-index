import "./styles/style.scss";

import {pokemonArray} from "./data/pokemon";

console.log(pokemonArray)

  const card = document.querySelector<HTMLElement>(".card-container");

  if (!card) {
      throw new Error("Issue with card");
    }

  const showCards = (pokemon: Pokemon) => {
    return  `<div class="card"> <div class="card__header-section">
      <img class="card__image" src=${pokemon.sprite} /> </div>
    
    <div class="card__content">
      <h2 class="card__heading">${pokemon.name}</h2>
        <p class="card__text">${pokemon.name} #${pokemon.id} is a ${pokemon.types.join(" & ")} type pokemon.</p>
      </div>`
  }
 
  pokemonArray.forEach((pokemon) => {
    card.innerHTML += showCards(pokemon);
  });