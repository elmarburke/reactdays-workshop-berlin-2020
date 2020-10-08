const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Message {
    id: ID!
    text: String!
    author: Person!
    createdAt: Date!
  }

  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    email: String
  }

  type Query {
    messages: [Message]!
  }

  type Mutation {
    sendMessage(text: String!, authorId: ID!): Message!
  }
`;

module.exports = typeDefs;
