import NewspaperTimeline from '../../components/Timelines/NewspaperTimeline';
import NewspaperTimelineSrc from '../../components/Timelines/NewspaperTimeline.jsx?raw';
import TicketStubTimeline from '../../components/Timelines/TicketStubTimeline';
import TicketStubTimelineSrc from '../../components/Timelines/TicketStubTimeline.jsx?raw';
import TerminalLogTimeline from '../../components/Timelines/TerminalLogTimeline';
import TerminalLogTimelineSrc from '../../components/Timelines/TerminalLogTimeline.jsx?raw';
import PackageTrackingTimeline from '../../components/Timelines/PackageTrackingTimeline';
import PackageTrackingTimelineSrc from '../../components/Timelines/PackageTrackingTimeline.jsx?raw';

export const timelineComponents = [
  {
    name: 'NewspaperTimeline',
    component: NewspaperTimeline,
    code: NewspaperTimelineSrc,
  },
  {
    name: 'TicketStubTimeline',
    component: TicketStubTimeline,
    code: TicketStubTimelineSrc,
  },
  {
    name: 'TerminalLogTimeline',
    component: TerminalLogTimeline,
    code: TerminalLogTimelineSrc,
  },
  {
    name: 'PackageTrackingTimeline',
    component: PackageTrackingTimeline,
    code: PackageTrackingTimelineSrc,
  },
];

export default timelineComponents;
