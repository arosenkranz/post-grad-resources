var arraySize = 50;

// Case #2 - Large set of numbers
//var arraySize = 40000 

var array = [];
for (var index = 0; index < arraySize; index++) {
	var randomNumber = Math.round(Math.random()*arraySize);

	array.push(randomNumber);
}

function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function selectionSort(items) {

	var len = items.length;
	var min;

	for(var i = 0; i < len; i++) {
		//set minimum index to this position
		min = i;

		//see if any other number in the array is smaller than this one
		for(var j = i+1; j <len; j++) {
			if(items[j] < items[min]) {
				min = j;
			}
		}

		//if current position isn't minimum, swap the numbers
		if (i !== min) {
			swap(items, i, min);
		}
	}

	return items;
}

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));