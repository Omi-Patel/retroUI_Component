import CartReceipt from '../../components/Receipts/CartReceipt';
import CartReceiptSrc from '../../components/Receipts/CartReceipt.jsx?raw';
import OrderReceipt from '../../components/Receipts/OrderReceipt';
import OrderReceiptSrc from '../../components/Receipts/OrderReceipt.jsx?raw';
import TransactionSlip from '../../components/Receipts/TransactionSlip';
import TransactionSlipSrc from '../../components/Receipts/TransactionSlip.jsx?raw';
import ReturnSlip from '../../components/Receipts/ReturnSlip';
import ReturnSlipSrc from '../../components/Receipts/ReturnSlip.jsx?raw';

export const receiptComponents = [
  {
    name: 'CartReceipt',
    component: CartReceipt,
    code: CartReceiptSrc,
  },
  {
    name: 'OrderReceipt',
    component: OrderReceipt,
    code: OrderReceiptSrc,
  },
  {
    name: 'TransactionSlip',
    component: TransactionSlip,
    code: TransactionSlipSrc,
  },
  {
    name: 'ReturnSlip',
    component: ReturnSlip,
    code: ReturnSlipSrc,
  },
];

export default receiptComponents;
