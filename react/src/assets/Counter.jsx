
import {useState} from 'react';


function Counter() {
    const [count, setcount] = useState(0)
    
   let handleCount=()=>{
       setcount(count+1)
      
   }
  return (
    <>
    <button onClick={handleCount}>Count {count}</button>




    </>
  )
}

export default Counter
