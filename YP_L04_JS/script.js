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

red = Number(red)
blue = Number(blue)

if(isNaN(red)) {
    red = prompt('В качестве значения насыщенности красного вы ввели не число. Пожалуйста, введите число от 0 до 255.', '255')
    red = Number(red)
}

if(isNaN(green)) {
    green = prompt('В качестве значения насыщенности зелёного вы ввели не число. Пожалуйста, введите число от 0 до 255.', '255')
    green = Number(green)
}

if(isNaN(blue)) {
    blue = prompt('В качестве значения насыщенности синего вы ввели не число. Пожалуйста, введите число от 0 до 255.', '255')
    blue = Number(blue)
}

console.log(red + blue)
console.log(red+green+blue)




