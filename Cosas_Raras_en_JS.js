// ------>>>>>   COSAS RARAS DE JAVASCRIPT   <<<<<------

// Buenas --->>> consologeen y vean las particularidades, las
// rarezas de javascript.


console.log(true + false);  //  --->  1
console.log([,,,].length);  //  ---> 3
console.log([1,2,3] + [4,5,6]); // --->  1,2,34,5,6
console.log(0.1 + 0.2 === 0.3);  //  --->  false
console.log(0.1 + 0.2);  //  --->  0.30000000000000004
console.log(10,2);  //  --->  10  2  pero en consola browser solo devuelve el  2
console.log(!!"");  //  --->  false
console.log(+!![]);  //  --->  1
console.log(!!!true);  //  --->  false
console.log(true == 'true');  //  --->  false
console.log(010 - 03);  //  --->  5
console.log(010);  //  --->  8 en num binario
// console.log("" -- "");  //  --->  SyntaxError:  <--- este console lo comento para que no se vea semejante error en consola
console.log(null + 0);  //  --->  0
console.log(0 / 0);  //  --->  NaN
console.log(1 / 0 > Math.pow(10, 1000));  //  --->  false
console.log(1 / 0);  //  --->  Infinity
console.log(Math.pow(10, 1000));  //  --->  Infinity
console.log(1 / 0 === Math.pow(10, 1000));  //  --->  true
// console.log(true++);  //  --->  SyntaxError:  <--- este console lo comento para que no se vea semejante error en consola
console.log("" - 1);  //  --->  -1
console.log((null - 0) + '0');  //  --->  00
console.log(null - 0);  //  --->  0
console.log(true + ('true' - 0));  //  ---> NaN
console.log('true' - 0);  //  --->  NaN
console.log(!5 + !5);  //  --->  0
console.log(!5);  //  --->  false
console.log([] + []);  //  --->  false
console.log([]);  //  --->  []
console.log({});  //  --->  {}
console.log('' == false);  //  --->  true
console.log(' ' == false);  //  --->  true
console.log(NaN === NaN);  //  --->  false
console.log(NaN++);  //  --->  NaN
console.log(undefined + false);  //  --->  NaN
console.log(+0 === -0);  //  --->  true
console.log(- "" + + "1" * null - [,]);  //  --->  0
console.log('bye');  //  --->  bye


//---------------------------------------------------------------------------------

