import FileDrawerSidebar from '../../components/Sidebars/FileDrawerSidebar';
import FileDrawerSidebarSrc from '../../components/Sidebars/FileDrawerSidebar.jsx?raw';
import SlideOutDrawer from '../../components/Sidebars/SlideOutDrawer';
import SlideOutDrawerSrc from '../../components/Sidebars/SlideOutDrawer.jsx?raw';
import BinderTabSidebar from '../../components/Sidebars/BinderTabSidebar';
import BinderTabSidebarSrc from '../../components/Sidebars/BinderTabSidebar.jsx?raw';
import TerminalTreeSidebar from '../../components/Sidebars/TerminalTreeSidebar';
import TerminalTreeSidebarSrc from '../../components/Sidebars/TerminalTreeSidebar.jsx?raw';

export const sidebarComponents = [
  {
    name: 'FileDrawerSidebar',
    component: FileDrawerSidebar,
    code: FileDrawerSidebarSrc,
  },
  {
    name: 'SlideOutDrawer',
    component: SlideOutDrawer,
    code: SlideOutDrawerSrc,
  },
  {
    name: 'BinderTabSidebar',
    component: BinderTabSidebar,
    code: BinderTabSidebarSrc,
  },
  {
    name: 'TerminalTreeSidebar',
    component: TerminalTreeSidebar,
    code: TerminalTreeSidebarSrc,
  },
];

export default sidebarComponents;
