//solution

//Swap every element O(n) time complexity
function unshiftOptimal(arr,num){
	for(var i = arr.length; i >=0 ;i--){
		arr[i] = arr[i-1];
	}
	arr[0] = num;
}

//creating new array, O(n) time complexity, but uses N space
function unshiftDuplicateArr(arr,num){
    var newArray = [num];

    for(var i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}





