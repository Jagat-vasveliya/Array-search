const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const search = "5";
let flag = false;

/* with linear search algorithm */
function linearSearch() {
	// With for loop output time: 0.216s
	for (let index = 0; index < array.length; index++) {
		if (array[index] == search) {
			flag = true;
			console.log(search + " Found at " + index + " index");
			break;
		} else {
			flag = false;
		}
	}

	// With while loop output time: 0.183
	let index = 0;
	while (!flag && index < array.length) {
		if (array[index] == search) {
			flag = true;
			console.log(search + " Found at " + index + " index");
		} else {
			index++;
		}
	}
	if (!flag) {
		console.log(search + " Not Found");
	}
}

/* with binary search */
function binarySearch() {
	let first = 0;
	let last = array.length - 1;
	let middle;

	while (!flag && first <= last) {
		middle = Math.floor((first + last) / 2);
		if (array[middle] == search) {
			flag = true;
			console.log(search + " Found at " + middle + " index");
		} else if (array[middle] > search) {
			last = middle - 1;
		} else {
			first = middle + 1;
		}
	}
	if (!flag) {
		console.log(search + " Not Found");
	}
}
binarySearch();
