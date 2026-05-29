import PolaroidCard from '../../components/Polaroids/PolaroidCard';
import PolaroidCardSrc from '../../components/Polaroids/PolaroidCard.jsx?raw';
import PolaroidDeck from '../../components/Polaroids/PolaroidDeck';
import PolaroidDeckSrc from '../../components/Polaroids/PolaroidDeck.jsx?raw';
import PolaroidStrip from '../../components/Polaroids/PolaroidStrip';
import PolaroidStripSrc from '../../components/Polaroids/PolaroidStrip.jsx?raw';
import InstantFrame from '../../components/Polaroids/InstantFrame';
import InstantFrameSrc from '../../components/Polaroids/InstantFrame.jsx?raw';

export const polaroidComponents = [
  {
    name: 'PolaroidCard',
    component: PolaroidCard,
    code: PolaroidCardSrc,
  },
  {
    name: 'PolaroidDeck',
    component: PolaroidDeck,
    code: PolaroidDeckSrc,
  },
  {
    name: 'PolaroidStrip',
    component: PolaroidStrip,
    code: PolaroidStripSrc,
  },
  {
    name: 'InstantFrame',
    component: InstantFrame,
    code: InstantFrameSrc,
  },
];

export default polaroidComponents;
