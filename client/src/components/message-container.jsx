import React from "react";
import PropTypes from "prop-types";
import UserProfileRow from "./user-profile-row";
import Message from "./message";
import { ReactComponent as Send } from "../assets/icons/arrow-right2.svg";

const MessageContainer = ({ messages, user }) => {
  console.log(user, messages);
  return (
    <div
      id=" message-container"
      className="flex flex-col justify-between w-full h-full"
    >
      <UserProfileRow key={user.id} user={user} />
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
        />
        <button
          onClick={() => {}}
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
};

export default MessageContainer;
