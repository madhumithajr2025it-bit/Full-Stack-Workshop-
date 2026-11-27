async function getfact(){
    let response =await fetch('https://meowfacts.herokuapp.com/');      
    let finalresponse = await response.json() 
     // convert json into js format. json is asynchronous operation so use await.
    document.getElementById('box').innerText=finalresponse.data[0]
     console.log(finalresponse.data[0])                
    /*this method is used for http request . 
     it has two methods
    1. Built-in method - fetch(it is not a part of javascript) :
     it has two arguments => 1-API request , 2- which type of http request should perform by default it is get request.
    await works if it contains a asynchronous operations. if you found any asynchronous operation you can put await.
    if the data sends to the server it stores in json format
    
    
    */
}