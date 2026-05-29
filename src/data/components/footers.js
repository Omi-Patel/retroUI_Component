// Component imports
import BasicFooter from '../../components/Footers/BasicFooter';
import BasicFooterSrc from '../../components/Footers/BasicFooter.jsx?raw';
import BorderedFooter from '../../components/Footers/BorderedFooter';
import BorderedFooterSrc from '../../components/Footers/BorderedFooter.jsx?raw';
import ShadowFooter from '../../components/Footers/ShadowFooter';
import ShadowFooterSrc from '../../components/Footers/ShadowFooter.jsx?raw';
import ClassicFooter from '../../components/Footers/ClassicFooter';
import ClassicFooterSrc from '../../components/Footers/ClassicFooter.jsx?raw';
import NeonFooter from '../../components/Footers/NeonFooter';
import NeonFooterSrc from '../../components/Footers/NeonFooter.jsx?raw';
import PixelFooter from '../../components/Footers/PixelFooter';
import PixelFooterSrc from '../../components/Footers/PixelFooter.jsx?raw';

export const footerComponents = [
  {
    name: 'BasicFooter',
    component: BasicFooter,
    code: BasicFooterSrc,
  },
  {
    name: 'BorderedFooter',
    component: BorderedFooter,
    code: BorderedFooterSrc,
  },
  {
    name: 'ShadowFooter',
    component: ShadowFooter,
    code: ShadowFooterSrc,
  },
  {
    name: 'ClassicFooter',
    component: ClassicFooter,
    code: ClassicFooterSrc,
  },
  {
    name: 'NeonFooter',
    component: NeonFooter,
    code: NeonFooterSrc,
  },
  {
    name: 'PixelFooter',
    component: PixelFooter,
    code: PixelFooterSrc,
  },
];

export default footerComponents;
