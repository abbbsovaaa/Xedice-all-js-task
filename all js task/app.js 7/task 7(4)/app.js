const number = prompt("Musbet eded yaz:")
let ededler  = true

if (number===1){
    console.log("1 ne sade ne de murekkeb ededdir")
}
if(number>1){
    for(let i =2;i<number;i++){
        if(number%i==0){
            ededler =false;
            break;
        }
    }
    if(ededler ){
        console.log(`${number} sade ededdir`)
    }else{
        console.log(`${number} murekkebdir `)
    }  
}
else{
    console.log(`${number} sade eded deyil`)
}
