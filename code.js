function schetchik1() {
    let count = 0;

    return function() {
        count++;
        console.log(Функция вызвана ${count} раз);
    }
        const counter = createCounter();
          
        counter();
        counter(); 
        counter();
        counter();


function schetchik2() {
    let count = 10;
    return function() {
    count--;
    console.log(осталось вызвать функцию ${count} раз);
        }
          }
          
    const counter = schetchik2();
          
    counter();
    counter();
    counter();
    counter();


function schetchik3() {
    let count = 10;
    return function() {
        if (count > 0) {
        count--;
        console.log(осталось вызвать функцию ${count} раз);
          } else {
            console.log(Отсчет окончен);
          }
        }
      }
      
      const counter = createCounter();
      
      counter(); 
      counter(); 


function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func()();
func()();
func()();
ВЫВЕДЕТ 0

function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test = func;

test()();
test()();
test()();
ВЫВЕДЕТ 0


let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
ВЫВЕДЕТ
0
1
2
3

function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test()();

let func1 = func;
let func2 = func;
func1();
func2();
func1();
func2();
ВЫВЕДЕТ
0
1
2
3

function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
ВЫВЕДЕТ
0
1
2
3