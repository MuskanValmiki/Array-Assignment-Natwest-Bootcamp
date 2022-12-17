arr=[3,6, 7, 5, 10]
s=12
n=0
for i in arr:
    n+=1
for j in range(0,n):
    for k in range(j+1,n):
        if arr[j]+arr[k]==s:
            print(arr[j],arr[k])

