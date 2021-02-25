import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['razzak', 'alamgir', 'manna','joshim'];
  const products =[
    {name: "Adobe PhotoShop", price: "$100"},
    {name: "Adobe Illustrator", price: "$50"},
    {name: "Adobe Premiere", price: "$250"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a react Person</h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>) 
        }
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
 return(
  <div>
  <h3>Dynamic Users: {users.length}</h3>
  <ul>
    {
      users.map(user => <li>{user.name}</li>)
    }
  </ul>
  </div>
 );  
}
function Counter(){
  const [count, setCount] = useState(0);
  const  handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Product(props){
  return (
    <div style={{border: '2px solid cyan',margin:'10px',width:'300px'}}>
      <h1>{props.product.name}</h1>
      <p>{props.product.price}</p>
      <button>BUY NOW</button>
    </div>
  )
}
export default App;
