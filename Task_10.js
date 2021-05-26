let num = prompt('Введите число до 1000');
num = +num;
console.log(checkPrimeNum(num));

function checkPrimeNum(number) {
    if (number > 1000) {
        return 'Данные неверны';
    } else if (number === 0 || number === 1) {
        return '0 и 1 не являются простыми числами';
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return 'Не простое число';
            }
        }
        return 'Число простое!';
    }
}