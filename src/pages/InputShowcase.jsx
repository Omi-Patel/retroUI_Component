import { ComponentShowcasePage } from '../components/showcase';
import { inputComponents } from '../data/components/inputs';
import { showcaseThemes } from '../lib/theme';

const InputShowcase = () => {
  const theme = showcaseThemes.inputs;
  
  return (
    <ComponentShowcasePage
      components={inputComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default InputShowcase;
