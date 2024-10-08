import { useState } from "react"


function App() {
  let [color, setColor] = useState("#334155")

  return (
    
    <div className="h-screen w-full"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-around items-center inset-x-5 px-4 bg-slate-400 rounded-2xl h-36 ">
        
      <div className="h-28 w-14" onClick={() => setColor("#f87171")}>
        <div className="bg-red-400 h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">Red</div>
      </div>
      <div className="h-28 w-14" onClick={() => setColor("#60a5fa")}>
        <div className="bg-blue-400  h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">Blue</div>
      </div>
      <div className="h-28 w-14" onClick={() => setColor("#ffffff")}>
        <div className="bg-white  h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">White</div>
      </div>
      <div className="h-28 w-14 " onClick={() => setColor("#000000")}>
        <div className="bg-black  h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">Black</div>
      </div>
      <div className="h-28 w-14" onClick={() => setColor("#facc15")}>
        <div className="bg-yellow-400  h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">Yellow</div>
      </div>
      <div className="h-28 w-14" onClick={() => setColor("#22c55e")}>
        <div className="bg-green-500  h-16 border-solid border-2 border-black"></div>
        <div className="flex justify-center items-center py-3">Green</div>
      </div>



      </div>
    </div>
    
  )
}

export default App
