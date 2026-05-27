import { ComponentShowcasePage } from '../components/showcase';
import { tabsComponents } from '../data/components/tabs';
import { showcaseThemes } from '../lib/theme';

const TabsShowcase = () => {
  const theme = showcaseThemes.tabs;

  return (
    <ComponentShowcasePage
      components={tabsComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default TabsShowcase;
