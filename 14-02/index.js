const JokenpoWinners = {
    'tesoura': ['papel', 'lagarto'],
    'papel': ['pedra', 'spock'],
    'pedra': ['lagarto', 'tesoura'],
    'lagarto': ['spock', 'papel'],
    'spock': ['tesoura', 'pedra']

}

const JokenpoValues = ['tesoura', 'papel', 'pedra', 'lagarto', 'spock']

console.log(JokenpoWinners)

const Jokenpo = (value1, value2) => {
    if (!JokenpoValues.includes(value1) || !JokenpoValues.includes(value2)) {
        console.log('Um dos valores inseridos inválido!')
    } else {
        if (value1 !== value2) {
            if (JokenpoWinners[value1].includes(value2)) {
                console.log('Jogador 1 ganhou')
            } else {
                console.log('Jogador 2 ganhou!')
            }
        } else {
            console.log('Empatou!')
        }

        // if ((value1 === 'tesoura' && value2 === 'papel') || (value1 === 'papel' && value2 === 'pedra') || (value1 === 'pedra' && value2 === 'lagarto') ||
        //     (value1 === 'lagarto' && value2 === 'spock') || (value1 === 'spock' && value2 === 'tesoura') || (value1 === 'tesoura' && value2 === 'lagarto') ||
        //     (value1 === 'lagarto' && value2 === 'papel') || (value1 === 'papel' && value2 === 'spock') || (value1 === 'spock' && value2 === 'pedra') || (value1 === 'pedra' && value2 === 'tesoura')) {
        //     return console.log("Jogador 1 ganhou!")
        // } else if (value1 === value2) {
        //     return console.log("Empate!")
        // } else {
        //     return console.log("Jogador 2 ganhou!")
        // }
    }




}

Jokenpo('pedra', 'tesoura')