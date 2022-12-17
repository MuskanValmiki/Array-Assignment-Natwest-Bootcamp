# Selection Sort:-in selection sort we have to find min and then comepare in 
# right side then swap place of that element.
arr=[5,2,4,1,3]
result=[]
def selectionSort(arr,result):
    c=0
    for i in arr:
        c+=1
    if c==0:
        return ""
    else:
        j=arr.index(min(arr))
        arr[0],arr[j]=arr[j],arr[0]
        result=result(arr[0])
        return selectionSort(arr[1:],result)
selectionSort(arr,result)
print(result)