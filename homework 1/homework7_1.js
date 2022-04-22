let arr = [1,2,3,4,5,6,7,8,9,10];
debugger;
let result = arr.filter((n)=>{
   return n%2 == 0
})
console.log(result)


result = result.map( n =>{
    return n*1000
})
console.log(result)