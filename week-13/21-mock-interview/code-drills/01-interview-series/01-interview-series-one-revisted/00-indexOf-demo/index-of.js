function indexof(arr, element){
    for(var i =0;i<arr.length;i++){
        if(arr[i] === element)
            return i;
    }
    return -1;
}

console.log(indexof([1,2,3,4],3))