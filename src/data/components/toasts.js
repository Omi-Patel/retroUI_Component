import StickerToast from '../../components/Toasts/StickerToast';
import StickerToastSrc from '../../components/Toasts/StickerToast.jsx?raw';
import ReceiptToast from '../../components/Toasts/ReceiptToast';
import ReceiptToastSrc from '../../components/Toasts/ReceiptToast.jsx?raw';
import TerminalToast from '../../components/Toasts/TerminalToast';
import TerminalToastSrc from '../../components/Toasts/TerminalToast.jsx?raw';
import NewsprintToast from '../../components/Toasts/NewsprintToast';
import NewsprintToastSrc from '../../components/Toasts/NewsprintToast.jsx?raw';

export const toastComponents = [
  {
    name: 'StickerToast',
    component: StickerToast,
    code: StickerToastSrc,
  },
  {
    name: 'ReceiptToast',
    component: ReceiptToast,
    code: ReceiptToastSrc,
  },
  {
    name: 'TerminalToast',
    component: TerminalToast,
    code: TerminalToastSrc,
  },
  {
    name: 'NewsprintToast',
    component: NewsprintToast,
    code: NewsprintToastSrc,
  },
];

export default toastComponents;
