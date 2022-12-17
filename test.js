// const ages = [32, 33, 16, 40];
// ages.map(function(element, index, array){
// 	console.log(this) // 80
// }, 80);

// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   if(age >= 33){
//     console.log(age)
//   }
// }
// checkAdult(ages)

// function fact(num){
//    if (num===0 || num===1){
//      return 1
//    }
//    else{
//     return num*fact(num-1)
//    }
// }
// console.log(fact(5))

// function fib(s){
//     if(s==0){
//         return 0
//     }
//     else if(s==1){
//         return 1
//     }
//     else{
//         return fib(s-1)+fib(s-2)
//     }
// }
// for (var i=0;i<5;i++){
//      console.log(fib(i))   
// }

// var arr=["a","b","c","a","a"]
// function fun(arr){
//     return arr.filter((item,index)=>
//         arr.indexOf(item)===index);    
// }
// console.log(fun(arr))

// const callApi =async ()=>{
//     const response =await fetch(`https://fakestoreapi.com/products`)
//     const data =await response.json()
//     console.log(data)  
// }
// callApi()

// const arr = [{id: 1, name: 'mussu'},{id: 1, name: 'mussu'},{id: 2, name: 'akku'},{id: 2, name: 'akku'},];
//   const uniqueIds = [];
//   const unique = arr.filter(element => {
//     const isDuplicate = uniqueIds.includes(element.id);
//     if (!isDuplicate) {
//       uniqueIds.push(element.id);
//       return true;
//     }
//     return false;
//   });
// console.log(unique);
















