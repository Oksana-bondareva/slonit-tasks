function mySlice(arr, start, end) {
    const resultArray = [];

    for (let i = arr[start]; i < arr[end]; i++) {
        if (i >= arr.length) break;
        resultArray.push(i);
    }
    return resultArray;
}

mySlice([1,2,3,4,5,6,7,8,9,10], 1, 4) //[ 2, 3, 4 ]


function myIndexOf(arr, item, from) {
    for (let i = from; i <= arr.length; i++) {
        if(arr[i] === item) {
            return i;
        }
    }
    return -1;
}

myIndexOf([1,2,3,4,5,6,7,8,9,10], 2, 4) //-1
myIndexOf([1,2,3,4,5,6,7,8,9,10], 5, 1) //4


function myIncludes(arr, item, from) {
    for (let i = from; i <= arr.length; i++) {
        if(arr[i] === item) {
            return true;
        }
    }
    return false;
}

myIncludes([1,2,3,4,5,6,7,8,9,10], 2, 4) //false
myIncludes([1,2,3,4,5,6,7,8,9,10], 5, 1) //true