alert('ILC!')
console.log('a message...')
document.write('Bonjour, le monde!')
/* console.log(window)
console.log(document) */
//console.log(Math)
//console.log(innerWidth)
console.log( Math.ceil(25.67))
console.log( (128 + 254 + 137 + 201) / 60)

var red = prompt('Введите насыщенность красного в виде числа от 0 до 255', '255')
var green = prompt('Введите насыщенность зелёного в виде числа от 0 до 255', '255')
var blue = prompt('Введите насыщенность синего в виде числа от 0 до 255', '255')

var red
var green
var blue

var red
var green
var blue

red = checkInput(red)
  //prompt('Введите насыщенность красного в виде числа от 0 до 255', '255')
green = checkInput(green)
//prompt('Введите насыщенность зелёного в виде числа от 0 до 255', '0')
blue = checkInput(blue)
//prompt('Введите насыщенность синего в виде числа от 0 до 255', '0')

function checkInput(i) {

    i = Number(i);

    if(isNaN(i)) {
        i = prompt('В качестве значения насыщенности цвета вы ввели не число. Пожалуйста, введите число от 0 до 255.', '255')
        i = Number(i)
    } else if (i < 0) {
        i = 0
        console.log('Наименьшее из возможных чисел — ноль, мы подставили значение 0.')
    } else if (i > 255) {
        i = 255
        console.log('Наибольшее возможное число — 255, мы подставили его.')
      }
    else {
        console.log('Вы определили насыщенность цвета как ' + i)
    }
  return i
}

//checkInput(red);
//checkInput(green);
//checkInput(blue);

function makeColorString(r,g,b) { 
  var bgValue = "rgb(" + r + ", " + g + ", " + b + ")"
  return bgValue
}

//checkInput(i)
//makeColorString(red, green, blue);
document.write(makeColorString(red, green, blue));
console.log(document.head)

document.body.style.backgroundColor = makeColorString(red, green, blue);
document.body.style.fontSize = "100px";
document.body.style.fontFamily = 'Anonymous Pro';
document.body.style.color = 'white';



