import { ComponentShowcasePage } from '../components/showcase';
import { stickyNoteComponents } from '../data/components/stickyNotes';
import { showcaseThemes } from '../lib/theme';

const StickyNoteShowcase = () => {
  const theme = showcaseThemes.stickyNotes;

  return (
    <ComponentShowcasePage
      components={stickyNoteComponents}
      theme={theme}
      title={theme.name}
      description={theme.description}
      folder={theme.folder}
    />
  );
};

export default StickyNoteShowcase;
