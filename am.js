//array methods
//push , pop , shift , unshift , map , filter

let numbers = [1,2,3,4];
numbers.push(5);    // inserting element into an array in the last index
console.log(numbers);

numbers.pop();    // last element will be deleted
console.log(numbers);

numbers.unshift(0);   //insert element at the 0th index
console.log(numbers);

numbers.shift();    // delete the 0th index
console.log(numbers); 

for(let i=0;i<numbers.length;i++){
    numbers[i] = numbers[i]*2;
}
console.log(numbers);

//or
// map is used to take an element to the function it process the operation and returns the result.It's a replacement for (for loop).
// Instead of for loop we can use the map
let res = numbers.map((n)=>{
    return n*2;
})
console.log(res);

let num = [1,2,3,4,5,6,7,8,9,10]
// filter function 
let rem = num.filter((n)=>{
    return n%2==1
})
console.log(rem);