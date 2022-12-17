# sorted union -we can take both array element but if there
# is any element which is same in both array so we take only 
# once any store in new array.
arr1=[1,2,3,2,5,2]
arr2=[5,7,1,3,9,8]
arr=[]
for i in arr1:
    arr=arr+[i]

for j in arr2:
    arr=arr+[j]

length=0    
for e in arr:
    length+=1
    
for i in range(0,length):
    d=0
    for j in range(0,i):
        if arr[i]==arr[j]:
            d=1
            break
    if d==0:
        print(arr[i])
        
# sotred intersection -common in both array 
arr1=[1,2,3,2,5,2]
arr2=[5,7,1,3,9,8]
common=[]
for i in arr1:
    for j in arr2:
        if i==j:
            common=common+[i]
print(common)

