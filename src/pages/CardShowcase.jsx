import { ComponentShowcasePage } from '../components/showcase';
import { cardComponents } from '../data/components/cards';
import { showcaseThemes } from '../lib/theme';

const CardShowcase = () => {
  const theme = showcaseThemes.cards;
  
  return (
    <ComponentShowcasePage
      components={cardComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default CardShowcase;
