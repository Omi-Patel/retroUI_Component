import { ComponentShowcasePage } from '../components/showcase';
import { loaderComponents } from '../data/components/loaders';
import { showcaseThemes } from '../lib/theme';

const LoaderShowcase = () => {
  const theme = showcaseThemes.loaders;
  
  return (
    <ComponentShowcasePage
      components={loaderComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default LoaderShowcase;
