import './App.css'
import Header from './components/Header'
import Beranda from './pages/Beranda'
// import store from './store/todo'

// let todoList = [
//   {
//     desc: 'belajar react',
//     priority: 'high',
//     dueDate: '2022-01-01',
//     status: 'done',
//   },
//   {
//     desc: 'Study react',
//     priority: 'high',
//     dueDate: '2022-01-01',
//     status: 'todo',
//   },
// ]


function App() {
  return (
    <>
      <Header/>
      {/* <Beranda todoList={todoList}/> */}
      <Beranda/>
    </>
  )
}

export default App
