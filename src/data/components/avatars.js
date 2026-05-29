import {
  BasicAvatar,
  BorderAvatar,
  ShadowAvatar,
  BadgeAvatar,
  FrameAvatar,
} from '../../components/Avatars/Avatar';
import AvatarSrc from '../../components/Avatars/Avatar.jsx?raw';

export const avatarComponents = [
  {
    name: 'PixelAvatar',
    component: BasicAvatar,
    code: AvatarSrc,
  },
  {
    name: 'PolaroidAvatar',
    component: BorderAvatar,
    code: AvatarSrc,
  },
  {
    name: 'StickerAvatar',
    component: ShadowAvatar,
    code: AvatarSrc,
  },
  {
    name: 'StampAvatar',
    component: BadgeAvatar,
    code: AvatarSrc,
  },
  {
    name: 'NewsprintAvatar',
    component: FrameAvatar,
    code: AvatarSrc,
  },
];

export default avatarComponents;
