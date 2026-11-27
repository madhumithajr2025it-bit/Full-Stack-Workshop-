
/*We can apply styles in two methods
1. Making it globally and implementing the styles in index.css
2. Using inline styles inside the division*/
function Card(props) {
  return (
    <>
     <div style={{border:"solid black 1px",
     borderRadius:"10px",
     width:"250px",
     

     }}>
      <img width = {240}  src={props.image} alt="movie"/>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
     </div>



    </>
  )
}

export default Card
