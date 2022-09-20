import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Mobile', price: 20000 },
    { name: 'Watch', price: 15000 },
    { name: 'Trimmer', price: 1000 },
    { name: 'Monitor', price: 15000 },
  ]
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name='laptop' price='5000'></Product>
      <Product name='Mobile' price='15000'></Product> */}
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>

    </div>
  );
}
// function Product(props) {
//   return (
//     <div className='product'>
//       <h2>Product Name: {props.name} </h2>
//       <h4>Price: {props.price} </h4>
//     </div>
//   )
// }

function Counter() {
  //const abc = useState(10);
  // console.log(abc) //it print an array, first element is the initial value and the second element is a function
  const [count, setCount] = useState(10)

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h2>Count:{count} </h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users {users.length}</h2>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
}
function Users(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h2>Name:{props.name} </h2>
      <h4>Email:{props.email} </h4>
    </div>
  )
}

export default App;
