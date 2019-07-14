let Pokemons = {
  amount() {
    // Call to the database
  },

  say(sentence) {
    console.log(`Your Pokedex says: ${sentence}`);
  }
};

function howIsMyCollection() {
  const size = Pokemons.amount();

  if (size === undefined) {
    return Pokemons.say('Oops, not sure how many pokemons you have');
  } else if (size === 0) {
    return Pokemons.say('You have no pokemon at all. Gotta catch em all');
  } else if (size < 10) {
    return Pokemons.say('You only have a few, you need more');
  } else if (size < 50) {
    return Pokemons.say('You have quite some favorites. Keep going');
  }
  return Pokemons.say('You are quite a collector');
}

// Stub

function stubAmount(amount) {
  Pokemons.amount = () => amount;
}

// (function have5Pokemons() {
//   stubAmount(5);
//   howIsMyCollection();
// })();

// Let us try different amounts

function havePokemons(amount) {
  stubAmount(amount);
  howIsMyCollection();
}

havePokemons(5);
havePokemons(28);
havePokemons(0);
havePokemons(200);
