/* Task 1*/

// function totalSum() {
//     let number = +prompt("enter number");
//     let total1 = 0;
//     let total2 = 0;
//     let total3 = 0;

//     for (let i = 0; i <= number; i++) {

//         if (i % 2 == 0) {
//             total1 += i

//         } else {
//             total2 += i
//         }
//         total3 = Math.abs(total1 - total2)

//     }

//     console.log(`Sum of even numbers equals : ${total1} `);
//     console.log(`Sum of odd numbers equals : ${total2} `);
//     console.log(`The difference between even numbers and odd numbers eqauls : ${total3}`);
// }

// totalSum()



/* Task 2*/

// function totalSum(number) {
//     let total = 0;

//     for (let i = 0; i < number; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(totalSum(6));





/* Task 3*/
// let array = [3, 7, 1, 4, 9];

// function totalCount(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// console.log("Sum of arrays equals:", totalCount(array));


/* Task 4*/

// const numbers = [10, 12, 33]

// function getSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 == 0) {
//             sum += numbers[i]

//         }

//     }

//     console.log(`Sum of even numbers equals : ${sum}`);
// }
// getSum(numbers);


/* Task 5*/

// function borYokiYoq(son, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === son) {
//             return true;
//         }
//     }
//     return false;
// }


// const array = [3, 7, 1, 4];
// let son1 = 4;
// let son2 = 5;

// console.log(son1 + " array ichida:", borYokiYoq(son1, array));

// console.log(son2 + " array ichida:", borYokiYoq(son2, array));


/* Task 6*/

// function finAdd(number, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {

//             return array;
//         }
//     }


//     array.push(number);
//     return array;
// }


// let array = [3, 7, 1,];
// let number1 = 4;
// let number2 = 5;


// console.log("Result for number 1", finAdd(number1, array));

// console.log("Result for number 2", finAdd(number2, array));





/* Task 7*/

// function differenceNumber() {

//     const arr = [3, 7, 8]

//     let first_item = arr[0]
//     let last_item = arr[arr.length - 1]
//     let sum = Math.abs(first_item - last_item);

//     console.log(sum);

// }
// differenceNumber()

// extra task 1

// function sortDigits() {
//     let number = +prompt("Enter a three-digit number:");

//     console.log(number);

//     let a = parseInt(number / 100);
//     let b = parseInt(((number % 100) - (number % 10)) / 10);
//     let c = parseInt(number % 10);

//     if (a > b && b > c) {
//         console.log(`${c} ${b} ${a}`);
//     } else if (a > c && c > b) {
//         console.log(`${b} ${c} ${a}`);
//     } else if (b > a && a > c) {
//         console.log(`${c} ${a} ${b}`);
//     } else if (b > c && c > a) {
//         console.log(`${a} ${c} ${b}`);
//     } else if (c > a && a > b) {
//         console.log(`${b} ${a} ${c}`);
//     } else if (c > b && b > a) {
//         console.log(`${a} ${b} ${c}`);
//     }

// }

// sortDigits();


// Extratask 2

// const reverse = (number) => {
//     if (number > 9 && number < 100) {
//         let a = parseInt(number / 10)
//         console.log(a);

//         let b = parseInt(number % 10)
//         console.log(b);

//     console.log(`${b} ${a}`);
//     }else{
//         console.log("You must enter only double-digits number");
//     }
// }
// reverse(23)

// Extratask 3

// const reverse = (number) => {
//     if (number >= 100 && number < 1000) {
//         let a = parseInt(number / 100);
//         console.log(a);
//         let b = parseInt(((number % 100) - (number % 10)) / 10);
//         console.log(b);
//         let c = parseInt(number % 10);
//         console.log(c);

//         console.log(`${c}  ${b} ${a}`);
//     } else {
//         console.log("You must enter only three-digits number");
//     }
// }
// reverse(321)
