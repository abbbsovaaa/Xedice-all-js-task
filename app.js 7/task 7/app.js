let randomEded = Math.floor(Math.random() * 20)
console.log(randomEded)
let userEded =+prompt('Eded daxil edin:')
while( userEded !== randomEded){
    if ( userEded<randomEded){
        userEded = +prompt('daha boyuk eded daxil edin:')
    }else {
        userEded= +prompt('daha kicik eded daxil edin :')
    }
}
console.log(`aferin siz ededi tapdiniz, eded ${userEded} idi `)