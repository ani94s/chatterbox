import React from "react";
import PropTypes from "prop-types";

const Message = ({ messageContent, userName, myMessage }) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 ${
        myMessage ? "justify-end items-end" : "justify-start items-start"
      }`}
    >
      <div
        className={`flex flex-col md:max-w-xl max-w-sm p-2 rounded-xl ${
          myMessage ? "bg-secondary justify-end" : "bg-slate-400 justify-start"
        }`}
      >
        {!myMessage && (
          <p className="font-medium text-sm text-primary">{userName}</p>
        )}
        <p className="flex justify-end text-black">{messageContent}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  messageContent: PropTypes.string,
  userName: PropTypes.object,
  timestamp: PropTypes.string,
  myMessage: PropTypes.bool,
};

export default Message;
