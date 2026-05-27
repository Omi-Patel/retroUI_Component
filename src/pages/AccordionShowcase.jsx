import { ComponentShowcasePage } from '../components/showcase';
import { accordionComponents } from '../data/components/accordions';
import { showcaseThemes } from '../lib/theme';

const AccordionShowcase = () => {
  const theme = showcaseThemes.accordions;

  return (
    <ComponentShowcasePage
      components={accordionComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default AccordionShowcase;
