const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema goes here.
  # The schema should model the full data object available!

  type Pokemon {
    id: String!
    name: String!
    classification: String!
    types: [String!]
    resistant: [String!]
    weaknesses: [String!]
    weight: Weight!
    height: Height!
    fleeRate: Float
    evolutionRequirements: EvolutionRequirements!
    evolutions: [Evolution]
    previousEvolutions: [PreviousEvolution]
    maxCP: Int
    maxHP: Int
    attacks: Attacks!
  }

  type EvolutionRequirements {
    amount: Int!
    name: String!
  }

  type Weight {
    minimum: String!
    maximum: String!
  }

  type Height {
    minimum: String!
    maximum: String!
  }

  type Attacks {
    fast: [Attack]
    special: [Attack]
  }

  type Attack {
    name: String
    type: String
    damage: Int
  }

  type Evolution {
    id: Int!
    name: String!
  }

  type PreviousEvolution {
    id: Int!
    name: String!
  }

  type Query {
    Attacks: Attacks
    Attack(type: String): [Attack]
    Types: [String!]
    GetPokemonByType(name: String): [Pokemon]
    GetPokemonByAttack(name: String): [Pokemon]
    Pokemons: [Pokemon]
    Pokemon(id: String, name: String): Pokemon
  }

  type Mutation {
    AddType(name: String): [String!]
    EditType(edit: String, newName: String): [String!]
    DeleteType(name: String): [String!]
    AddAttack(
      attackType: String
      name: String
      type: String
      damage: Int
    ): Attacks
    EditAttack(
      attackType: String
      attackToEdit: String
      name: String
      type: String
      damage: Int
    ): Attacks
    DeleteAttack(attackType: String, name: String): Attacks
    AddPokemon(id: String, name: String): [Pokemon]
    EditPokemon(name: String, newName: String): [Pokemon]
    DeletePokemon(name: String): [Pokemon]
  }
`;

module.exports = typeDefs;
