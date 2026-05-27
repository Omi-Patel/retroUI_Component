import { ComponentShowcasePage } from '../components/showcase';
import { tooltipComponents } from '../data/components/tooltips';
import { showcaseThemes } from '../lib/theme';

const TooltipShowcase = () => {
  const theme = showcaseThemes.tooltips;

  return (
    <ComponentShowcasePage
      components={tooltipComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default TooltipShowcase;
