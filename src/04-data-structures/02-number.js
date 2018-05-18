// 1.

const getDecimal = function(num) {
  let str = "" + num;
  let pos = str.indexOf(".");

  if (pos === -1) return 0;
  str = str.slice(pos);
  return +str;
};

console.log(getDecimal(0.45));

// 2.

const random1 = function(max) {
  let result = max * Math.random();

  return result;
};

console.log(random1(2));

// 3.

const random2 = function(min, max) {
  return min + Math.random() * max - Math.random() * min;
};
console.log(random2(2, 20));

console.log(random2(2, 20));


// 4.

const randomInteger = function (min, max) {
  /*Пусть функция приняла аргументы 3 и 9, тогда
    0.00001 * 3 <= minRandom <= 0.99999 * 3  = 0.00003 <= minRandom <= 2.99999
    0.00001 * 9 <= maxRandom <= 0.99999 * 9  = 0.00009 <= maxRandom <= 8.9999

    result = (8.99999 - 2.99999) = 6 + 3 = 9 - все ок
    result = (0.00009 - 0.00003) = 0.00006 + 3 = 3.00006 - все ок
    result = (8.99999 - 0.00003) = 8.99994 + 3 = 11.99994 (!) Ошибка, потому что Math.random() для обоих чисел одинаковый.
    result = (0.00009 - 2.99999) = -2.99990 + 3 = 0.00001 (!) Ошибка, потому что Math.random() для обоих чисел одинаковый.

    Таким образом, прибавля разница между минимальным сгенерированным числом из области Math.random() для двух чисел всегда будет одинакова
    и если ее сложить с минимальным числом, то мы получим либо нижнюю границу интервала, либо верхнюю


    let result = min + Math.random() * max - Math.random() * min; >>>

     Пусть Math.random() = 0.00001, тогда
     0.00001 * (9 - 3) = 0.00006

     3 + 0.00006 = 3.00006

     Пусть Math.random() = 0.999999, тогда
     0.99999 * (9 - 3) = 5.99994

      3 + 5.99994 = 8.99994

    Пусть Math.random() = 0.35, тогда

     0.35 * (9 - 3) = 2.1

  * */

  return Math.floor( min + Math.random() * (max+1 - min) );

};

console.log(randomInteger(1, 3));