const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Message {
    id: ID!
    text: String!
    author: String!
    createdAt: Date!
  }

  type Query {
    messages: [Message]!
  }

  type Mutation {
    sendMessage(text: String!, author: String!): Message!
  }
`;

module.exports = typeDefs;
