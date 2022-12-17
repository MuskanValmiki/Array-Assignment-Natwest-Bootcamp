// arr=[4,7,1,9,13]
// j=-1
// new_arr=[]
// for i in arr:
//     new_arr=arr[j]
//     j-=1
//     print(new_arr)

// arr=[4,7,1,9,13]
// new_arr=[]
// for i in arr:
//     new_arr=[i]+new_arr
// print(new_arr)

// arr=[4,7,1,9,13]
// j=-1
// data=""
// for i in arr:
//     data+=str(arr[j])
//     j-=1
// print(data)


var arr=[4,7,1,9,13]
var new_arr=[]
for (var i in arr){
    new_arr=arr[i]+new_arr
}
console.log(new_arr)