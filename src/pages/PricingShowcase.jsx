import { ComponentShowcasePage } from '../components/showcase';
import { pricingComponents } from '../data/components/pricing';

export default function PricingShowcase() {
  return (
    <ComponentShowcasePage
      components={pricingComponents}
      title="Pricing"
      description="Pixel-perfect, nostalgic pricing table designs for your modern web applications."
      folder="Pricing"
    />
  );
}
