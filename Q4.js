// duplicate
// arr=[4,1,9,8,1,7,3,1]
// d={}
// for i in arr:
//     if i in d:
//         d[i]+=1
//     else:
//         d[i]=1
// print(d)

var arr=[4,1,9,8,1,7,3,1]
var d={}
for (var i in arr){
    if (i in d){
        d[arr[i]]+=1
    }
    else{
        d[arr[i]]=1
    }
}
console.log(d)