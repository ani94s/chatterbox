import React from "react";
import { useState } from "react";
import MessageContainer from "../components/message-container";
import Navbar from "../components/navbar";
import UserProfileRow from "../components/user-profile-row";

const userList = [
  {
    id: "as123",
    firstName: "Anirudhan",
    lastName: "Srisudhan",
    avatarImg: "",
    nickName: "Ani",
  },
  {
    id: "av123",
    firstName: "Ashwath",
    lastName: "Vijayan",
    avatarImg: "",
    nickName: "Ash",
  },
  {
    id: "ps123",
    firstName: "Pooja",
    lastName: "Sivaraja",
    avatarImg: "",
    nickName: "Pooja",
  },
  {
    id: "tb23",
    firstName: "Tamanna",
    lastName: "Bhatia",
    avatarImg: "",
    nickName: "Tammu",
  },
  {
    id: "vj123",
    firstName: "Vijay",
    lastName: "Kumar",
    avatarImg: "",
    nickName: "Vj",
  },
  {
    id: "f1l1",
    firstName: "First1",
    lastName: "Last1",
    avatarImg: "",
    nickName: "",
  },
  {
    id: "rr11",
    firstName: "Rampwalk",
    lastName: "Remo",
    avatarImg: "",
    nickName: "",
  },
  {
    id: "nan99",
    firstName: "Nandhini",
    lastName: "Anniyan",
    avatarImg: "",
    nickName: "Nandy",
  },
  {
    id: "dsss",
    firstName: "Divya",
    lastName: "Spandana",
    avatarImg: "",
    nickName: "",
  },
  {
    id: "kagar",
    firstName: "Kajal",
    lastName: "Agarwal",
    avatarImg: "",
    nickName: "",
  },
  {
    id: "vd24",
    firstName: "Vishal",
    lastName: "Dhadlani",
    avatarImg: "",
    nickName: "",
  },
  {
    id: "ja1234",
    firstName: "John Biggest Name",
    lastName: "Andrew",
    avatarImg: "",
    nickName: "",
  },
];

const messages = [
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
  const [selectedUser, setSelectedUser] = useState(userList[0]);

  const onUserSelect = (user) => {
    setSelectedUser(user);
  };
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div id="chatscreen" className="flex flex-row w-full h-full">
        <div
          id="userlist"
          className="sm:w-96 w-full h-full flex flex-col border-r border-r-secondary"
        >
          <Navbar />
          <div className="w-full h-full overflow-y-scroll flex flex-col ">
            {userList.map((user, index) => {
              return (
                <UserProfileRow
                  key={index}
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
          <MessageContainer messages={messages} user={selectedUser} />
        </div>
      </div>
    </div>
  );
};
