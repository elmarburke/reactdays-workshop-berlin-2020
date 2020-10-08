const resolvers = {
  Query: {
    messages: async (node, arguments, { dataSources }) => {
      const messages = dataSources.messageApi.getAllMessages();

      return messages;
    },
  },
  Mutation: {
    sendMessage: async (_, { text, author }, { dataSources }) => {
      const newMessage = await dataSources.messageApi.sendMessage({
        text,
        author,
      });

      return newMessage;
    },
  },
};

module.exports = resolvers;
