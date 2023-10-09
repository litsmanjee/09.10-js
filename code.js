// Корсак и Давтян 264-272

// 1
// ВЫВЕДЕТ !

// 2
// ВЫВЕДЕТ ОШИБКУ

// 3
// ВЫВЕДЕТ !

// 4
// ВЫВЕДЕТ return '!'

// 5
// ВЫВЕДЕТ !

// 6
// ВЫВЕДЕТ 3

// 7
// ВЫВЕДЕТ !

// 8
// ВЫВЕДЕТ !

// 9
// ВЫВЕДЕТ return '!'

// 10
// ВЫВЕДЕТ !

// 11
// ВЫВЕДЕТ 3

// 12 
// (function() { 
//  return function() { 
//      return function() { 
//          console.log('!'); 
// }; 
// }; 
// })()()(); 
 
// 13 
// (function() { 
//   let sum = 0; 
//   return function(num) { 
//     sum += num; 
//     console.log('Сумма: ' + sum); 
//   } 
// })(1)(2); 
 
// 14 
// (function() { 
//     let sum = 0; 
//     return function(num) { 
//       sum += num; 
//       console.log('Сумма: ' + sum); 
//       return arguments.callee; 
//     } 
// })()(1)(2)(3); 
 
// 15 
// ВЫВЕДЕТ 1 
 
// 16 
// ВЫВЕДЕТ ОШИБКУ
