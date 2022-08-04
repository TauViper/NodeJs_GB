import readlineSync from "readline-sync";

let endGame = false;

console.log("Привет!\nНачинается Игра!\n");
while (!endGame) {
  const headsOrTails = readlineSync.question("Please type 1 or 0\n");
  if (Math.random() > 0.5 && headsOrTails === "1") {
    console.log("Congratulation! You win\n");
  } else {
    console.log("Sorry, you lost\n");
  }
  const userEndGame = readlineSync.question(
    "Finish the game? [Y(yes)/N(no)]\n"
  );
  if (userEndGame.toLowerCase() === "y") {
    endGame = true;
  }
}
