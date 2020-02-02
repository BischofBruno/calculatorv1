// es werden zuerst die Vorgaben zum Schwierigkeitsgrad gefragt
// es werden dann sechs Zahlen per Zufallsgenerator erstellt und im Array abgelegt
// Zahlen 1 und 2 für eine Addition, Zahlen 3 und 4 für eine Subtraktion und Zahlen 5 und 6 für eine Mulitplikation
  let summandMax = prompt('Wie gross dürfen die Summanden höchstens sein?');
  let minuendMax = prompt('Wie gross darf der Minuend höchstens sein?');
  let subtrahendMax = prompt('Wie gross darf der Subtrahend höchstens sein?');
  let factorMax = prompt('Wie gross dürfen die Faktoren höchstens sein?');
  Number.random = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  };
  var randomNumber1 = Number.random(1,summandMax);
  console.log(randomNumber1);
  var randomNumber2 = Number.random(1,summandMax);
  console.log(randomNumber2);
  var randomNumber3 = Number.random(1,minuendMax);
  console.log(randomNumber3);
  var randomNumber4 = Number.random(1,subtrahendMax);
  console.log(randomNumber4);
  var randomNumber5 = Number.random(1,factorMax);
  console.log(randomNumber5);
  var randomNumber6 = Number.random(1,factorMax);
  console.log(randomNumber6);

// hier folgen die Ablage in einem Array mit Ablage der beiden Zahlen, der Vorgabe des Operators und der Berechnung des Resultats im Array
// vierdimensionales Array mit drei Einträgen
let calculations = [
  [
  randomNumber1,
  randomNumber2,
  '+',
  randomNumber1+randomNumber2
],
[
  randomNumber3,
  randomNumber4,
  '-',
  randomNumber3-randomNumber4
],
[
  randomNumber5,
  randomNumber6,
  '*',
  randomNumber5*randomNumber6
],
]

