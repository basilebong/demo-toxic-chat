import React, { useState } from "react";
import Message from "./Message";

const Chat = ({ model }) => {
  const [messages, setMessages] = useState([
    "Write something and test if the message is toxic!",
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // Prevent submit
    e.preventDefault();
    // Get the current value of the input (this is our message)
    const value = input;
    // Clear input for the next message
    setInput("");
    // Save message into state
    setMessages([...messages, value]);
  };

  const handleInputChange = (e) => setInput(e.currentTarget.value);

  // List of all messages
  const Messages = messages.map((m, i) => (
    <Message key={i} model={model} text={m} />
  ));

  return (
    <div className="chat">
      <div className="chat__container">{Messages}</div>
      <form onSubmit={handleSubmit} className="chat__form">
        <input
          onChange={handleInputChange}
          value={input}
          className="chat__input"
          type="text"
        />
        <button type="submit" className="chat__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chat;
