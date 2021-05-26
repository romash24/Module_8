let arr = [1, 2, 4, -8, null, NaN, undefined, 0, 'Что-то'];

getAmountNums(arr);

function getAmountNums(array) {
    let numOdd = 0,
        numEven = 0,
        numNull = 0,
        numOther = 0;

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            numOther++;
        } else {
            if (array[i] == 0 || arr[i] == null) {
                numNull++;
            } else if (array[i] % 2 == 0) {
                numEven++;
            } else {
                numOdd++;
            }
        }
    }

    return console.log(`Количество четных записей: ${numEven}`), console.log(`Количество нечетных записей: ${numOdd}`), console.log(`Количество нулевых записей: ${numNull}`), console.log(`Количество других записей: ${numOther}`);
}