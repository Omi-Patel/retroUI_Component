// Component imports
import RetroNavbar from '../../components/Navbars/RetroNavbar';
import RetroNavbarSrc from '../../components/Navbars/RetroNavbar.jsx?raw';
import RetroNavbar1 from '../../components/Navbars/RetroNavbar1';
import RetroNavbar1Src from '../../components/Navbars/RetroNavbar1.jsx?raw';
import NeonNavbar from '../../components/Navbars/NeonNavbar';
import NeonNavbarSrc from '../../components/Navbars/NeonNavbar.jsx?raw';
import PixelNavbar from '../../components/Navbars/PixelNavbar';
import PixelNavbarSrc from '../../components/Navbars/PixelNavbar.jsx?raw';
import GradientNavbar from '../../components/Navbars/GradientNavbar';
import GradientNavbarSrc from '../../components/Navbars/GradientNavbar.jsx?raw';

export const navbarComponents = [
  {
    name: 'RetroNavbar',
    component: RetroNavbar,
    code: RetroNavbarSrc,
  },
  {
    name: 'RetroNavbar1',
    component: RetroNavbar1,
    code: RetroNavbar1Src,
  },
  {
    name: 'NeonNavbar',
    component: NeonNavbar,
    code: NeonNavbarSrc,
  },
  {
    name: 'PixelNavbar',
    component: PixelNavbar,
    code: PixelNavbarSrc,
  },
  {
    name: 'NewsprintNavbar',
    component: GradientNavbar,
    code: GradientNavbarSrc,
  },
];

export default navbarComponents;
