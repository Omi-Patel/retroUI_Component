import { ComponentShowcasePage } from '../components/showcase';
import { modalComponents } from '../data/components/modals';
import { showcaseThemes } from '../lib/theme';

const ModalShowcase = () => {
  const theme = showcaseThemes.modals;

  return (
    <ComponentShowcasePage
      components={modalComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default ModalShowcase;
