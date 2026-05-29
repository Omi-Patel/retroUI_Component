import TicketStubPagination from '../../components/Paginations/TicketStubPagination';
import TicketStubPaginationSrc from '../../components/Paginations/TicketStubPagination.jsx?raw';
import PixelPagination from '../../components/Paginations/PixelPagination';
import PixelPaginationSrc from '../../components/Paginations/PixelPagination.jsx?raw';
import NewsprintPagination from '../../components/Paginations/NewsprintPagination';
import NewsprintPaginationSrc from '../../components/Paginations/NewsprintPagination.jsx?raw';
import NumberedPagination from '../../components/Paginations/NumberedPagination';
import NumberedPaginationSrc from '../../components/Paginations/NumberedPagination.jsx?raw';

export const paginationComponents = [
  {
    name: 'TicketStubPagination',
    component: TicketStubPagination,
    code: TicketStubPaginationSrc,
  },
  {
    name: 'PixelPagination',
    component: PixelPagination,
    code: PixelPaginationSrc,
  },
  {
    name: 'NewsprintPagination',
    component: NewsprintPagination,
    code: NewsprintPaginationSrc,
  },
  {
    name: 'NumberedPagination',
    component: NumberedPagination,
    code: NumberedPaginationSrc,
  },
];

export default paginationComponents;
