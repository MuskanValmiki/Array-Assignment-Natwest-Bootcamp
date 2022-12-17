# Bubble sort assending
def BubbleSort(arr,n):
    if n!=0:
        for i in range(0,n-1):
            if arr[i]>arr[i+1]:
                arr[i],arr[i+1]=arr[i+1],arr[i]
            else:
                BubbleSort(arr,n-1)
arr=[15,78,3,6,8,35,98]
n=7
BubbleSort(arr,n)
print(arr)