let arr = [1, 1, 1, 1, 1, 1, 1, 1, 2];
let sameArr;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
        sameArr = true
    } else {
        sameArr = false;
        break
    }
}

console.log(sameArr);