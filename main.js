// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
var primo_tiro = Math.floor(Math.random() * 6) + 1;
console.log(primo_tiro);
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
var secondo_tiro = Math.floor(Math.random() * 6) + 1;
console.log(secondo_tiro);
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

var player1 = primo_tiro;
var player2 = secondo_tiro;

if (primo_tiro > secondo_tiro) {
    console.log("player1 you won");
} else if (primo_tiro == secondo_tiro) {
    console.log("no one won");

}
else {
    console.log("player2 you won");
}
