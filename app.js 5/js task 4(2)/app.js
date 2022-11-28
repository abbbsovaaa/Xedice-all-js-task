let randomEded = Math.floor(Math.random() *50)
console.log(randomEded)
let userEded=+prompt('eded daxil edin ')
while(userEded!== randomEded){
    if (userEded<randomEded){
        userEded=+prompt('daha boyuk eded daxil edin ')
    } else{
        userEded=+prompt('daha kicik eded daxil edin ')
    }
    
}
console.log('Kapital bank hesabiniza 1000 azn daxil edildi')
// A: sherti duzgun yaz zehmet olmasa. Userin yanlis cehdlerine gore reqem deyishir. 
