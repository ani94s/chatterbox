import React from "react";
import PropTypes from "prop-types";
import UserProfileRow from "./user-profile-row";
import Message from "./message";
import { ReactComponent as Send } from "../assets/icons/arrow-right2.svg";
import { useState } from "react";
import { useEffect } from "react";

const MessageContainer = ({ messages, user, sendMessage }) => {
  const [currentText, setCurrentText] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    sendMessage(currentText);
    setCurrentText("");
  };
  return (
    <div
      id=" message-container"
      className="flex flex-col justify-between w-full h-full"
    >
      <UserProfileRow
        key={user.id}
        user={user}
        onUserSelect={() => {
          alert("Profile Page Under Construction..!!!");
        }}
      />
      <div className="flex flex-1 flex-col-reverse px-4 border bg-white gap-2 overflow-y-scroll">
        {messages.map((message) => {
          return (
            <Message
              key={message.id}
              messageContent={message.content}
              myMessage={message.myMessage}
              userName={
                user.nickName
                  ? user.nickName
                  : user.firstName + " " + user.lastName
              }
            />
          );
        })}
      </div>
      <div id="message-box" className="flex w-full p-2 gap-2 bg-slate-200">
        <input
          className="flex flex-1 px-6 rounded-3xl border text-lg"
          type="text"
          placeholder="Message"
          value={currentText}
          onChange={(event) => setCurrentText(event.target.value)}
          onKeyDown={(event) => handleKeyPress(event)}
        />
        <button
          onClick={() => handleSendMessage()}
          className="flex justify-center items-center w-14 h-14 border bg-primary rounded-full"
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  sendMessage: PropTypes.func,
};

export default MessageContainer;
