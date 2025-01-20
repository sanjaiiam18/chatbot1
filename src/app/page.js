"use client";
import Markdown from "markdown-to-jsx";
import { useChat } from "ai/react";
import { AiOutlineReload } from "react-icons/ai";
import "./globals.css";
import { DateTime } from "./api/chat/route";
import { IoMdSend } from "react-icons/io";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const currentTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;

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
