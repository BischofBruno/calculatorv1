// Kopfrechnung 1, holt Zahlen, Operator und Resultat aus dem Array
let calculation1 = prompt('Wie viel gibt ' +calculations[0][0] +calculations[0][2] +calculations[0][1]);
let resultat1 = calculations[0][0] +calculations[0][2] +calculations[0][1];
console.log(calculations[0][2]);
console.log(calculations[0][3]);
switch (calculation1 == calculations[0][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
    prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[0][0] +calculations[0][2] +calculations[0][1]);
    break;
}

// Kopfrechnung 2, holt Zahlen, Operator und Resultat aus dem Array
let calculation2 = prompt('Wie viel gibt ' +calculations[1][0] +calculations[1][2] +calculations[1][1]);
let resultat2 = calculations[1][0] +calculations[1][2] +calculations[1][1];
console.log(calculations[1][2]);
console.log(calculations[1][3]);
switch (calculation2 == calculations[1][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
    prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[1][0] +calculations[1][2] +calculations[1][1]);
    break;
}

// Kopfrechnung 3, holt Zahlen, Operator und Resultat aus dem Array
let calculation3 = prompt('Wie viel gibt ' +calculations[2][0] +calculations[2][2] +calculations[2][1]);
let resultat3 = calculations[2][0] +calculations[2][2] +calculations[2][1];
console.log(calculations[2][2]);
console.log(calculations[2][3]);
switch (calculation3 == calculations[2][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
        prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[2][0] +calculations[2][2] +calculations[2][1]);
    break;
}