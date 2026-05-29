import TypewriterBreadcrumb from '../../components/Breadcrumbs/TypewriterBreadcrumb';
import TypewriterBreadcrumbSrc from '../../components/Breadcrumbs/TypewriterBreadcrumb.jsx?raw';
import ArrowBreadcrumb from '../../components/Breadcrumbs/ArrowBreadcrumb';
import ArrowBreadcrumbSrc from '../../components/Breadcrumbs/ArrowBreadcrumb.jsx?raw';
import PixelBreadcrumb from '../../components/Breadcrumbs/PixelBreadcrumb';
import PixelBreadcrumbSrc from '../../components/Breadcrumbs/PixelBreadcrumb.jsx?raw';
import RetroPathBreadcrumb from '../../components/Breadcrumbs/RetroPathBreadcrumb';
import RetroPathBreadcrumbSrc from '../../components/Breadcrumbs/RetroPathBreadcrumb.jsx?raw';

export const breadcrumbComponents = [
  {
    name: 'TypewriterBreadcrumb',
    component: TypewriterBreadcrumb,
    code: TypewriterBreadcrumbSrc,
  },
  {
    name: 'ArrowBreadcrumb',
    component: ArrowBreadcrumb,
    code: ArrowBreadcrumbSrc,
  },
  {
    name: 'PixelBreadcrumb',
    component: PixelBreadcrumb,
    code: PixelBreadcrumbSrc,
  },
  {
    name: 'RetroPathBreadcrumb',
    component: RetroPathBreadcrumb,
    code: RetroPathBreadcrumbSrc,
  },
];

export default breadcrumbComponents;
