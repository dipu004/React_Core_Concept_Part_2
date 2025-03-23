
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {

function handleClick(){
  alert('Iam clicked')

// const handleAdd5 = (num) => {
//      const newNum = num + 5;
//      alert(newNum)
// }

}

  return (
    <>
   
      <h3>Vite + React</h3> 
       <Batsman></Batsman>
       <Counter></Counter>
      

     <button onClick={handleClick}>Click me!</button>
     <button onClick={function handleClick2(){
       alert('clicked2')
     }}>Click Me2</button>

      <button onClick={() => alert('click4')}>Click Me4</button>

      
    </>
  )
}

export default App
