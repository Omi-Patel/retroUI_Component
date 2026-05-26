import { ComponentShowcasePage } from '../components/showcase';
import { footerComponents } from '../data/components/footers';

export default function FooterShowcase() {
  return (
    <ComponentShowcasePage
      components={footerComponents}
      title="Footer"
      description="Pixel-perfect, nostalgic footer designs for your modern web applications."
      folder="Footers"
    />
  );
}
