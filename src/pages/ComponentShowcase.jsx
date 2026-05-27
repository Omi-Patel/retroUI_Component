import { ComponentShowcasePage } from '../components/showcase';
import { buttonComponents } from '../data/components/buttons';
import { showcaseThemes } from '../lib/theme';

const ButtonShowcase = () => {
  const theme = showcaseThemes.buttons;
  
  return (
    <ComponentShowcasePage
      components={buttonComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default ButtonShowcase;
