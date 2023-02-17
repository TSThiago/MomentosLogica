const cash = [5, 10, 10 ]

const returnCash = (cash) => {
    let boolean = false
    let myCash = []
    if (cash[0] !== 5) {
        return boolean
    } else {
        cash.forEach(x => {
            switch (x) {
                case x === 5:
                    myCash.push(5)
                    break;
                case x === 10:
                    let found = myCash.find((element, index) => {
                        if (element === 5) {
                            myCash.splice(index, 1)
                            myCash.push(10)
                        } else {
                            boolean = false
                        }
                    })
                default:
                    break;
            }
        })
    }
}

console.log(returnCash(cash))