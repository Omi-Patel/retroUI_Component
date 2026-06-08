// Component imports
import KPIStatCard from '../../components/Stats/KPIStatCard';
import KPIStatCardSrc from '../../components/Stats/KPIStatCard.jsx?raw';
import MetricTrendCard from '../../components/Stats/MetricTrendCard';
import MetricTrendCardSrc from '../../components/Stats/MetricTrendCard.jsx?raw';
import GaugeBlock from '../../components/Stats/GaugeBlock';
import GaugeBlockSrc from '../../components/Stats/GaugeBlock.jsx?raw';
import LeaderboardBlock from '../../components/Stats/LeaderboardBlock';
import LeaderboardBlockSrc from '../../components/Stats/LeaderboardBlock.jsx?raw';

export const statComponents = [
  {
    name: 'KPIStatCard',
    component: KPIStatCard,
    code: KPIStatCardSrc,
  },
  {
    name: 'MetricTrendCard',
    component: MetricTrendCard,
    code: MetricTrendCardSrc,
  },
  {
    name: 'GaugeBlock',
    component: GaugeBlock,
    code: GaugeBlockSrc,
  },
  {
    name: 'LeaderboardBlock',
    component: LeaderboardBlock,
    code: LeaderboardBlockSrc,
  },
];

export default statComponents;
