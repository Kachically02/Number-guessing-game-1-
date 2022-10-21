//prompt user for username and display it

const username = prompt("Please enter your name")

//welcome user

console.log(`welcome ${username}`)
let Point = 0;
let Level = 1;
MaxStage = 100
console.log(`welcome to level ${Level} `)

for (let i = 2; i <= 100; i++) {
  let comGuess = Math.floor(Math.random() * i) + 1
  let userGuess = parseInt(prompt(`Guess a number between 1 and ${i}`));

  console.log(userGuess);

  if (comGuess == userGuess) {
    console.log(`correct`);
    console.log(`Point = ${Point += 1}`);
    console.log(`welcome to level ${Level += 1} `)
  }
  else {
    console.log(`wrong`);
    console.log(`Point = ${Point += 0}`);
    console.log(`welcome to level ${Level += 1} `)
  }
}