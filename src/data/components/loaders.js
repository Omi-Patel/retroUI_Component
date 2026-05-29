// Component imports
import RetroLoader from '../../components/Loaders/RetroLoader';
import RetroLoaderSrc from '../../components/Loaders/RetroLoader.jsx?raw';
import RetroSpinner from '../../components/Loaders/RetroSpinner';
import RetroSpinnerSrc from '../../components/Loaders/RetroSpinner.jsx?raw';
import ThreeSpinner from '../../components/Loaders/ThreeSpinner';
import ThreeSpinnerSrc from '../../components/Loaders/ThreeSpinner.jsx?raw';
import ShadowSpinner from '../../components/Loaders/ShadowSpinner';
import ShadowSpinnerSrc from '../../components/Loaders/ShadowSpinner.jsx?raw';
import SequenceLoader from '../../components/Loaders/SequenceLoader';
import SequenceLoaderSrc from '../../components/Loaders/SequenceLoader.jsx?raw';
import BarsLoader from '../../components/Loaders/BarsLoader';
import BarsLoaderSrc from '../../components/Loaders/BarsLoader.jsx?raw';

export const loaderComponents = [
  {
    name: 'RetroLoader',
    component: RetroLoader,
    code: RetroLoaderSrc,
  },
  {
    name: 'CassetteLoader',
    component: RetroSpinner,
    code: RetroSpinnerSrc,
  },
  {
    name: 'ArcadeHeartsLoader',
    component: ThreeSpinner,
    code: ThreeSpinnerSrc,
  },
  {
    name: 'VinylLoader',
    component: ShadowSpinner,
    code: ShadowSpinnerSrc,
  },
  {
    name: 'SequenceLoader',
    component: SequenceLoader,
    code: SequenceLoaderSrc,
  },
  {
    name: 'BarsLoader',
    component: BarsLoader,
    code: BarsLoaderSrc,
  },
];

export default loaderComponents;
