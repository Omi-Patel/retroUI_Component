import NewsprintModal from '../../components/Modals/NewsprintModal';
import NewsprintModalSrc from '../../components/Modals/NewsprintModal.jsx?raw';
import TornPaperModal from '../../components/Modals/TornPaperModal';
import TornPaperModalSrc from '../../components/Modals/TornPaperModal.jsx?raw';
import TerminalModal from '../../components/Modals/TerminalModal';
import TerminalModalSrc from '../../components/Modals/TerminalModal.jsx?raw';
import PolaroidModal from '../../components/Modals/PolaroidModal';
import PolaroidModalSrc from '../../components/Modals/PolaroidModal.jsx?raw';

export const modalComponents = [
  {
    name: 'NewsprintModal',
    component: NewsprintModal,
    code: NewsprintModalSrc,
  },
  {
    name: 'TornPaperModal',
    component: TornPaperModal,
    code: TornPaperModalSrc,
  },
  {
    name: 'TerminalModal',
    component: TerminalModal,
    code: TerminalModalSrc,
  },
  {
    name: 'PolaroidModal',
    component: PolaroidModal,
    code: PolaroidModalSrc,
  },
];

export default modalComponents;
