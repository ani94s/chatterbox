import React from "react";

export const Chat = () => {
  return (
    <div id="chatscreen" className="flex flex-row w-full h-full">
      <div id="userlist" className="w-96 overflow-scroll flex flex-col">
        <div className="my-32"> Userlist</div>
        <div className="my-32"> Text</div>
        <div className="my-32"> Text</div>
      </div>
      <div id="userchat" className="overflow-scroll w-full">
        UserChat
      </div>
    </div>
  );
};
