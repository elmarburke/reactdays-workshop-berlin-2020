class MessageApi {
  constructor(store) {
    this.store = store;
  }

  async getAllMessages() {
    const messages = await this.store.messages.findAll();

    return messages;
  }

  async sendMessage({ text, authorId }) {
    const message = await this.store.messages.create({
      text,
      authorId,
    });

    return message;
  }
}

module.exports = MessageApi;
