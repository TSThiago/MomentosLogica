let array = [2,7,11,15]

console.log(retornarAlvo(array, 22))

function retornarAlvo(array , alvo) {
    let arrayPosicao = []
    array.forEach(x => {
        array.forEach(y => {
            if(x + y === alvo){
                let posicao1 = array.indexOf(y)
                let posicao2 = array.indexOf(x)
                arrayPosicao = [posicao1, posicao2]
            }
        })
    })
    return arrayPosicao
}