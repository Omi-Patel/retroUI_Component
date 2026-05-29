import FoldedPaperAccordion from '../../components/Accordions/FoldedPaperAccordion';
import FoldedPaperAccordionSrc from '../../components/Accordions/FoldedPaperAccordion.jsx?raw';
import RetroFAQAccordion from '../../components/Accordions/RetroFAQAccordion';
import RetroFAQAccordionSrc from '../../components/Accordions/RetroFAQAccordion.jsx?raw';
import TerminalAccordion from '../../components/Accordions/TerminalAccordion';
import TerminalAccordionSrc from '../../components/Accordions/TerminalAccordion.jsx?raw';
import StickyNoteAccordion from '../../components/Accordions/StickyNoteAccordion';
import StickyNoteAccordionSrc from '../../components/Accordions/StickyNoteAccordion.jsx?raw';

export const accordionComponents = [
  {
    name: 'FoldedPaperAccordion',
    component: FoldedPaperAccordion,
    code: FoldedPaperAccordionSrc,
  },
  {
    name: 'RetroFAQAccordion',
    component: RetroFAQAccordion,
    code: RetroFAQAccordionSrc,
  },
  {
    name: 'TerminalAccordion',
    component: TerminalAccordion,
    code: TerminalAccordionSrc,
  },
  {
    name: 'StickyNoteAccordion',
    component: StickyNoteAccordion,
    code: StickyNoteAccordionSrc,
  },
];

export default accordionComponents;
