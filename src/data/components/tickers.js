import BreakingNewsTicker from '../../components/Tickers/BreakingNewsTicker';
import BreakingNewsTickerSrc from '../../components/Tickers/BreakingNewsTicker.jsx?raw';
import StockTicker from '../../components/Tickers/StockTicker';
import StockTickerSrc from '../../components/Tickers/StockTicker.jsx?raw';
import EmojiRibbon from '../../components/Tickers/EmojiRibbon';
import EmojiRibbonSrc from '../../components/Tickers/EmojiRibbon.jsx?raw';

export const tickerComponents = [
  {
    name: 'BreakingNewsTicker',
    component: BreakingNewsTicker,
    code: BreakingNewsTickerSrc,
  },
  {
    name: 'StockTicker',
    component: StockTicker,
    code: StockTickerSrc,
  },
  {
    name: 'EmojiRibbon',
    component: EmojiRibbon,
    code: EmojiRibbonSrc,
  },
];

export default tickerComponents;
