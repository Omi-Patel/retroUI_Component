import NewsprintSkeleton from '../../components/Skeletons/NewsprintSkeleton';
import NewsprintSkeletonSrc from '../../components/Skeletons/NewsprintSkeleton.jsx?raw';
import ShimmerSkeleton from '../../components/Skeletons/ShimmerSkeleton';
import ShimmerSkeletonSrc from '../../components/Skeletons/ShimmerSkeleton.jsx?raw';
import PixelSkeleton from '../../components/Skeletons/PixelSkeleton';
import PixelSkeletonSrc from '../../components/Skeletons/PixelSkeleton.jsx?raw';
import TerminalSkeleton from '../../components/Skeletons/TerminalSkeleton';
import TerminalSkeletonSrc from '../../components/Skeletons/TerminalSkeleton.jsx?raw';

export const skeletonComponents = [
  {
    name: 'NewsprintSkeleton',
    component: NewsprintSkeleton,
    code: NewsprintSkeletonSrc,
  },
  {
    name: 'ShimmerSkeleton',
    component: ShimmerSkeleton,
    code: ShimmerSkeletonSrc,
  },
  {
    name: 'PixelSkeleton',
    component: PixelSkeleton,
    code: PixelSkeletonSrc,
  },
  {
    name: 'TerminalSkeleton',
    component: TerminalSkeleton,
    code: TerminalSkeletonSrc,
  },
];

export default skeletonComponents;
