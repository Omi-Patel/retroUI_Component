import PostIt from '../../components/StickyNotes/PostIt';
import PostItSrc from '../../components/StickyNotes/PostIt.jsx?raw';
import IndexCard from '../../components/StickyNotes/IndexCard';
import IndexCardSrc from '../../components/StickyNotes/IndexCard.jsx?raw';
import TapedMemo from '../../components/StickyNotes/TapedMemo';
import TapedMemoSrc from '../../components/StickyNotes/TapedMemo.jsx?raw';
import PinnedNote from '../../components/StickyNotes/PinnedNote';
import PinnedNoteSrc from '../../components/StickyNotes/PinnedNote.jsx?raw';

export const stickyNoteComponents = [
  {
    name: 'PostIt',
    component: PostIt,
    code: PostItSrc,
  },
  {
    name: 'IndexCard',
    component: IndexCard,
    code: IndexCardSrc,
  },
  {
    name: 'TapedMemo',
    component: TapedMemo,
    code: TapedMemoSrc,
  },
  {
    name: 'PinnedNote',
    component: PinnedNote,
    code: PinnedNoteSrc,
  },
];

export default stickyNoteComponents;
