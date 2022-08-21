"use strict";

/* А это нормально что @param и @returns синего цвета, а не зеленого? 
Выглядит так себе. */

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

  console.log(div(6, 2));

