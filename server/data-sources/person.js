class PersonApi {
  constructor(store) {
    this.store = store;
  }

  async getPerson(personId) {
    const person = await this.store.messages.findOne({
      where: { id: personId },
    });

    return person;
  }
}

module.exports = PersonApi;
