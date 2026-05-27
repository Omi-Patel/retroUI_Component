import { ComponentShowcasePage } from '../components/showcase';
import { switchComponents } from '../data/components/switches';
import { showcaseThemes } from '../lib/theme';

const SwitchShowcase = () => {
  const theme = showcaseThemes.switches;
  
  return (
    <ComponentShowcasePage
      components={switchComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default SwitchShowcase;
