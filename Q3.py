arr=[3, 6, 7, 5, 10]
k=3
c=0
for i in arr:
    c+=1
for i in range(0,c):
    if i<k:
        print(arr[c+i-k])
    else:
        print(arr[i-k])

  
   
        