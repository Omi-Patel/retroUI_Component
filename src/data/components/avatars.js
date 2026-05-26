import { User, Shield, CircleUser, UserRound, Frame } from 'lucide-react';

// Component imports (the Avatars/Avatar module exports all 5 variants)
import {
  BasicAvatar,
  BorderAvatar,
  ShadowAvatar,
  BadgeAvatar,
  FrameAvatar,
} from '../../components/Avatars/Avatar';

export const avatarComponents = [
  {
    name: 'BasicAvatar',
    component: BasicAvatar,
    icon: User,
    code: `
const BasicAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-[#E0E4CC] overflow-hidden">
    <img
      src="https://picsum.photos/id/237/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  },
  {
    name: 'BorderAvatar',
    component: BorderAvatar,
    icon: Shield,
    code: `
const BorderAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-yellow-500 bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1005/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  },
  {
    name: 'ShadowAvatar',
    component: ShadowAvatar,
    icon: CircleUser,
    code: `
const ShadowAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 shadow-[4px_4px_0px_0px_black] overflow-hidden">
    <img
      src="https://picsum.photos/id/1025/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  },
  {
    name: 'BadgeAvatar',
    component: BadgeAvatar,
    icon: UserRound,
    code: `
const BadgeAvatar = () => (
  <div className="relative w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1084/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
    <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></span>
  </div>
);
  `,
  },
  {
    name: 'FrameAvatar',
    component: FrameAvatar,
    icon: Frame,
    code: `
const FrameAvatar = () => (
  <div className="w-20 h-20 p-1 rounded-full border-4 border-black bg-gray-300 overflow-hidden">
    <div className="w-full h-full border-4 border-dotted border-gray-800 rounded-full overflow-hidden">
      <img
        src="https://picsum.photos/id/660/150" // Replaced placeholder with dummy image
        alt="avatar"
        className="w-full h-full object-cover" // Added object-cover for better image fitting
      />
    </div>
  </div>
);
  `,
  },
];

export default avatarComponents;
