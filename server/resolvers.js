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
    GetPokemonByType: (parents, args) => {
      const output = data.pokemon.filter((pokemon) => {
        return pokemon.types.includes(args.name);
      });
      return output;
    },
    GetPokemonByAttack: (parents, args) => {
      const output = [];

      for (const pokemon of data.pokemon) {
        for (const special of pokemon.attacks.special) {
          if (special.name === args.name) {
            output.push(pokemon);
          }
        }
        for (const fast of pokemon.attacks.fast) {
          if (fast.name === args.name) {
            output.push(pokemon);
          }
        }
      }
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
  Mutation: {
    AddType: (parents, args) => {
      data.types.push(args.name);
      return data.types;
    },
    EditType: (parents, args) => {
      for (let i = 0; i <= data.types.length - 1; i++) {
        if (data.types[i] === args.edit) {
          data.types[i] = args.newName;
        }
      }
      return data.types;
    },
    DeleteType: (parents, args) => {
      for (let i = 0; i <= data.types.length - 1; i++) {
        if (data.types[i] === args.name) {
          data.types.splice(i, 1);
        }
      }
      return data.types;
    },
    AddAttack: (parents, args) => {
      if (args.attackType === "fast") {
        data.attacks.fast.push({
          name: args.name,
          type: args.type,
          damage: args.damage,
        });
      } else if (args.attackType === "special") {
        data.attacks.special.push({
          name: args.name,
          type: args.type,
          damage: args.damage,
        });
        return data.attacks;
      }
    },
    EditAttack: (parents, args) => {
      if (args.attackType === "fast") {
        console.log("fast");
        for (const attack of data.attacks.fast) {
          if (attack.name === args.attackToEdit) {
            attack.name = args.name;
            attack.type = args.type;
            attack.damage = args.damage;
          }
        }
      } else if (args.attackType === "special") {
        for (const attack of data.attacks.special) {
          if (attack.name === args.attackToEdit) {
            attack.name = args.name;
            attack.type = args.type;
            attack.damage = args.damage;
          }
        }
      }
      return data.attacks;
    },
    DeleteAttack: (parents, args) => {
      if (args.attackType === "fast") {
        for (const attack of data.attacks.fast) {
          if (attack.name === args.name) {
            const index = data.attacks.fast.indexOf(attack);
            data.attacks.fast.splice(index, 1);
          }
        }
      } else if (args.attackType === "special") {
        for (const attack of data.attacks.special) {
          if (attack.name === args.name) {
            const index = data.attacks.special.indexOf(attack);
            data.attacks.special.splice(index, 1);
          }
        }
      }
      return data.attacks;
    },
    DeletePokemon: (parents, args) => {
      for (const pokemon of data.pokemon) {
        if (pokemon.name === args.name) {
          const index = data.pokemon.indexOf(pokemon);
          data.pokemon.splice(index, 1);
        }
      }
      return data.pokemon;
    },
  },
};
