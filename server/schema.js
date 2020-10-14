const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema goes here.
  # The schema should model the full data object available!

  type Pokemon {
    id: String
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
    name: String!
    type: String!
    damage: Int!
  }

  type Evolution {
    id: Int!
    name: String!
  }

  type Query {
    Pokemons: [Pokemon]
    Pokemon(name: String!): Pokemon
  }
`;

module.exports = typeDefs;
