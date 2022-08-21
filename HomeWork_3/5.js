"use strict";

  console.log(mathOperation(5, 2, "/"));

  /**
   * Выполняет математические операции с аргументами
   * @param {*} arg1 - Певое число.
   * @param {*} arg2 - Второе число.
   * @param {*} operation - Операция.
   * @returns 
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
  * @param {*} a - Первое число.
  * @param {*} b - Второе число.
  * @returns - Сумма чисел.
  */
  function sum(a, b) {
    return a + b;
  }
  
  /**
   * Считает разность переданных чисел вычитая из большего числа меньшее.
   * @param {*} a - Первое чисо.
   * @param {*} b - Второе число.
   * @returns - Разность чисел.
   */
  function dif(a, b) {
    if (a > b) {
      return a - b;
    } else if (a < b) {
      return b - a;
    } else {
      return 0;
    }
  }

  /**
   * Считает произведение переданных чисел.
   * @param {*} a  - Первое число.
   * @param {*} b - Второе число.
   * @returns - Произведение чисел.
   */
  function mul(a, b) {
    return a * b;
  }

  /**
   * Считает частное переданных чисел
   * @param {*} a - Первое число.
   * @param {*} b - Второе число.
   * @returns  - Частное переданных чисел.
   */
  function div(a, b) {
    return a / b;
  }