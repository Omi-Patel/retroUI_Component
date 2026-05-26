import { ComponentShowcasePage } from '../components/showcase';
import { navbarComponents } from '../data/components/navbars';

export default function NavbarShowcase() {
  return (
    <ComponentShowcasePage
      components={navbarComponents}
      title="Navbar"
      description="Pixel-perfect, nostalgic navigation bar designs for your modern web applications."
      folder="Navbars"
    />
  );
}
