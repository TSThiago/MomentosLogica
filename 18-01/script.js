
let data = ["Johanna", "", "Gibs", "13-Dez-1981", "F"]

// console.log(data[4])


const ReturnDriversLicense = (data) => {
    let license = []
    let driversLicense = ''
    // Primeiros 5 dígitos:

    let lastNameDigits = ''
    let lastName = []
    lastName = data[2].toUpperCase().split('')
    while(lastName.length < 5){
        lastName.push('9')
    }
    for(let index = 0; index < lastName.length; index++){
        lastNameDigits = lastNameDigits + lastName[index]
    }
    license.push(lastNameDigits)

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
            case "Fev":
                month = "52"
                break;
            case "Mar":
                month = "53"
                break;
            case "Abr":
                month = "54"
                break;
            case "Mai":
                month = "55"
                break;
            case "Jun":
                month = "56"
                break;
            case "Jul":
                month = "57"
                break;
            case "Ago":
                month = "58"
                break;
            case "Set":
                month = "59"
                break;
            case "Out": 
                month = "60"
                break;
            case "Nov": 
                month = "61"
                break;
            case "Dez":    
                month = "62"
                break;
            default:
                break;
        }
        license.push(month)
    }else{
        switch (month) {
            case "Jan":
                month = "01"
                break;
            case "Fev":
                month = "02"
                break;
            case "Mar":
                month = "03"
                break;
            case "Abr":
                month = "04"
                break;
            case "Mai":
                month = "05"
                break;
            case "Jun":
                month = "06"
                break;
            case "Jul":
                month = "07"
                break;
            case "Ago":
                month = "08"
                break;
            case "Set":
                month = "09"
                break;
            case "Out": 
                month = "10"
                break;
            case "Nov": 
                month = "11"
                break;
            case "Dez":    
                month = "12"
                break;
            default:
                break;
        }
        license.push(month)
    }

    // Nono e décimo dígitos:

    let days = data[3].split("-")[0]
    license.push(days)

    // Décimo primeiro dígito:

    let bornDigit = data[3].split("-")[2]
    bornDigit = bornDigit.split('')[3]
    license.push(bornDigit)

    // Décimo segundo e décimo terceiro dígitos:

    let firstNameDigit = data[0].split('')[0]
    license.push(firstNameDigit)

    let secondNameDigit = "9"
    if(data[1] !== ''){
        secondNameDigit = data[1].split('')[0]
    }
    license.push(secondNameDigit)

    // Décimo quarto dígito:

    let digit = "9"
    license.push(digit)
    
    // Décimo quinto e décimo sexto dígitos:

    let lastDigits = "AA"
    license.push(lastDigits)

    for(let i = 0; i < license.length; i++){
        driversLicense = driversLicense + license[i]
    }
    return driversLicense
}

console.log(ReturnDriversLicense(data))