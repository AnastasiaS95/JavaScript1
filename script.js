// Задача 1 
let name1 = 'Anastasiia';
let age = 29;
let city = 'Yaroslavl';
console.log(typeof name1, typeof age, typeof city);
// Задача 2 
let personalName = 'Anastasiia';
let surname = 'Semenova';
console.log(`${personalName} ${surname}`)
// Задача 3
let str1 = Number.isInteger('5');
// Задача 4
let str2 =  "JavaScript is fun!";

console.log(str2.toUpperCase);
console.log(str2.slice(14,16));
// Задача 5
let name = 'flower';
let price = 500;
console.log(`Цена на ${name}
составляет ${price} рублей.`)
// Задача 6
let num = 5.722
console.log(Math.round(num))
// Задача 7
let a = 12;
let b = 10;
if (a > b) {
    return true;
}else {
    return false;
}
// Задача 8
let person = {
    name: Anastasiia, 
    age:29,
    color:red};
console.log(Object.keys(person));
// Задача 9
let num = 9,56314744
console.log(num.toFixed(2));
// Задача 10
let fruits =  "apple, orange, banana";
console.log(fruits.join(' '));
// Задача 11
let str = 'Anna';
let num = 5;
console.log(str/num);
// Задача 12
let text = "Это \
многострочная \
строка";
// Задача 13
let isTrue = true;
console.log(typeof isTrue);
// Задача 14
let sym = symbol("id");
let obj = {
    [sym]: "value1"
};
console.log(obj[sym]);
// Задача 15
let arr = [5, 8, 3];
console.log(arr.length)