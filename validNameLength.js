// Напиши функцию isValidNameLength, которая проверяет, 
// соответствует ли имя (или фамилия) требованиям по длине из документации.

// Требования из документации:
// Имя и фамилия не могут быть короче 3 и длиннее 20 символов

// Возвращаемое значение:
// true - если длина имени корректная (от 3 до 20 символов включительно)
// false - если длина меньше 3 или больше 20 символов

function isValidNameLength(lastName){
    console.log(`фамилия, которую вы ввели: ${lastName} - имеет кол-во символов равное ${lastName.length}`);
    console.log(typeof lastName);
    if (lastName.length >= 3 && lastName.length < 20){
        return true
    } 
    return false;
}

console.log(isValidNameLength("Котельникова"));