import { ComponentShowcasePage } from '../components/showcase';
import { avatarComponents } from '../data/components/avatars';

export default function AvatarShowcase() {
  return (
    <ComponentShowcasePage
      components={avatarComponents}
      title="Avatar"
      description="Pixel-perfect, nostalgic avatar designs for your modern web applications."
      folder="Avatars"
    />
  );
}
