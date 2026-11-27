import {useState,useEffect} from 'react';
import './App.css'
import Card from './assets/Card'
//import product from './assets/product'
//import Counter from './assets/Counter'

function App() {
   const [product, setproduct] = useState([])
   let count=0
useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((product) => setproduct(product));


},[count])


   fetch("https://desistore.stackrel.com/products")
  .then((res) => res.json())
  .then((product) => setproduct(product));

  return (
    <>
    <div style={{
      display:"flex",
      gap:"50px",
      flexWrap:"wrap",
      justifyContent:"space-evenly"
    }}>
 {
    product.map((n)=>
    {
      return <Card image = {n.image} title = {n.title}  price = {n.price}/>
    })

 }  
 <Counter/>             
    </div>  
    </>
    
  )
}

export default App
