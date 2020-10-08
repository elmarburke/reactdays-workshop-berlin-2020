import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MessageView from "./MessageView";

describe("<MessageView />", () => {
  it("shows the message", () => {
    render(
      <MessageView
        message={{
          id: "1",
          author: "Hans Wurst",
          message: "Hallo Welt",
          date: 1,
        }}
      />
    );

    const message = screen.getByText("Hallo Welt");

    expect(message).toMatchInlineSnapshot(`
      <article
        class="MessageView__MessageItem-sc-1bkojwi-0 bbAVOL"
        role="listitem article"
      >
        Hallo Welt
        <footer>
          Hans Wurst
        </footer>
      </article>
    `);
  });
});
