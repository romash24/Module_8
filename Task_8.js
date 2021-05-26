let myMap = new Map();
myMap.set(1, 'Один');
myMap.set('Два', 2);
myMap.set(true, false);
myMap.set(NaN, 'НаН');

for (let [key, value] of myMap) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}