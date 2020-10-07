import React from "react";
import { render } from "@testing-library/react";
// yarn add @testing-library/dom
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MessageCompose from "./MessageCompose";

describe("<MessageCompose />", () => {
  it("sends a message", () => {
    // Arrange
    const handleSendMessage = jest.fn();
    render(<MessageCompose onMessageSend={handleSendMessage} />);

    // Act
    const input = screen.getByLabelText("Message Text");

    userEvent.type(input, "Hallo Welt!");
    userEvent.click(screen.getByText("Absenden"));

    // Assert
    expect(handleSendMessage).toHaveBeenCalled();
    expect(handleSendMessage).toHaveBeenCalledWith("Hallo Welt!");
  });
});
