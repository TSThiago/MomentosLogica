const Jokenpo = (value1, value2) => {
    if ((value1 === 'tesoura' && value2 === 'papel') || (value1 === 'papel' && value2 === 'pedra') || (value1 === 'pedra' && value2 === 'lagarto') ||
        (value1 === 'lagarto' && value2 === 'spock') || (value1 === 'spock' && value2 === 'tesoura') || (value1 === 'tesoura' && value2 === 'lagarto') ||
        (value1 === 'lagarto' && value2 === 'papel') || (value1 === 'papel' && value2 === 'spock') || (value1 === 'spock' && value2 === 'pedra') || (value1 === 'pedra' && value2 === 'tesoura')) {
        return console.log("Jogador 1 ganhou!")
    } else if (value1 === value2) {
        return console.log("Empate!")
    } else {
        return console.log("Jogador 2 ganhou!")
    }

}

Jokenpo('tesoura', 'pedra')