
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}


function App() {

const FriendsPromise = fetchFriends()

const postPromise = fetchPosts();


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
       <Players></Players>
         
       <Suspense fallback={<h4>Posts are coming soon!</h4>}>
       <Posts postPromise={postPromise}></Posts>
       </Suspense>


      <Suspense fallback={<h3>Loading.....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>


      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
      <Friends friendsPromise={FriendsPromise}></Friends>
      </Suspense>

  
     <button onClick={handleClick}>Click me!</button>
     <button onClick={function handleClick2(){
       alert('clicked2')
     }}>Click Me2</button>

      <button onClick={() => alert('click4')}>Click Me4</button>

      
    </>
  )
}

export default App
