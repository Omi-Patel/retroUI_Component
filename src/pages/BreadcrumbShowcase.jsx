import { ComponentShowcasePage } from '../components/showcase';
import { breadcrumbComponents } from '../data/components/breadcrumbs';
import { showcaseThemes } from '../lib/theme';

const BreadcrumbShowcase = () => {
  const theme = showcaseThemes.breadcrumbs;

  return (
    <ComponentShowcasePage
      components={breadcrumbComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default BreadcrumbShowcase;
