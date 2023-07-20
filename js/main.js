'use strict'  // Строгий режим



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


// const arr = ['plus', 'minus', 'division', 'multiplication']


// function calculator(firstNumber, SecondNumber, sign) {

//     if (sign === 'plus') {
//         let end = firstNumber + SecondNumber
//         return end
//     }
//     else if (sign === 'minus') {
//         let end = firstNumber - SecondNumber
//         return end
//     }
//     else if (sign === 'division') {
//         let end = firstNumber / SecondNumber
//         return end
//     }
//     else if (sign === 'multiplication') {
//         let end = firstNumber * SecondNumber
//         return end
//     }
// }

// console.log(calculator(10, 10, 'multiplication'));  //  Вывод в консоль = 100




//       О Б Ъ Е К Т Ы          //


// const namesMyFriends = {

//     NameFirstFriend: {
//         Name: 'Anton',
//         age: 18,
//         weight: 55,
//     },
//     NameSecondFriend: {
//         Name: 'Saveliy',
//         age: 16,
//         weight: 60,
//     }
// }

// console.log(namesMyFriends.NameFirstFriend);




// const myName = {
//     Name: 'Saveliy',
//     age: 16,
//     weight: 60,
//     sayHello(Names) {
//         console.log(`Hello ${Names}!`);
//     }
// }

// myName.sayHello('Alexa')



//   1

// const myName = {
//     Name: 'Saveliy',
//     age: 16,
//     weight: 60,
// }



// const arr = [
//     {
//         Name: 'Kenny',
//         age: 20,
//         isAdmin: true,
//     },
//     {
//         Name: 'John',
//         age: 24,
//         isAdmin: false,
//     },
// ]

// arr.push({
//     Name: 'Ivan',
//     age: 24,
//     isAdmin: false,
// })

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i].Name} Админ: ${arr[i].isAdmin}`);
// }

// const hi = 'hello world!'

// console.log(hi.toUpperCase());

// console.log(arr.reverse());



//   2

// const array = [
//     {
//         sayName(name) {
//             return `Hello ${name}!`
//         }
//     }
// ]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i].sayName('Tom'));
// }



//   3

// let defaultUsers = 0

// const array = [
//     {
//         Name: 'Alex',
//         age: 32,
//         isAdmin: true
//     },
//     {
//         Name: 'Vlad',
//         age: 21,
//         isAdmin: false
//     },
//     {
//         Name: 'Michail',
//         age: 16,
//         isAdmin: false
//     },
//     {
//         Name: 'Denis',
//         age: 18,
//         isAdmin: false
//     },
//     {
//         Name: 'Alisa',
//         age: 35,
//         isAdmin: true
//     },
//     {
//         Name: 'Dima',
//         age: 23,
//         isAdmin: false
//     },
// ]

// for (let i = 0; i < array.length; i++) {
//     if (array[i].isAdmin != true) {
//         defaultUsers++
//         console.log(defaultUsers);
//     }
// }




//         М Е Т О Д Ы  М А С С И В О В           //


// const array = [
//     {
//         Name: 'Alex',
//         age: 17,
//     },
//     {
//         Name: 'Robert',
//         age: 22,
//     },
//     {
//         Name: 'Milana',
//         age: 26,
//     },
// ]

// const users = []

// array.forEach((user) => {
//     users.push(user.Name)
// });

// console.log(users);


// const numbers = [2, 5, 76, 23, 11, 10, 67, 34, 12, 4, 3, 6, 8, 9, 38]

// const result = numbers.filter(function(min) {
//     return min > 10
// })

// console.log(result);

// const test = [4, 5, 6, 7, 8]

// let all = test.unshift()

// console.log(test)

// console.log(all);



//         Document Object Model           //


// const elements = document.querySelectorAll('div')
// const blocks = document.querySelector('.blocks')

// blocks.style.display = 'flex'
// blocks.style.justifyContent = 'center'
// blocks.style.alignItems = 'center'

// elements.forEach((element) => {
//     element.style.color = '#fff'
//     element.style.fontSize = '2em'
//     element.style.marginRight = '3.125rem'
// });

// console.log(elements);


// const button = document.querySelector('.btn')

// button.addEventListener('click', () =>{
//     button.classList.toggle('green--btn')
// })




//         М О Д А Л Ь Н О Е  О К Н О            //


const button = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('scroll--fixed')
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('scroll--fixed')
}

button.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})