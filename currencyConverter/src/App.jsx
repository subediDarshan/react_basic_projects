import { useState, useEffect, useCallback } from 'react'
import {Input} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(0);

  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')


  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo)

  const convert = () => {
    setTo((from*currencyInfo[toCurrency]).toFixed(2))
  }

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
 

  return (
    <>
      <div className='w-screen h-screen flex justify-center bg-opacity-5' style={{background: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

        <div className='w-full lg:w-3/6 bg-white/70 backdrop-blur-sm h-3/6 my-36 rounded-xl shadow-2xl flex flex-col items-center justify-between p-5'>

          <div className='text-3xl font-bold '>Currency Converter</div>

          <Input label={'From'} amount={from} currencyType={fromCurrency} setAmount={setFrom} amountChangeDisable={false} options={options} setCurrencyType={setFromCurrency} />

          <button 
          className='bg-blue-500 rounded-lg w-1/5 py-1 text-white text-lg'
          onClick={swap}
          >
            Swap
          </button>

          <Input label={'To'} amount={to} currencyType={toCurrency} amountChangeDisable={true} options={options} setCurrencyType={setToCurrency} />
          
          <button 
          onClick={convert}
          className='bg-blue-500 rounded-lg w-3/4 py-2 text-white text-lg '>Convert</button>


        </div>

      </div>
    </>
  )
}

export default App
