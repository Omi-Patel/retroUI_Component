import { ComponentShowcasePage } from '../components/showcase';
import { paginationComponents } from '../data/components/paginations';
import { showcaseThemes } from '../lib/theme';

const PaginationShowcase = () => {
  const theme = showcaseThemes.paginations;

  return (
    <ComponentShowcasePage
      components={paginationComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default PaginationShowcase;
