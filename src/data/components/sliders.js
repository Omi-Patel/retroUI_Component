// Component imports
import VolumeSlider from '../../components/Sliders/VolumeSlider';
import VolumeSliderSrc from '../../components/Sliders/VolumeSlider.jsx?raw';
import SteppedSlider from '../../components/Sliders/SteppedSlider';
import SteppedSliderSrc from '../../components/Sliders/SteppedSlider.jsx?raw';
import DualRangeSlider from '../../components/Sliders/DualRangeSlider';
import DualRangeSliderSrc from '../../components/Sliders/DualRangeSlider.jsx?raw';
import VerticalFader from '../../components/Sliders/VerticalFader';
import VerticalFaderSrc from '../../components/Sliders/VerticalFader.jsx?raw';
import TickSlider from '../../components/Sliders/TickSlider';
import TickSliderSrc from '../../components/Sliders/TickSlider.jsx?raw';

export const sliderComponents = [
  { name: 'VolumeSlider', component: VolumeSlider, code: VolumeSliderSrc },
  { name: 'SteppedSlider', component: SteppedSlider, code: SteppedSliderSrc },
  { name: 'DualRangeSlider', component: DualRangeSlider, code: DualRangeSliderSrc },
  { name: 'VerticalFader', component: VerticalFader, code: VerticalFaderSrc },
  { name: 'TickSlider', component: TickSlider, code: TickSliderSrc },
];

export default sliderComponents;
