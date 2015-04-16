
var arrayOne = [8, 7, 6, 5, 4, 3, 2, 1];
var arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8,];
var arrayThree = [2, 3, 4, 5, 6, 7, 8, 9];
var arrayFour = [9, 8, 7, 6, 5, 4, 3, 2];
var arrayFive = [1, 3, 5, 7, 9, 1, 3, 5];
var arraySix = [2, 4, 6, 8, 2, 4, 6, 8];

var masterArray = [arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive, arraySix];

function doubleLoop(array){
	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array[i].length; j++){
			array[i][j] = addOne(array[i][j]);
			array[i][j] = multiplyTwo(array[i][j]);
			console.log(array[i][j]);
		}
	}return array;
}

function addOne(array){
	array += 1;
	return array;
}

function multiplyTwo(array){
	array *= 2;
	return array;
}

masterArray = doubleLoop(masterArray);
