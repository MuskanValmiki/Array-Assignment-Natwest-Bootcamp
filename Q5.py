# merge two sorted array into one single sorted array
arr1=[1,3,5,7,9]
arr2=[2,4,6,8,10]
arr3=[]
for i in arr1:
    arr3=arr3+[i]
for j in arr2:
    arr3=arr3+[j]
c=0
for p in arr3:
    c+=1
for i in range(c):
         for j in range(i+1,c):
            if arr3[i]>arr3[j]:
                 temp=arr3[i]
                 arr3[i]=arr3[j]
                 arr3[j]=temp
print(arr3)