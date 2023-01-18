
let data = ["John", "James", "Smith", "01-Jan-1997", "M"]

const ReturnDriversLicense = (data) => {
    let license = []

    // Primeiros 5 dígitos:

    let lastName = []
    lastName = data[2].toUpperCase().split('')
    while(lastName.length < 5){
        lastName.push('9')
    }

    license.push(lastName)

    //  Sexto dígito:

    let decade = data[3].split("-")[2]
    decade = decade.split('')[2]
    license.push(decade)

    // Sétimo e oitavo dígitos:

    let month = data[3].split("-")[1]
    if(data[4] === "F"){
        switch (month) {
            case "Jan":
                month = "51"
                break;
        
            default:
                break;
        }
    }

    return license
}

console.log(ReturnDriversLicense(data))