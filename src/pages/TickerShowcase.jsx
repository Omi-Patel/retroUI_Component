import { ComponentShowcasePage } from '../components/showcase';
import { tickerComponents } from '../data/components/tickers';
import { showcaseThemes } from '../lib/theme';

const TickerShowcase = () => {
  const theme = showcaseThemes.tickers;

  return (
    <ComponentShowcasePage
      components={tickerComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default TickerShowcase;
