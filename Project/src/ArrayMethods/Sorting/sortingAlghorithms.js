function generateArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 99));
    }
    return array;
}

function calculateTime(size, callback) {
    const startTime = performance.now();

    callback(generateArray(size))

    const endTime = performance.now();
    console.log(`Time: ${endTime - startTime}ms`)
}

function quickSort(array) {
    if (array.length < 2) return array;

    const left = [];
    const right = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}