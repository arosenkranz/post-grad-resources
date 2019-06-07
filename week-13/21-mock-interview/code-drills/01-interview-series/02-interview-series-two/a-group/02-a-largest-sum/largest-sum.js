function maxSumTwoConsecutive(arr){
    var maxSum = Number.MIN_SAFE_INTEGER
    // Alternatively you could say `maxSum = -100000000`
    for(var i =1;i<arr.length;i++){
        if(arr[i-1]+arr[i]>maxSum)
            maxSum=arr[i-1]+arr[i]
    }
    return maxSum
}

console.log(maxSumTwoConsecutive([18,7,1,2,20,9]))