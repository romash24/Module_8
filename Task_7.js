let arr = [1, 2, 4, -8, null, NaN, undefined, 0, 'Что-то'];
let numOdd = 0,
    numEven = 0,
    numNull = 0,
    numOther = 0;

for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        numOther++;
    } else {
        if (arr[i] == 0 || arr[i] == null) {
            numNull++;
        } else if (arr[i] % 2 == 0) {
            numEven++;
        } else {
            numOdd++;
        }
    }
}

console.log('Количество четных записей: ' + numEven);
console.log('Количество нечетных записей: ' + numOdd);
console.log('Количество нулевых записей: ' + numNull);
console.log('Количество других записей: ' + numOther);