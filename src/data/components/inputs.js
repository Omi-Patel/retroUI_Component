import BasicInput from '../../components/Inputs/BasicInput';
import BasicInputSrc from '../../components/Inputs/BasicInput.jsx?raw';
import OutlineInput from '../../components/Inputs/OutlineInput';
import OutlineInputSrc from '../../components/Inputs/OutlineInput.jsx?raw';
import NeonInput from '../../components/Inputs/NeonInput';
import NeonInputSrc from '../../components/Inputs/NeonInput.jsx?raw';
import FocusedInput from '../../components/Inputs/FocusedInput';
import FocusedInputSrc from '../../components/Inputs/FocusedInput.jsx?raw';
import RoundedInput from '../../components/Inputs/RoundedInput';
import RoundedInputSrc from '../../components/Inputs/RoundedInput.jsx?raw';

export const inputComponents = [
  {
    name: 'TypewriterInput',
    component: BasicInput,
    code: BasicInputSrc,
  },
  {
    name: 'TerminalInput',
    component: OutlineInput,
    code: OutlineInputSrc,
  },
  {
    name: 'NeonInput',
    component: NeonInput,
    code: NeonInputSrc,
  },
  {
    name: 'StickyNoteInput',
    component: RoundedInput,
    code: RoundedInputSrc,
  },
  {
    name: 'IndexCardInput',
    component: FocusedInput,
    code: FocusedInputSrc,
  },
];

export default inputComponents;
