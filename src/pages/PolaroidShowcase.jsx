import { ComponentShowcasePage } from '../components/showcase';
import { polaroidComponents } from '../data/components/polaroids';
import { showcaseThemes } from '../lib/theme';

const PolaroidShowcase = () => {
  const theme = showcaseThemes.polaroids;

  return (
    <ComponentShowcasePage
      components={polaroidComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default PolaroidShowcase;
