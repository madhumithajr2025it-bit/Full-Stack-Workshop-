/*this ecom and ecom1 file contains the real world example for async,await,and (map,filter) functions
 daisy ui - for ui libraries*/

 async function products(){
       let response = await fetch("https://desistore.stackrel.com/products")
       let finalresponse = await response.json()
       console.log(finalresponse);
       document.getElementById('box').innerHTML=finalresponse.map((n)=>{
            return `<div >
            <img src=${n.image}  alt=" ">
            <P>${n.title} </p>
            <p>${n.price} </p>
            </div>`

       })
 }
 products();