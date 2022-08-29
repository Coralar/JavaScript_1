"use strict";

/**
 * Функция выводит колличество единиц, десятков и сотен в числе.
 * @param {number} num Целое число от 0 до 999.
 * @returns {object} Объект с единицами, десятками и сотнями.
 */
function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.error('Введите чило от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        dozens: Math.floor(num % 100 / 10),
        hundreds: Math.floor(num / 100)
    }
}

console.log(getDigitsOfNumber(256));

