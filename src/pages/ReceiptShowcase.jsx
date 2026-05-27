import { ComponentShowcasePage } from '../components/showcase';
import { receiptComponents } from '../data/components/receipts';
import { showcaseThemes } from '../lib/theme';

const ReceiptShowcase = () => {
  const theme = showcaseThemes.receipts;

  return (
    <ComponentShowcasePage
      components={receiptComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default ReceiptShowcase;
