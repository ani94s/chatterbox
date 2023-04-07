import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as AvatarPlaceholder } from "../assets/icons/avatar-placeholder.svg";

const AVATAR_SIZES = {
  xl: { container: 140, image: 132 },
  lg: { container: 98, image: 90 },
  md: { container: 78, image: 70 },
  sm: { container: 44, image: 40 },
  xs: { container: 30, image: 26 },
};

const Avatar = ({ name = "avatar", className, imagePath, size }) => {
  return (
    <div
      style={{
        width: AVATAR_SIZES[size].container,
        height: AVATAR_SIZES[size].container,
      }}
      className={`flex flex-shrink-0 justify-center items-center rounded-full bg-white border-gray-200`}
    >
      {imagePath ? (
        <img
          src={imagePath}
          alt={name}
          className={className}
          width={AVATAR_SIZES[size].image}
          height={AVATAR_SIZES[size].image}
        />
      ) : (
        <AvatarPlaceholder
          role="presentation"
          className={`block rounded-full`}
          style={{
            width: AVATAR_SIZES[size].image,
            height: AVATAR_SIZES[size].image,
          }}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  imagePath: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Avatar;
