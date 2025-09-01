
const {isValidNameLength} = require('../validNameLength.js');
const{test, expect} = require('@playwright/test');

test.describe('Группа тестов', () => {
    test('№1 Фамилия возвращает true для валидных данных', () => {
        expect(isValidNameLength("Сун")).toBe(true);
        expect(isValidNameLength("A".repeat(20))).toBe(true);
        expect(isValidNameLength("Иванов")).toBe(true);
    }
    )
    test('№2 Фамилия возвращает false для невалидных данных', () => {
        expect(isValidNameLength("Су")).toBe(false);
        expect(isValidNameLength("A".repeat(21))).toBe(false);
        expect(isValidNameLength(123)).toBe(false);
    }
    )
    test('№3 Особые случаи', () => {
        expect(isValidNameLength(undefined)).toBe(false);
        expect(isValidNameLength(null)).toBe(false);
        expect(isValidNameLength()).toBe(false);
    }
    )
    test('№4 Не строковые данные', () => {
        expect(isValidNameLength([])).toBe(false);
        expect(isValidNameLength({})).toBe(false);
        expect(isValidNameLength(true)).toBe(false);
    }
    )
}

)