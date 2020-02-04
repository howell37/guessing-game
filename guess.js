let ask = require("readline-sync")
const player = ask.question("Enter your name?\n")

let tries = 1;
let correctAnswers = 0;



function greet(){
let name = player.toUpperCase();
console.log(`⁉️ Welcome ${name} to "Name That 90's Artist ⁉️"`);
console.log(`${name} the rules of the game are simple. There's a computter generated first name displayed and you the user have to complete the artist name with the last name.`)
}
greet();

const artistFn =["backstreet","spice","ricky",
"bestie", "dr", "2", "mariah", "green", "notorius",
"public","guns","snoop","mary", "jay", "missy",
"lauryn","busta", "alicia", "boys","kc", "ll", "a tribe",
"mariah", "faith", "out", "jagged"
]
const artistLn =["boys", "girls","martin",
 "boys", "dre", "pac", "carey", "day", "big",
"enemy", "and roses","dogg","j.blidge", "z","elliot",
"hill", "rhymes", "keys", "2 men","and jojo", "cool j", "called quest",
"carey", "evans", "kast", "edge"
]


function randomArtist() {
 
  let random = Math.floor(Math.random() * artistFn.length);
  let randomArtist = artistFn[random].toUpperCase();
  let artistLastName = artistLn[random].toUpperCase();
  console.log(`Finish the artist ${randomArtist}, name!!!\n`);
  getUserAnswer(artistLastName);
}

randomArtist();

function getUserAnswer(artistLastName) {
  let answer = ask.question("whats your answer?").toUpperCase();
  userResponse(answer, artistLastName);
}
function userResponse(answer, artistLastName){
  if (answer === artistLastName && correctAnswers >= 4) {
    console.log('You won, you are the Music Artist Master!')
  }
  else if (answer === artistLastName && tries < 4){
    console.log("You got it right, here is the next one")
    correctAnswers++
    randomArtist();
  } else if (answer !== artistLastName && tries < 3) {
      console.log('That is incorrect, try again')
      tries++
      getUserAnswer(artistLastName)
    } else if (answer !== artistLastName && tries === 3) {
      console.log('You lost friend')
    }
    
  }
  





