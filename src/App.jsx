import './App.css'
import Header from './components/Header'
import Beranda from './pages/Beranda'

let todoList = [
  {
    desc: 'belajar react',
    priority: 'high',
    status: 'todo',
  },
]

const addTodoList = (desc, priority) => {
  todoList = [
    {
      desc,
      priority,
      status: 'todo',
    },
    ...todoList
  ]
}

const editTodoList = (index, data) => {
  todoList[index] = {
    ...todoList[index],
    ...data,
  }
}

const deleteTodoList = (indexParams) => {
  todoList = todoList.filter((_, index) => index !== indexParams)
}


addTodoList('makan', 'low')
console.log('after add')
console.log(todoList)
editTodoList(1, {desc:"makan nasi goreng", priority:"low", status:"todo"})
console.log('after edit')
console.log(todoList)
deleteTodoList(0)
console.log('after delete')
console.log(todoList)

function App() {
  return (
    <>
      <Header/>
      <Beranda>
      </Beranda>
    </>
  )
}

export default App
