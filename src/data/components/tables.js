// Component imports
import BasicTable from '../../components/Tables/BasicTable';
import BasicTableSrc from '../../components/Tables/BasicTable.jsx?raw';
import EcommerceTable from '../../components/Tables/EcommerceTable';
import EcommerceTableSrc from '../../components/Tables/EcommerceTable.jsx?raw';
import StripedTable from '../../components/Tables/StripedTable';
import StripedTableSrc from '../../components/Tables/StripedTable.jsx?raw';
import AnimatedTable from '../../components/Tables/AnimatedTable';
import AnimatedTableSrc from '../../components/Tables/AnimatedTable.jsx?raw';
import BlogTable from '../../components/Tables/BlogTable';
import BlogTableSrc from '../../components/Tables/BlogTable.jsx?raw';

export const tableComponents = [
  {
    name: 'NewsprintTable',
    component: BasicTable,
    code: BasicTableSrc,
  },
  {
    name: 'EcommerceTable',
    component: EcommerceTable,
    code: EcommerceTableSrc,
  },
  {
    name: 'StripedTable',
    component: StripedTable,
    code: StripedTableSrc,
  },
  {
    name: 'AnimatedTable',
    component: AnimatedTable,
    code: AnimatedTableSrc,
  },
  {
    name: 'BlogTable',
    component: BlogTable,
    code: BlogTableSrc,
  },
];

export default tableComponents;
