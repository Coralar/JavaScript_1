"use strict";

  console.log(mathOperation(5, 2, "/"));

  /**
   * Выполняет математические операции с аргументами
   * @param {number} arg1 - Певое число.
   * @param {number} arg2 - Второе число.
   * @param {string} operation - Операция.
   * @returns {number} - Результат операции.
   */
  function mathOperation(arg1, arg2, operation) {
    switch (operation) {
      case "+": return sum(arg1, arg2);
      case "-": return dif(arg1, arg2);
      case "*": return mul(arg1, arg2);
      case "/": return div(arg1, arg2);
      default: return NaN;
    }
  }

 /**
  * Считает сумму переданных аргументов.
  * @param {number} a - Первое число.
  * @param {number} b - Второе число.
  * @returns {number} - Сумма чисел.
  */
  function sum(a, b) {
    return a + b;
  }
  
  /**
   * Считает разность переданных чисел вычитая из большего числа меньшее.
   * @param {number} a - Первое чисо.
   * @param {number} b - Второе число.
   * @returns {number} - Разность чисел.
   */
   function dif(a, b) {
    if (a > b) {
      return a - b;
    }
    return b - a;
  }

  /**
   * Считает произведение переданных чисел.
   * @param {number} a  - Первое число.
   * @param {number} b - Второе число.
   * @returns {number} - Произведение чисел.
   */
  function mul(a, b) {
    return a * b;
  }

  /**
   * Считает частное переданных чисел
   * @param {number} a - Первое число.
   * @param {number} b - Второе число.
   * @returns {number} - Частное переданных чисел.
   */
  function div(a, b) {
    return a / b;
  }