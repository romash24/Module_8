inputNumber = prompt('Введите число');

if (inputNumber == 'NaN') {
    console.log("Вы ввели NaN, не надо так")
} else {
    inputNumber = +inputNumber
    if (typeof inputNumber == 'number') {
        if (isNaN(inputNumber) == true) {
            console.log("Упс, кажется, вы ошиблись")
        } else if (inputNumber % 2 == 0) {
            console.log("Чётное!")
        } else {
            console.log("Нечётное!")
        }
    }
}