import React, {useId} from 'react'

function Input({
    label,
    amount,
    currencyType,
    setCurrencyType,
    setAmount,
    amountChangeDisable,
    options
}) {

    const id = useId();

  return (
    <>
        <div className='flex justify-between bg-white text-black w-3/4 rounded-lg p-2 h-1/4'>
            <div className='flex flex-col justify-between'>
                <div><label htmlFor="id">{label}</label></div>
                <div>
                    <input 
                    type="number" 
                    value={amount || ''} 
                    id={id}
                    onChange={(e) => setAmount && setAmount(e.target.value === ''? '':Number(e.target.value))}
                    disabled={amountChangeDisable}
                    className='bg-slate-50 w-1/2 rounded-lg py-1 px-2'/>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <div>Currency Type</div>
                <div>
                    <select 
                    value={currencyType}
                    className='bg-slate-50 py-1 px-6 rounded-lg'
                    onChange={(e) => (setCurrencyType(e.target.value))}
                    >
                        {options.map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Input