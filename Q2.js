// # mean in arr
// arr=[15,25,35,45,55]
// c=0
// s=0
// for i in arr:
//     s+=i
//     c+=1
// print("mean",s/c)

// # median in arr
// arr=[3,13,2,34,11,26,47]
// c=0
// for i in arr:
//     c+=1
// if c%2!=0:
//     for i in range(c):
//         for j in range(i+1,c):
//             if arr[i]>arr[j]:
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//     l=c//2
//     print(arr[l])
// else:
//     for i in range(c):
//         for j in range(i+1,c):
//             if arr[i]>arr[j]:
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//     l=c//2
//     print((arr[l]+arr[l+1])/2)
    
// # mode in arr
// arr=[3,2,4,6,2,1,2,1]
// d={}
// for i in arr:
//     if i in d:
//         d[i]+=1
//     else:
//         d[i]=1
// maximum=0
// for key in d:
//     if maximum<d[key]:
//         maximum=d[key]
//         temp=key
// print(temp)
 
// mean
var arr=[15,25,35,45,55]
var c=0
var s=0
for (var i in arr){
  s+=arr[i]
  c+=1
}
console.log("mean",s/c)

// median
var arr=[3,13,2,34,11,26,47]
var c=0
for (var i in arr){
  c+=1
}
if (c%2!=0){
  for (var i in arr){
    for (var j in arr){
      if (arr[i]>arr[j]){
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
    }
  }
  console.log(arr[parseInt(c/2)])
}
else{
  for (var i in arr){
    for (var j in arr){
      if (arr[i]>arr[j]){
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
    }
  }
  console.log(arr[parseInt(c/2)]+arr[parseInt(c/2)+1]/2)
}

// mode 
// arr=[3,2,4,6,2,1,2,1]
// d={}
// for i in arr:
//     if i in d:
//         d[i]+=1
//     else:
//         d[i]=1
// maximum=0
// for key in d:
//     if maximum<d[key]:
//         maximum=d[key]
//         temp=key
// print(temp)