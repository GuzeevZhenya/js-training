function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(17);


function toNumber(value) {
    console.log(Number(value));
}

toNumber('123');


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
    let result = "";

    for (let i = 0; i < wordLength; i++) {
        if (word[i] === wordLength - 1 - i) {

        } else {

        }
    }

}


let test = isPalindrom('abba');
console.log(test);