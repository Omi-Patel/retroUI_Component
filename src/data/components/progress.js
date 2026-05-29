import VHSProgress from '../../components/Progress/VHSProgress';
import VHSProgressSrc from '../../components/Progress/VHSProgress.jsx?raw';
import HalftoneProgress from '../../components/Progress/HalftoneProgress';
import HalftoneProgressSrc from '../../components/Progress/HalftoneProgress.jsx?raw';
import ArcadeProgress from '../../components/Progress/ArcadeProgress';
import ArcadeProgressSrc from '../../components/Progress/ArcadeProgress.jsx?raw';
import PixelProgress from '../../components/Progress/PixelProgress';
import PixelProgressSrc from '../../components/Progress/PixelProgress.jsx?raw';

export const progressComponents = [
  {
    name: 'VHSProgress',
    component: VHSProgress,
    code: VHSProgressSrc,
  },
  {
    name: 'HalftoneProgress',
    component: HalftoneProgress,
    code: HalftoneProgressSrc,
  },
  {
    name: 'ArcadeProgress',
    component: ArcadeProgress,
    code: ArcadeProgressSrc,
  },
  {
    name: 'PixelProgress',
    component: PixelProgress,
    code: PixelProgressSrc,
  },
];

export default progressComponents;
