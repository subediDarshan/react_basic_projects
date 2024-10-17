import Card from "./components/Card"
import {ThemeContextProvider} from './context/ThemeContext.jsx'

function App() {
  

  return (
    <>
    <div className="w-screen h-screen bg-slate-700 text-white flex justify-center items-center">
      <ThemeContextProvider>
        <Card />
      </ThemeContextProvider>
    </div>
    </>
  )
}

export default App
