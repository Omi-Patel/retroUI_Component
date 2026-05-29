import IndexCardTabs from '../../components/Tabs/IndexCardTabs';
import IndexCardTabsSrc from '../../components/Tabs/IndexCardTabs.jsx?raw';
import CassetteTabs from '../../components/Tabs/CassetteTabs';
import CassetteTabsSrc from '../../components/Tabs/CassetteTabs.jsx?raw';
import FileFolderTabs from '../../components/Tabs/FileFolderTabs';
import FileFolderTabsSrc from '../../components/Tabs/FileFolderTabs.jsx?raw';
import PixelTabs from '../../components/Tabs/PixelTabs';
import PixelTabsSrc from '../../components/Tabs/PixelTabs.jsx?raw';

export const tabsComponents = [
  {
    name: 'IndexCardTabs',
    component: IndexCardTabs,
    code: IndexCardTabsSrc,
  },
  {
    name: 'CassetteTabs',
    component: CassetteTabs,
    code: CassetteTabsSrc,
  },
  {
    name: 'FileFolderTabs',
    component: FileFolderTabs,
    code: FileFolderTabsSrc,
  },
  {
    name: 'PixelTabs',
    component: PixelTabs,
    code: PixelTabsSrc,
  },
];

export default tabsComponents;
