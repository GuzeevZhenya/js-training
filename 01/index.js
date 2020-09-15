function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')

        } else {
            console.log(i);
        }
    }
}

fizzBuzz(17);


function toNumber(value) {
    let a = Number(value)
    if (isNaN(a)) {
        return 'Нельзя преобразовать в число';
    } else {
        return a;
    }
}

console.log(toNumber('123wef'));


function createUser(name, age, height, weight) {

    let runInfo, voleyballInfo, videoGamesInfo;
    if (weight < 100) {
        runInfo = true;
    } else {
        runInfo = false;
    }

    if (weight < 90 && height > 185) {
        voleyballInfo = true;
    } else {
        voleyballInfoInfo = false;
    }

    if (age < 18 && height > 140 && weight > 130) {
        videoGamesInfo = true;
    } else {
        videoGamesInfo = false;
    }

    const person = {
        name: name,
        age: age,
        height: height,
        weight: weight,
        skills: {
            run: runInfo,
            voleyball: voleyballInfo,
            videoGames: videoGamesInfo
        }
    }
    return person;
}

console.log(createUser('Anton', 12, 123, 21));



function isPalindrom(word) {
    let wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
        if (word[i] !== word[wordLength - 1 - i]) {
            return false;
        }
    }
    return true;
}

let test = isPalindrom('БАППБАБ');
console.log(test);