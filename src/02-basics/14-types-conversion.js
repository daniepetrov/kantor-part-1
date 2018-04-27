console.log(1 + +'1');

console.log(+'1 111 22');
console.log(+'     1');
console.log(+'1px');
console.log(+'-9');
console.log(parseInt('1 111 22'));
console.log(parseFloat('1 111 22'));
console.log(+true);
console.log(+false);
console.log( "\n0 " == 0 );
console.log("\n" == false);
console.log("\n" == 0);

console.log( null >= 0 ); // true, Ñ.Ðº. null Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·ÑÐµÑÑÑ Ðº 0
console.log( null > 0 ); // false (Ð½Ðµ Ð±Ð¾Ð»ÑÑÐµ), Ñ.Ðº. null Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·ÑÐµÑÑÑ Ðº 0
console.log( null == 0 ); // false (Ð¸ Ð½Ðµ ÑÐ°Ð²ÐµÐ½!), Ñ.Ðº. == ÑÐ°ÑÑÐ¼Ð°ÑÑÐ¸Ð²Ð°ÐµÑ null Ð¾ÑÐ¾Ð±Ð¾.

console.log( undefined > 0 ); // false, Ñ.Ðº. undefined -> NaN
console.log( undefined == 0 ); // false, Ñ.Ðº. ÑÑÐ¾ undefined (Ð±ÐµÐ· Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ñ)
console.log( undefined < 0 ); // false, Ñ.Ðº. undefined -> NaN

console.log( undefined == null ); // true, ÑÐ°Ðº ÐºÐ°Ðº Ð² ÑÐ¿ÐµÑÐ¸ÑÐ¸ÐºÐ°ÑÐ¸Ð¸ ÑÐ²Ð½Ð¾ ÑÐºÐ°Ð·Ð°Ð½Ð¾

console.log( !!"0" ); // true
console.log( !!" " ); // Ð»ÑÐ±ÑÐµ Ð½ÐµÐ¿ÑÑÑÑÐµ ÑÑÑÐ¾ÐºÐ¸, Ð´Ð°Ð¶Ðµ Ð¸Ð· Ð¿ÑÐ¾Ð±ÐµÐ»Ð¾Ð² - true!

console.log( null == "\n0\n" );
console.log( 0 === "\n0\n" );

//Ð¡ ÑÐ¾ÑÐºÐ¸ Ð·ÑÐµÐ½Ð¸Ñ Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐ¸Ð¿Ð¾Ð² Ð² JavaScript ÑÑÐ¾ ÑÐ¾Ð²ÐµÑÑÐµÐ½Ð½Ð¾ Ð½Ð¾ÑÐ¼Ð°Ð»ÑÐ½Ð¾.
// ÐÑÐ¸ ÑÑÐ°Ð²Ð½ÐµÐ½Ð¸Ð¸ Ñ Ð¿Ð¾Ð¼Ð¾ÑÑÑ Â«==Â» â ÑÐ¸ÑÐ»ÐµÐ½Ð½Ð¾Ðµ Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ, Ð° Ð² if â Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ðµ, ÑÐ¾Ð»ÑÐºÐ¾ Ð¸ Ð²ÑÐµÐ³Ð¾.


/*
* "10"
* -1
* 1
* 2
* 6
* "45px" (!) - "9px", Ð¿Ð¾ÑÐ¾Ð¼Ñ ÑÑÐ¾ Ð¾Ð¿ÐµÑÐ°ÑÐ¾Ñ "+" Ð¸Ð¼ÐµÐµÑ Ð¾Ð´Ð¸Ð½Ð¾ÐºÐ¾Ð²ÑÐ¹ Ð¿ÑÐ¸Ð¾ÑÐ¸ÑÐµÑ
* "$45"
* 2
* NaN
* Infinity
* "  -9\n5"
* -14
* 2
* 5
* 5
* 5
* 1
* NaN
* true (!), Ð¿Ð¾ÑÐ¾Ð¼Ñ ÑÑÐ¾ null ÑÐ°Ð²ÐµÐ½Ð¾ ÑÐ¾Ð»ÑÐºÐ¾ undefined Ð¸ Ð½Ðµ ÑÐ°Ð²ÐµÐ½ ÑÐµÐ¼Ñ-Ð»Ð¸Ð±Ð¾ ÐµÑÐµ
* true
* */
