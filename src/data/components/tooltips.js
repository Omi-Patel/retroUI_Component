import StickyNoteTooltip from '../../components/Tooltips/StickyNoteTooltip';
import StickyNoteTooltipSrc from '../../components/Tooltips/StickyNoteTooltip.jsx?raw';
import SpeechBubbleTooltip from '../../components/Tooltips/SpeechBubbleTooltip';
import SpeechBubbleTooltipSrc from '../../components/Tooltips/SpeechBubbleTooltip.jsx?raw';
import TerminalTooltip from '../../components/Tooltips/TerminalTooltip';
import TerminalTooltipSrc from '../../components/Tooltips/TerminalTooltip.jsx?raw';
import PolaroidTooltip from '../../components/Tooltips/PolaroidTooltip';
import PolaroidTooltipSrc from '../../components/Tooltips/PolaroidTooltip.jsx?raw';

export const tooltipComponents = [
  {
    name: 'StickyNoteTooltip',
    component: StickyNoteTooltip,
    code: StickyNoteTooltipSrc,
  },
  {
    name: 'SpeechBubbleTooltip',
    component: SpeechBubbleTooltip,
    code: SpeechBubbleTooltipSrc,
  },
  {
    name: 'TerminalTooltip',
    component: TerminalTooltip,
    code: TerminalTooltipSrc,
  },
  {
    name: 'PolaroidTooltip',
    component: PolaroidTooltip,
    code: PolaroidTooltipSrc,
  },
];

export default tooltipComponents;
