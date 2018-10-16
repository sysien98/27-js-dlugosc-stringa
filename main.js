let zmienna1 = 'Uwielbiam JavaScript';
let zmienna2 = 'Jestem świetnym programistą';
function longer(pierwsza, druga) {
    if (pierwsza.length > druga.length) {
    return 'Uwielbiam JavaScript';
}
    else {
        return'Jestem świetnym programistą';
    }
}
console.log(longer(zmienna1, zmienna2));