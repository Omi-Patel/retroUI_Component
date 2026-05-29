import StampBadge from '../../components/Badges/StampBadge';
import StampBadgeSrc from '../../components/Badges/StampBadge.jsx?raw';
import StickerBadge from '../../components/Badges/StickerBadge';
import StickerBadgeSrc from '../../components/Badges/StickerBadge.jsx?raw';
import PriceTagBadge from '../../components/Badges/PriceTagBadge';
import PriceTagBadgeSrc from '../../components/Badges/PriceTagBadge.jsx?raw';
import PixelBadge from '../../components/Badges/PixelBadge';
import PixelBadgeSrc from '../../components/Badges/PixelBadge.jsx?raw';
import TerminalBadge from '../../components/Badges/TerminalBadge';
import TerminalBadgeSrc from '../../components/Badges/TerminalBadge.jsx?raw';

export const badgeComponents = [
  {
    name: 'StampBadge',
    component: StampBadge,
    code: StampBadgeSrc,
  },
  {
    name: 'StickerBadge',
    component: StickerBadge,
    code: StickerBadgeSrc,
  },
  {
    name: 'PriceTagBadge',
    component: PriceTagBadge,
    code: PriceTagBadgeSrc,
  },
  {
    name: 'PixelBadge',
    component: PixelBadge,
    code: PixelBadgeSrc,
  },
  {
    name: 'TerminalBadge',
    component: TerminalBadge,
    code: TerminalBadgeSrc,
  },
];

export default badgeComponents;
