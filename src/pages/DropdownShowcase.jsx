import { ComponentShowcasePage } from '../components/showcase';
import { dropdownComponents } from '../data/components/dropdowns';
import { showcaseThemes } from '../lib/theme';

const DropdownShowcase = () => {
  const theme = showcaseThemes.dropdowns;

  return (
    <ComponentShowcasePage
      components={dropdownComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default DropdownShowcase;
