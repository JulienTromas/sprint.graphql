// The data below is mocked.
const data = require("./data");

module.exports = {
  Query: {
    Pokemons: () => {
      return data.pokemon;
    },
    Pokemon: (parent, args) => {
      if (!args.name) {
        return data.pokemon.find((pokemon) => pokemon.id === args.id);
      }
      return data.pokemon.find((pokemon) => pokemon.name === args.name);
    },
    Types: () => {
      return data.types;
    },
    type: (parents, args) => {
      const output = data.pokemon.filter((pokemon) => {
        return pokemon.types.includes(args.name);
      });
      return output;
    },
    Attacks: () => {
      return data.attacks;
    },
    Attack: (parents, args) => {
      if (args.type === "fast") {
        return data.attacks.fast;
      } else if (args.type === "special") {
        return data.attacks.special;
      }
    },
  },
};
