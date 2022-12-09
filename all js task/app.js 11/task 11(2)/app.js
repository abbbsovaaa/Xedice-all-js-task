function Yas(yas) {
    this.yas = yas
    let yasUsage = +prompt('Nece yasiniz var?')

    this.yas = this.yas - yasUsage
    if (this.yas < 0) {
        console.log(`ölmüsünüz `)
    }
    console.log(`${this.yas} il daha vaxtiniz qalib `)
    
}
const yas = new Yas(77)
