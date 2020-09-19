//1
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));



//2
function pow(x, n) {
    if (x >= 1 && Number.isInteger(x)) {
        return x ** n;
    } else {
        return false;
    }
}

console.log(pow(3, 5));




//3


function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(5));




//4 

function deleteChars(str) {
    let strSplit;
    for (let i = 0; i < str.length; i++) {
        strSplit = str.split('');
        strSplit[0] = "";
        strSplit[str.length - 1] = "";
    }
    str = strSplit.join("");
    return str;
}



console.log(deleteChars('afsddd'));


//5

function convertFloor(floor) {
    if (floor <= -1 || floor >= 14) {
        return floor;
    } else if (floor >= 0 && floor != 12) {
        return floor + 1;
    } else if (floor == 12) {
        return floor + 2;
    } else if (floor === -12) {
        return floor - 2;
    }

}

console.log(convertFloor(-1));
console.log(convertFloor(2));
console.log(convertFloor(2));
console.log(convertFloor(0));
console.log(convertFloor(12));
console.log(convertFloor(14));

6

function convertType(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            return 'error';
    }
}

console.log(convertType('my string ', 'boolean'));


let convertType2 = function (value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            return 'error';
    }
}

console.log(convertType2(12, 'string'));

let convertType3 = ((value, toType) => {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            return 'error';
    }
});

console.log(convertType3(12, 'string'));


function transformArray(arr, index1, index2, adding) {
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    for (let i = 0; i < arr.length; i++) {
        arr[i] += adding;
    }
    return arr;
}

console.log(transformArray(['fing', 'lip', 'trip', 'vel'], 0, 2, 'gray'));



// function digitalRoot(n) {
//     let sum = 0;
//     do {
//         let string = String(n);
//         let array = string.split('');

//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];
//             console.log(sum);
//         }
//         console.log(sum);
//     } while (sum > 9);
//     return sum;
// }



function digitalRoot(value) {
    let sum = 0;
    do {
        sum += value % 10;
        value = Math.floor(value / 10);
    } while (value !== 0);
    return sum;
}

console.log(digitalRoot(12839108239));