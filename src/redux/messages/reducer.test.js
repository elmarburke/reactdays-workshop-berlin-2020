import messagesReducer from "./reducer";

describe("messagesReducer", () => {
  it("should have an initial state with an empty messages array", () => {
    const state = messagesReducer(undefined, { type: "kaesebroetchen" });
    expect(state.messages.length).toEqual(0);
  });
  it("should store a new message", () => {
    const state = messagesReducer(undefined, {
      type: "ADD_MESSAGE",
      payload: {
        message: {
          author: "Jan",
          date: 1,
          message: "Hallo Frank",
          id: 17,
        },
      },
    });

    expect(state.messages[0].author).toBe("Jan");
  });
});
