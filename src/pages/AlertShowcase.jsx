import { ComponentShowcasePage } from '../components/showcase';
import { alertComponents } from '../data/components/alerts';
import { showcaseThemes } from '../lib/theme';

const AlertShowcase = () => {
  const theme = showcaseThemes.alerts;

  return (
    <ComponentShowcasePage
      components={alertComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default AlertShowcase;
