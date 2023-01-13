console.log(ReturnLetters('234'))

function ReturnLetters(numbers) {
    let letters = []
    let output = []
    let cellphone = [two = ['a', 'b', 'c'], three = ['d', 'e', 'f'], four = ['g', 'h', 'i'], five = ['j', 'k', 'l'], six = ['m', 'n', 'o'], seven = ['p', 'q', 'r', 's'], eight = ['t', 'u', 'v'], nine = ['w', 'x', 'y', 'z']]
    numbers.split('').forEach(number => {
        switch (number) {
            case '2':
                number = two
                letters.push(number)
                break;
            case '3':
                number = three
                letters.push(number)
                break;
            case '4':
                number = four
                letters.push(number)
                break;
            case '5':
                number = five
                letters.push(number)
                break;
            case '6':
                number = six
                letters.push(number)
                break;
            case '7':
                number = seven
                letters.push(number)
                break;
            case '8':
                number = eight
                letters.push(number)
                break;
            case '9':
                number = nine
                letters.push(number)
                break;
            default:
                alert('deu merda')
                break;
        }
    });
    if (letters.length === 1 && letters[0] != '') {
        output = letters[0]
    }else {
        letters[0].forEach(letter => {
            for (let index = 1; index < letters.length; index++) {
                for (let i = 0; i < letters[index].length; i++) {
                    let newLetter = letter + letters[index][i]
                    output.push(newLetter)
                }
            }
        })
    }
    return output
} 