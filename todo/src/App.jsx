import {InputForm, TodoComponent} from './components/index'
import {useTodo} from './contexts/index'



function App() {

  const {todos, setTodos} = useTodo()

  return (
    <>
      <div className='min-w-full  min-h-screen bg-slate-700 text-white flex flex-col items-center p-5'>
        <div className='text-4xl font-bold'>Manage your TODOs</div>
        <div className='mt-10 w-1/2 lg:w-1/4'>
          {/* input form and submit form */}
          <InputForm />
        </div>
        <div className='w-3/4 lg:w-1/2 mt-16 flex flex-wrap gap-y-4'>
          {/* list of todos by looping over the TODO Component */}
          {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
              <TodoComponent todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
