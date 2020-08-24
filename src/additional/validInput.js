export function validInput (value, validation, additional) {
    if(validation.minLength && validation.minLength > value.length) {
        return false
    }

    if(validation.matchesWith && additional[validation.matchesWith].value !== value) {
        return false
    }

    return true
}