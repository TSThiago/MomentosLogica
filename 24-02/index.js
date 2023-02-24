const isOne = (currentValue) => currentValue === 1;

const Reducer = (array) => {
    let counter = 1
    let newArray = []
    while (!array.every(isOne)) {
        array.forEach((number, index) => {
            if (number !== array[index + 1] && counter === 1) {
                newArray.push(1)
            } else if (number !== array[index + 1] && counter > 1) {
                newArray.push(counter)
                counter = 1
            } else {
                counter++
                console.log(counter)
            }
        });
        console.log(newArray)
        array = newArray
    }
    console.log(array.length)
}

Reducer([5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1])