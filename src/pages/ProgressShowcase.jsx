import { ComponentShowcasePage } from '../components/showcase';
import { progressComponents } from '../data/components/progress';
import { showcaseThemes } from '../lib/theme';

const ProgressShowcase = () => {
  const theme = showcaseThemes.progress;

  return (
    <ComponentShowcasePage
      components={progressComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default ProgressShowcase;
