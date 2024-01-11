import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MessageContainer from "../components/message-container";
import Navbar from "../components/navbar";
import UserProfileRow from "../components/user-profile-row";
import axios from "axios";

const initMessages = [
  {
    id: "123",
    content: "Typical Reply with anger",
    msgFrom: "ja1234",
    myMessage: false,
    timestamp: "",
  },
  {
    id: "142",
    content:
      "Typical Reply with anger with a lot of frustration. So this text is gonna be long and it is gonna take a lot of space. It is noted that this also take a lot of your time to read and respond. So unfortunate..!!",
    msgFrom: "ja1234",
    myMessage: false,
    timestamp: "",
  },
  {
    id: "166",
    content: "Typical Reply with anger",
    msgFrom: "ja1234",
    myMessage: false,
    timestamp: "",
  },
  {
    id: "198",
    content: "My Message",
    msgFrom: "as123",
    myMessage: true,
    timestamp: "",
  },
  {
    id: "211",
    content: "My Big Message. Trying to make the chat widow scrollable",
    msgFrom: "as123",
    myMessage: true,
    timestamp: "",
  },
  {
    id: "212",
    content: "Another dumb message",
    msgFrom: "as123",
    myMessage: true,
    timestamp: "",
  },
  {
    id: "223",
    content: "Dumb Message",
    msgFrom: "as123",
    myMessage: true,
    timestamp: "",
  },
  {
    id: "224",
    content: "One beautiful Message",
    msgFrom: "ja1234",
    myMessage: false,
    timestamp: "",
  },
  {
    id: "225",
    content: "Some message in the past",
    msgFrom: "ja1234",
    myMessage: false,
    timestamp: "",
  },
];

export const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [messages, setMessages] = useState(initMessages);

  const fetchUsers = async () => {
    const { data } = await axios.get("/api/users");
    setUsers(data);
    setSelectedUser(data[0]);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (text) => {
    if (text) {
      const newMsg = {
        id: messages[0].id + 1,
        content: text,
        msgFrom: "as123",
        myMessage: true,
        timestamp: "",
      };
      setMessages([newMsg, ...messages]);
    }
  };

  return (
    <div className="overflow-hidden w-full h-full relative bg">
      <div id="chatscreen" className="flex flex-row w-full h-full">
        <div
          id="userlist"
          className="md:w-96 sm:w-80 w-full h-full flex flex-col border-r border-r-secondary"
        >
          <Navbar />
          <div className="w-full h-full overflow-y-scroll flex flex-col ">
            {users.map((user, index) => {
              return (
                <UserProfileRow
                  key={user.id}
                  user={user}
                  onUserSelect={onUserSelect}
                  selected={user.id === selectedUser.id}
                />
              );
            })}
          </div>
        </div>
        <div
          id="userchat"
          className="overflow-y-scroll w-full sm:flex flex-col hidden h-full"
        >
          {selectedUser && (
            <MessageContainer
              messages={messages}
              user={selectedUser}
              sendMessage={handleSendMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};
