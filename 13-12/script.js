let array = [2,7,11,15]

console.log(retornarAlvo(array, 22))

function retornarAlvo(array , alvo) {
    let arrayPosicao = []
    array.forEach(x => {
        array.forEach(y => {
            if(x + y === alvo){
                arrayPosicao = [array.indexOf(y), array.indexOf(x)]
            }
        })
    })
    return arrayPosicao
}