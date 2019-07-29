//Minggu, 28 Juli 2019

//1. basic function
function sayHello() {
    console.log("Hello guys");
}

sayHello();

//2. return function
function kasihHuruf() {
    return "A";
}

var hurufnya = kasihHuruf();
console.log(hurufnya);

//3. function with params
function tambahLima(angka) {
    return angka + 5;
}

console.log(tambahLima(10));

//4. function with more 1 params
function countTriangle(alas, tinggi) {
    var luas = 0.5 * (alas * tinggi);
    return luas;
}

console.log(countTriangle(5,5));