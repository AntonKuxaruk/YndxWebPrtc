function getRandom(anyArray) {
    var randomNumber = Math.floor( Math.random() * anyArray.length )
    var randomElement = anyArray[ randomNumber ]
    return randomElement
}

var pageSettings = {

    red : 200,
    green : 200,
    blue : 200,   
     background : ['https://pictures.s3.yandex.net/background.jpg',
                  'https://pictures.s3.yandex.net/cover-color.jpg',
                  'https://pictures.s3.yandex.net/cover-grid.jpg',
                  'https://pictures.s3.yandex.net/cover-typo.jpg',
                  'https://pictures.s3.yandex.net/cover-wall.jpg'] 
};

var bgColor = 'rgb(' + pageSettings.red + ', ' + pageSettings.green + ', ' + pageSettings.blue + ')';

document.body.style.backgroundColor = bgColor;

var header = document.getElementById('main-header');

console.log(header);

header.style.backgroundImage = 'url(' + pageSettings.background[ getRandom(pageSettings.background) ] + ')';

// var i = 0;
// console.log(pageSettings.background[i]);
// console.log(pageSettings.background[++i]);
// console.log(pageSettings.background[++i]);

var cards = document.getElementsByClassName('card')

//cards[1].style.color = 'navy'

window.addEventListener('scroll', function(){
    var scrollY = window.pageYOffset
    //console.log(scrollY)
    var bgValue =  'rgb(' + (pageSettings.red - scrollY / 4) + ', ' + ( pageSettings.green - scrollY / 4) + ', ' + (pageSettings.blue -scrollY / 4) + ')'
    document.body.style.backgroundColor = bgValue
    for(var c = 0; c < cards.length; c++){
        var card = cards[c]
        //console.log(card)
        card.style.color = 'rgb(' + (pageSettings.red * 0 + scrollY / 4) + ',' + (pageSettings.green * 0 + scrollY / 4) + ',' + (pageSettings.blue * 0 + scrollY / 4) + ')'
    }
})