const resolvers = {
  Query: {
    messages: async (node, arguments, { dataSources }) => {
      const messages = dataSources.messageApi.getAllMessages();

      return messages;
    },
  },
  Mutation: {
    sendMessage: async (_, { text, authorId }, { dataSources }) => {
      const newMessage = await dataSources.messageApi.sendMessage({
        text,
        authorId,
      });

      return newMessage;
    },
  },
  Message: {
    author: async ({ dataValues }, _, { dataSources }) => {
      return dataSources.personApi.getPerson(dataValues.authorId);
    },
  },
};

module.exports = resolvers;
