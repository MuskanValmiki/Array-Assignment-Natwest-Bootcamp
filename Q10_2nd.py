# insertion sort:-in insertion sort we have to make key then compare all 
# the element of left side.key should be max if it is greater so we can 
# compare then swap in place or left.
def insertion_sort(arr):
    c=0
    for i in arr:
        c+=1
    if c<=1:
        return
    insertion_sort(arr,c-1)
    end=arr[c-1] 
    i=c-2
    while(i>=0 and arr[i]>end):
        arr[i+1]=arr[i]
        i=i-1
    arr[i+1]=end
    return arr
array=[9, 1, 7, 3, 5]
print(insertion_sort(array))