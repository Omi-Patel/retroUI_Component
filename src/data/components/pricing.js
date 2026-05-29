// Component imports
import BasicPricing from '../../components/Pricing/Pricing';
import BasicPricingSrc from '../../components/Pricing/Pricing.jsx?raw';
import PricingRetro3D from '../../components/Pricing/PricingRetro3D';
import PricingRetro3DSrc from '../../components/Pricing/PricingRetro3D.jsx?raw';
import PricingRetroVibrant from '../../components/Pricing/PricingRetroVibrant';
import PricingRetroVibrantSrc from '../../components/Pricing/PricingRetroVibrant.jsx?raw';

export const pricingComponents = [
  {
    name: 'BasicPricing',
    component: BasicPricing,
    code: BasicPricingSrc,
  },
  {
    name: 'PricingRetro3D',
    component: PricingRetro3D,
    code: PricingRetro3DSrc,
  },
  {
    name: 'PricingRetroVibrant',
    component: PricingRetroVibrant,
    code: PricingRetroVibrantSrc,
  },
];

export default pricingComponents;
