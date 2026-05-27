import { ComponentShowcasePage } from '../components/showcase';
import { tableComponents } from '../data/components/tables';

export default function TableShowcase() {
  return (
    <ComponentShowcasePage
      components={tableComponents}
      title="Table"
      description="Pixel-perfect, nostalgic table designs for your modern web applications."
      folder="Tables"
    />
  );
}
