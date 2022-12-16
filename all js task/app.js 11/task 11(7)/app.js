// A: done ✅
const repeatedSymbolCounter = (str, herf) => {
    let say = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i === herf]) {
            say++
        }

    }
    console.log(say)
}
repeatedSymbolCounter('ALIONALI','A')

