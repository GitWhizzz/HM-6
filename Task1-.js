// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn) {
    return function (...args) {
        console.log("Logged arguments:", args);
        return fn.apply(this, args);
    }
}

function multiply(x, y) {
    return x * y;
}

const multiplyWithLogging = logArguments(multiply);

console.log(multiplyWithLogging(5, 10));