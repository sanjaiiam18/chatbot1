"use client";
import Markdown from "markdown-to-jsx";
import { useChat } from "ai/react";
import { AiOutlineReload } from "react-icons/ai";
import "./globals.css";
import { IoMdSend } from "react-icons/io";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="chat">
      <h1 className="header">
        BOT🤖
        <span className="reload" onClick={() => window.location.reload()}>
          <AiOutlineReload size={23} />
        </span>
      </h1>

      <div className="chat-body">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.role}`}>
            <span className="role-label">{m.role === "user" ? "" : ""}</span>
            <Markdown>{m.content}</Markdown>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            className="chat-input"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button type="submit" className="send-button">
            <IoMdSend color="white" size={30} />
          </button>
        </form>
      </div>
    </div>
  );
}
