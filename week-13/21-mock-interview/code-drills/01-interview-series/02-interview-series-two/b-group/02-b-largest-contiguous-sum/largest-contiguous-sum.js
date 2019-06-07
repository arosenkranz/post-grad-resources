function LargestContiguousSum(arr){

    var maxsum=[];   //keeps track of maximum contiguous sum starting at each index
    for(var i =0;i<arr.length;i++){
        sum =0;
        maxsum[i]=arr[i];
        for(var j=i;j<arr.length;j++){  //starting at index i, find maximum contiguos sum
            sum = sum+arr[j]
            if(maxsum[i]<sum)
                maxsum[i]=sum;
        }
    }
    //maxsum is an array that contains maximum contigiuos sums starting at index i in the original array
    return findMax(maxsum); //find maximum sum from array of max sums
}

function findMax(arr){
    var max= arr[0];
    for(var i =0;i<arr.length;i++){
        if(max<arr[i])
            max=arr[i]
    }
    return max;
}

console.log(LargestContiguousSum([2,5,-1,3,-10,9,7,4]));

//time complexity O(n^2)