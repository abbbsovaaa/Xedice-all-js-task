let bankomat = {
    ad: 'Khadija',
    parol: 0406
}

try {
    let UserAd = prompt('Adinizi daxil edin ')
    if (UserAd !== bankomat.ad) {
        throw new Error('Ad yanlisdir ')

    }


    let UserParol = +prompt('Parolu daxil edin ')
    if (UserParol !== bankomat.parol) {
        throw new Error('Parol yanlisdir')
    }
    else {
        alert('ugurlu emeliyyat ')
    }
}
catch (err) {
    console.log(err.message)
}
finally {
    if (confirm('Kart cixarilsin ?') === true) {
        alert('Karta qovusdunuz.....')
    }
}