// Component imports
import NewsprintBarChart from '../../components/Charts/NewsprintBarChart';
import NewsprintBarChartSrc from '../../components/Charts/NewsprintBarChart.jsx?raw';
import ASCIILineChart from '../../components/Charts/ASCIILineChart';
import ASCIILineChartSrc from '../../components/Charts/ASCIILineChart.jsx?raw';
import HalftonePieChart from '../../components/Charts/HalftonePieChart';
import HalftonePieChartSrc from '../../components/Charts/HalftonePieChart.jsx?raw';
import LedgerAreaChart from '../../components/Charts/LedgerAreaChart';
import LedgerAreaChartSrc from '../../components/Charts/LedgerAreaChart.jsx?raw';

export const chartComponents = [
  {
    name: 'NewsprintBarChart',
    component: NewsprintBarChart,
    code: NewsprintBarChartSrc,
  },
  {
    name: 'ASCIILineChart',
    component: ASCIILineChart,
    code: ASCIILineChartSrc,
  },
  {
    name: 'HalftonePieChart',
    component: HalftonePieChart,
    code: HalftonePieChartSrc,
  },
  {
    name: 'LedgerAreaChart',
    component: LedgerAreaChart,
    code: LedgerAreaChartSrc,
  },
];

export default chartComponents;
