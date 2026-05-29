import NewsprintAlert from '../../components/Alerts/NewsprintAlert';
import NewsprintAlertSrc from '../../components/Alerts/NewsprintAlert.jsx?raw';
import StampAlert from '../../components/Alerts/StampAlert';
import StampAlertSrc from '../../components/Alerts/StampAlert.jsx?raw';
import TerminalAlert from '../../components/Alerts/TerminalAlert';
import TerminalAlertSrc from '../../components/Alerts/TerminalAlert.jsx?raw';
import MarqueeAlert from '../../components/Alerts/MarqueeAlert';
import MarqueeAlertSrc from '../../components/Alerts/MarqueeAlert.jsx?raw';

export const alertComponents = [
  {
    name: 'NewsprintAlert',
    component: NewsprintAlert,
    code: NewsprintAlertSrc,
  },
  {
    name: 'StampAlert',
    component: StampAlert,
    code: StampAlertSrc,
  },
  {
    name: 'TerminalAlert',
    component: TerminalAlert,
    code: TerminalAlertSrc,
  },
  {
    name: 'MarqueeAlert',
    component: MarqueeAlert,
    code: MarqueeAlertSrc,
  },
];

export default alertComponents;
