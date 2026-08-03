import RetroOSWindow from '../../components/Windows/RetroOSWindow';
import RetroOSWindowSrc from '../../components/Windows/RetroOSWindow.jsx?raw';
import TerminalWindow from '../../components/Windows/TerminalWindow';
import TerminalWindowSrc from '../../components/Windows/TerminalWindow.jsx?raw';
import BrowserWindow95 from '../../components/Windows/BrowserWindow95';
import BrowserWindow95Src from '../../components/Windows/BrowserWindow95.jsx?raw';
import AlertDialog98 from '../../components/Windows/AlertDialog98';
import AlertDialog98Src from '../../components/Windows/AlertDialog98.jsx?raw';

export const windowComponents = [
  {
    name: 'RetroOSWindow',
    component: RetroOSWindow,
    code: RetroOSWindowSrc,
  },
  {
    name: 'TerminalWindow',
    component: TerminalWindow,
    code: TerminalWindowSrc,
  },
  {
    name: 'BrowserWindow95',
    component: BrowserWindow95,
    code: BrowserWindow95Src,
  },
  {
    name: 'AlertDialog98',
    component: AlertDialog98,
    code: AlertDialog98Src,
  },
];

export default windowComponents;
