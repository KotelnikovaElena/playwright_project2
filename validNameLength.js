// Напиши функцию isValidNameLength, которая проверяет, 
// соответствует ли имя (или фамилия) требованиям по длине из документации.

// Требования из документации:
// Имя и фамилия не могут быть короче 3 и длиннее 20 символов

// Возвращаемое значение:
// true - если длина имени корректная (от 3 до 20 символов включительно)
// false - если длина меньше 3 или больше 20 символов

function isValidNameLength(lastName){
    console.log(typeof lastName);
    //В JavaScript он работает не как простой булевый оператор. 
    // Он возвращает первое "истинное" (truthy) значение из сравниваемых. 
    // Если все значения "ложные" (falsy), он возвращает последнее из них.
    const name = lastName || "";//если lastName будет false (false, 0, -0, 0n, "", null, undefined, NaN), то присвоит переменной name "" пустую строку
    console.log(`фамилия, которую вы ввели: ${name} - имеет кол-во символов равное ${name.length}`);
    if (name.length >= 3 && name.length <= 20){
        return true
    } 
    return false;
}

// console.log(isValidNameLength("Котельникова"));
module.exports = { isValidNameLength };