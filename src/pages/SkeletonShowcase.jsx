import { ComponentShowcasePage } from '../components/showcase';
import { skeletonComponents } from '../data/components/skeletons';
import { showcaseThemes } from '../lib/theme';

const SkeletonShowcase = () => {
  const theme = showcaseThemes.skeletons;

  return (
    <ComponentShowcasePage
      components={skeletonComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default SkeletonShowcase;
