
//       У С Л О В И Я         //

// const age = 18

// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18!');;

// if (age >= 18) {
//     console.log('Вы совершеннолетний');
// }
// else {
//     console.log('Вам нет 18!');
// }

// switch (age) {
//     case 16:
//         console.log('Вам нет 18!');
//         break;
//     case 17:
//         console.log('Вам нет 18!')
//         break;
//     case 18:
//         console.log('Вы совершеннолетний')
//         break;
//     default:
//         console.log('Таких значений нет');
// }



//        Ц И К Л Ы          //



// for (let i = 1; i <= 10; i++) {
//     if (i > 4) {
//         console.log(`Пройдено ${i} кругов!`);
//     }

//     else if (i == 1) {
//         console.log(`Пройден ${i} круг!`);
//     }

//     else {
//         console.log(`Пройдено ${i} круга!`);
//     }
// }



// for (let i = 2; i <= 12; i = i + 2) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// } 

// let i = 0

// while (i < 12) {
//     i = i + 2
//     console.log(i);
// }

// let i = 11

// while (i > 1) {
//     i--
//     console.log(i);
// }



//       М А С С И В Ы         //



// const numbers = [1, 2, 7, 4, 11, 32, 3, 60, 923, 332, 111, 234, 973]

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2) {
//         console.log(numbers[i]);
//     }
// }

//    1 вариант

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'dark blue', 'purple'] 

// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);
// }

// const symbol = [2, 4, 6, 8, 10, 12, 14 ,16]

// for (let i = symbol.length - 1; i >= 0; i--) {
//     console.log(symbol[i]);
// }

//    2 вариант

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'dark blue', 'purple']

// let reverseColors = colors.reverse()

// console.log(reverseColors);




//       Ф У Н К Ц И И         //




// function suma (fistNumber, SecondNumber) {
//     return fistNumber + SecondNumber * fistNumber
// }

// console.log(suma(2, 4));

// const users = ['Alex', 'Anton', 'John', 'Maxim']

// const num = [4, 6, 8, 10]

// const nameIsFactory = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `Имя ${item} совпадает`
//         }
//     }
//     return `Имя ${item} не совпадает`
// }

// console.log(nameIsFactory(users, 'John'));




// const nameHi = (nickname) => {
//     return `Hello ${nickname}`
// }

// console.log(nameHi('Kenny'));




//    1  вариант

// const Number = [2, 5, 6, 10, 24, 65, 9, 100, 12]

//     const arr = Number.filter(function(array) {
//         return array > 10
//     })

// console.log(arr);


//    2  вариант

// const Number = [2, 5, 6, 10, 24, 65, 9, 100, 12]

// const CheckNum = (Number) => {
//     for (let i = 0; i < Number.length; i++) {
//         if (Number[i] > 10) {
//             console.log(Number[i]);
//         }
//     }
// }

// console.log(CheckNum(Number));



//    Калькулятор


const arr = ['plus', 'minus', 'division', 'multiplication']


function Calculator(array, firstNumber, SecondNumber, sign) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === sign) {
            if (sign === 'plus') {
                let end = firstNumber + SecondNumber
                console.log(end);
            }
            else if (sign === 'minus') {
                let end = firstNumber - SecondNumber
                console.log(end);
            }
            else if (sign === 'division') {
                let end = firstNumber / SecondNumber
                console.log(end);
            }
            else if (sign === 'multiplication') {
                let end = firstNumber * SecondNumber
                console.log(end);
            }
        }
    }
}

console.log(Calculator(arr, 10, 10, 'multiplication'));  //  Вывод в консоль = 100





//       О Б Ъ Е К Т Ы         //



// const user = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 26,
//         isAdmin: true
//     },
// }

// console.log(user.alex);