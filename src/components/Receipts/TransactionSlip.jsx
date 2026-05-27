const TransactionSlip = () => {
  return (
    <div className="relative inline-block w-72 bg-[#fefbf2] text-stone-800 font-mono border border-stone-300 shadow-[5px_5px_0_0_rgba(0,0,0,0.18)]">
      <div className="px-5 py-4 text-center border-b border-stone-300">
        <p className="text-[10px] tracking-[0.25em] text-stone-500">
          MERCHANT COPY
        </p>
        <h3 className="text-[14px] font-bold tracking-widest mt-1">
          RETROUI CORNER STORE
        </h3>
        <p className="text-[10px] text-stone-500 mt-0.5">
          1995 Main St · Anytown, USA
        </p>
      </div>

      <div className="px-5 py-4 text-[12px] space-y-1.5">
        <div className="flex justify-between">
          <span className="text-stone-500">DATE</span>
          <span>05/27/26 14:32</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">CARD</span>
          <span>**** **** **** 4242</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">AUTH #</span>
          <span>008142</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">REF</span>
          <span>TX-0042-981</span>
        </div>

        <div className="my-2 border-t border-dashed border-stone-400" />

        <div className="flex justify-between text-[15px] font-bold">
          <span>AMOUNT</span>
          <span>$24.50</span>
        </div>
      </div>

      <div className="px-5 pb-4 relative">
        {/* APPROVED stamp */}
        <div className="absolute -right-1 top-2 rotate-[-12deg] border-[2.5px] border-double border-green-700 text-green-700 px-3 py-0.5 text-[12px] font-bold tracking-[0.18em]">
          APPROVED
        </div>
        <p className="text-[10px] text-stone-500 mt-8">
          Signature on file. No customer signature required.
        </p>
      </div>
    </div>
  );
};

export default TransactionSlip;
