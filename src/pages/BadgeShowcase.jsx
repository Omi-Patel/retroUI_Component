import { ComponentShowcasePage } from '../components/showcase';
import { badgeComponents } from '../data/components/badges';
import { showcaseThemes } from '../lib/theme';

const BadgeShowcase = () => {
  const theme = showcaseThemes.badges;

  return (
    <ComponentShowcasePage
      components={badgeComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default BadgeShowcase;
