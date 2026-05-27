import { ComponentShowcasePage } from '../components/showcase';
import { toastComponents } from '../data/components/toasts';
import { showcaseThemes } from '../lib/theme';

const ToastShowcase = () => {
  const theme = showcaseThemes.toasts;

  return (
    <ComponentShowcasePage
      components={toastComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default ToastShowcase;
