// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
var primo_tiro = Math.floor(Math.random() * 6) + 1;
console.log(primo_tiro);
document.getElementById('player1').innerHTML = ("Player 1 your number is: " + primo_tiro)
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
var secondo_tiro = Math.floor(Math.random() * 6) + 1;
console.log(secondo_tiro);
document.getElementById('player2').innerHTML = ("Player 2 your number is: " + secondo_tiro)
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


if (primo_tiro > secondo_tiro) {
    console.log("player1 you won");
    document.getElementById('winner').innerHTML = ("Player 1 you won");
} else if (primo_tiro == secondo_tiro) {
    console.log("no one won");
    document.getElementById('winner').innerHTML = ("No one has won! It's a tie!")

}
else {
    console.log("player2 you won");
    document.getElementById('winner').innerHTML = ("Player 2 you won")
}
