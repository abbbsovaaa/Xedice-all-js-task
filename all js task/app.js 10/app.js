function User( car, year, company, owner, ) {

    this.car = car
    this.year = year
    this.company = company
    this.owner = owner
   
    this.driving = () =>{
        console.log(`${owner} is drving ${car}.`)
    }
       
}
const obj = new User ('BMW', 1997,'Toyota', 'Ravan')

obj.driving()