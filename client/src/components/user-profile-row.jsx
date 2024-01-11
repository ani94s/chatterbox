import React from "react";
import PropTypes from "prop-types";
import Avatar from "./avatar";

const UserProfileRow = ({ user, onUserSelect, selected = false }) => {
  return (
    <button
      key={user.id}
      className={`flex flex-row justify-start gap-2 items-center p-2 border ${
        selected ? "bg-slate-300" : "bg-secondary hover:bg-slate-200"
      }`}
      onClick={() => onUserSelect(user)}
    >
      <Avatar name={user?.nickName} imagePath={user?.avatarImg} size="sm" />
      <h2 className="text-xl truncate">
        {user?.nickName
          ? user?.nickName
          : `${user?.firstName} ${user?.lastName}`}
      </h2>
    </button>
  );
};

UserProfileRow.propTypes = {
  user: PropTypes.object,
  onUserSelect: PropTypes.func,
  selected: PropTypes.bool,
};
export default UserProfileRow;
