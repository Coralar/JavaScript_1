"use strict";

/* А это нормально что @param и @returns синего цвета, а не зеленого? 
Выглядит так себе. */

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

  console.log(div(6, 2));

