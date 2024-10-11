import React from 'react'

function Input({
    label,
    amount,
    currencyType,
    setAmount,
    amountChangeDisable
}) {
  return (
    <>
        <div className='flex justify-between bg-white text-black w-3/4 rounded-lg p-2 h-1/4'>
            <div className='flex flex-col justify-between'>
                <div>{label}</div>
                <div>{/* amount */}
                    <input type="number" value={amount} 
                    onChange={(e) => setAmount && setAmount(Number(e.target.value))}
                    disabled={amountChangeDisable}
                    className='bg-slate-50 w-1/2 rounded-lg py-1 px-2'/>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <div>Currency Type</div>
                <div>{currencyType}</div>
            </div>
        </div>
    
    </>
  )
}

export default Input