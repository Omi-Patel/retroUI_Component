import React from "react";

// Basic Avatar
const BasicAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-[#E0E4CC]  overflow-hidden">
    <img
      src="https://picsum.photos/id/237/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);

// Avatar with Border
const BorderAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-yellow-500 bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1005/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);

// Avatar with Shadow
const ShadowAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 shadow-[4px_4px_0px_0px_black] overflow-hidden">
    <img
      src="https://picsum.photos/id/1025/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);

// Avatar with Badge
const BadgeAvatar = () => (
  <div className="relative w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1084/150"
      alt="avatar"
      className="w-full h-full"
    />
    <span className="absolute top-1 right-1 w-4 h-4 bg-green-500  rounded-full border-2 border-black"></span>
  </div>
);

// Avatar with Image Frame
const FrameAvatar = () => (
  <div className="w-20 h-20 p-1 rounded-full border-4 border-black bg-gray-300 overflow-hidden">
    <div className="w-full h-full border-4 border-dotted border-gray-800 rounded-full overflow-hidden">
      <img
        src="https://picsum.photos/id/660/150"
        alt="avatar"
        className="w-full h-full"
      />
    </div>
  </div>
);

export { BasicAvatar, BorderAvatar, ShadowAvatar, BadgeAvatar, FrameAvatar };
