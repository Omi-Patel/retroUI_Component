import EmptyDrawerState from '../../components/EmptyStates/EmptyDrawerState';
import EmptyDrawerStateSrc from '../../components/EmptyStates/EmptyDrawerState.jsx?raw';
import StaticTVEmptyState from '../../components/EmptyStates/StaticTVEmptyState';
import StaticTVEmptyStateSrc from '../../components/EmptyStates/StaticTVEmptyState.jsx?raw';
import EmptyMailboxState from '../../components/EmptyStates/EmptyMailboxState';
import EmptyMailboxStateSrc from '../../components/EmptyStates/EmptyMailboxState.jsx?raw';
import NoResultsClassified from '../../components/EmptyStates/NoResultsClassified';
import NoResultsClassifiedSrc from '../../components/EmptyStates/NoResultsClassified.jsx?raw';

export const emptyStateComponents = [
  {
    name: 'EmptyDrawerState',
    component: EmptyDrawerState,
    code: EmptyDrawerStateSrc,
  },
  {
    name: 'StaticTVEmptyState',
    component: StaticTVEmptyState,
    code: StaticTVEmptyStateSrc,
  },
  {
    name: 'EmptyMailboxState',
    component: EmptyMailboxState,
    code: EmptyMailboxStateSrc,
  },
  {
    name: 'NoResultsClassified',
    component: NoResultsClassified,
    code: NoResultsClassifiedSrc,
  },
];

export default emptyStateComponents;
