# In binarySearch we have to sort the array and then check
# whether element is present in array or not ?
# It is same like we have to divide into like merge sort.
# It gave the find element index like where it is present.

arr=[1,2,3,4,5,6,7,8,9,10]
number=7
def BinarySearch(arr,start,end,number):
    if start<=end:
        mid=start+(end-start)//2
        if arr[mid]==number:
            return mid
        elif arr[mid]>number:
            return BinarySearch(arr,start,mid-1,number)
        elif arr[mid]<number:
            return BinarySearch(arr,mid+1,end,number)
        else:
            return "Element is not there."
c=0
for i in arr:
    c+=1
print(BinarySearch(arr,0,c-1,number))