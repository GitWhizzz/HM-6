// Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator. 
// Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator) {
    return function (...args) {
        if (!validator(...args)) {
            throw new Error("Argument validation failed");
        }
        return fn.apply(this, args);
    }
}

function emailValidator(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function printValidEmail(email) {
    console.log("Email:", email);
}

const validatedEmail = validate(printValidEmail, emailValidator);

validatedEmail("Sveta.Poliakova@test.com");
validatedEmail("SvetaPoliakova");
