


// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1
let result = 1
while (i < 11) {
    result = result *2
    i++
}
console.log(result)


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const power = function(num) {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result = result *2
    }
    return result
}

console.log(power(10))

// -------ИЛИ---------------------

const power2 = function(num) {
    return 2**num
}

console.log(power2(10))


// -------ИЛИ---------------------

const power3 = function(num) {
    return Math.pow(2,num)
}

console.log(power3(10))


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)"
let result2 = ''
for (let i=1; i <= 4; i++) {
    result2+=word
    console.log(result2)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function PrintSmile(stroka,  numberOfRows) {
    let result = ''; 
    for (let i = 1; i <= numberOfRows; i++)
        result+=stroka
        console.log(result)
}
PrintSmile(':(', 5)

// -------ИЛИ---------------------

function PrintSmile2(stroka,  numberOfRows) {
    let result = ''; 
    for (let i = 1; i <= numberOfRows; i++)
            console.log(stroka.repeat(i))
}
PrintSmile2('=)', 6)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

const getWordStructure = function(word) {
    let n = 0
    let k = 0
    let gl = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
    let sogl = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "z", "Z"];

        for(i = 0; i < word.length; i++){
            for(j = 0; j < gl.length; j++) {
                if(word[i] === gl[j]){
                    n++
                    break; 
                }
            }
        
             for(q = 0; q <  sogl.length; q++) {
                if(word[i] === sogl[q]){
                    k++
                    break; 
                }
            }
        }
        console.log("Слово " + word + " состоит из " + n + " гласных и " + k + " согласных")
}
getWordStructure("abracadabra")

// -------ИЛИ---------------------

getWordStructure2 = function(word) {
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0
    let numberOfConsonants = 0
    for(char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++
        if (consonants.includes(char)) numberOfConsonants++
    } 
    console.log(`Слово   ${word}   состоит из  ${numberOfVowels}   гласных и   ${numberOfConsonants}   согласных`)

}
getWordStructure2("barbariki")


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')

}
console.log(`${isPalindrom('Abba') ? 'It is a palindrome' : 'It is not a palindrome'}`)


// lesson4-----------------


function yolochka1(item_1, item_2) {

    let mass = 'Hello!!'
    console.log(mass, item_1, item_2)
}
// yolochka1(11, 22)




function f1() {
    console.log('hi!!!!!!!')
}

let t1 = 10
let t2 = 20

let t3 = 30
let t4 = 40

// let f11 = () => {console.log('hi')}
//  let f22 = (t11, t22) => {console.log('Sum =', t11 + t22)}


 let f33 = (t1 > t2) ?
    (tt1, tt2) => console.log('order = ', tt1, tt2) :
    (tt1, tt2) => console.log('order = ', tt1 - tt2) ;

f33(t3, t4)






function yolochka33(){};


yolochka33.prototype.fast = function () {
    console.log('FAST!!')
}
yolochka33.prototype.green = function (sun, co2) {
    console.log('Green ==', sun, ' + ', co2)
}
yolochka33.prototype.shishki = function () {
    console.log('Shishki == yolki')
}

let forest = new yolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()

