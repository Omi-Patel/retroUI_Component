import TypewriterTextarea from '../../components/Textareas/TypewriterTextarea';
import TypewriterTextareaSrc from '../../components/Textareas/TypewriterTextarea.jsx?raw';
import TelegramTextarea from '../../components/Textareas/TelegramTextarea';
import TelegramTextareaSrc from '../../components/Textareas/TelegramTextarea.jsx?raw';
import StickyNoteTextarea from '../../components/Textareas/StickyNoteTextarea';
import StickyNoteTextareaSrc from '../../components/Textareas/StickyNoteTextarea.jsx?raw';
import TerminalTextarea from '../../components/Textareas/TerminalTextarea';
import TerminalTextareaSrc from '../../components/Textareas/TerminalTextarea.jsx?raw';

export const textareaComponents = [
  {
    name: 'TypewriterTextarea',
    component: TypewriterTextarea,
    code: TypewriterTextareaSrc,
  },
  {
    name: 'TelegramTextarea',
    component: TelegramTextarea,
    code: TelegramTextareaSrc,
  },
  {
    name: 'StickyNoteTextarea',
    component: StickyNoteTextarea,
    code: StickyNoteTextareaSrc,
  },
  {
    name: 'TerminalTextarea',
    component: TerminalTextarea,
    code: TerminalTextareaSrc,
  },
];

export default textareaComponents;
