// Component imports
import BasicSwitch from '../../components/Switch/BasicSwitch';
import BasicSwitchSrc from '../../components/Switch/BasicSwitch.jsx?raw';
import BorderedSwitch from '../../components/Switch/BorderedSwitch';
import BorderedSwitchSrc from '../../components/Switch/BorderedSwitch.jsx?raw';
import GlowSwitch from '../../components/Switch/GlowSwitch';
import GlowSwitchSrc from '../../components/Switch/GlowSwitch.jsx?raw';
import IconSwitch from '../../components/Switch/IconSwitch';
import IconSwitchSrc from '../../components/Switch/IconSwitch.jsx?raw';
import LabeledSwitch from '../../components/Switch/LabeledSwitch';
import LabeledSwitchSrc from '../../components/Switch/LabeledSwitch.jsx?raw';

export const switchComponents = [
  {
    name: 'BasicSwitch',
    component: BasicSwitch,
    code: BasicSwitchSrc,
  },
  {
    name: 'BorderedSwitch',
    component: BorderedSwitch,
    code: BorderedSwitchSrc,
  },
  {
    name: 'GlowSwitch',
    component: GlowSwitch,
    code: GlowSwitchSrc,
  },
  {
    name: 'IconSwitch',
    component: IconSwitch,
    code: IconSwitchSrc,
  },
  {
    name: 'LabeledSwitch',
    component: LabeledSwitch,
    code: LabeledSwitchSrc,
  },
];

export default switchComponents;
