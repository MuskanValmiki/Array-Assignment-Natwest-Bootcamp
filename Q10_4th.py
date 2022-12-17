# In queck sort we can take any of list element base then compare which one is smaller than that come 
# left and which one is greater that comes right .till we did not get one element we can divide and at 
# last we get sorted list.

arr=[12,25,6,35,45,5,68,30]
def queck_sort(arr,start,end):
    if len(arr)<=0:
        return 0
    else:
        base_case=0
        left=[]
        right=[]
        if base_case>arr[start]:
            left.append(arr[start])
            return queck_sort(arr,start+1,end)
        else:
            right.append(arr[start])
            return queck_sort(arr,start-1,end)
print(queck_sort(arr,0,len(arr)))
# half