const readline = require('readline');

let questions = ["What's your name? Nicknames are also acceptable :) \n",
  "What's an activity you like doing? \n",
  "What do you listen to while doing that? \n",
  "Which meal is your favourite (eg: dinner, brunch, etc.) \n",
  "What's your favourite thing to eat for that meal? \n",
  "Which sport is your absolute favourite? \n",
  "What is your superpower? In a few words, tell us what you are amazing at! \n"];

let answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      if (answer === "no") {
        answers.push("[No answer provided]");
        reject(); //Return a rejected promise object
      } else {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        answers.push(answer)
        resolve(); //Return a resolved promise object
      }
    });
  });
};
//async is needed for functions that include the await keyword.
const main = async() => {
  for (let i = 0; i < questions.length; i++) {
    // await is used to wait for the result of the function to comeback.
    //The ask() function returns a Promise Object. A promise can either be resolved or rejected.
    //You can include two functions to handle the result of the promise using    .then(function1, function2).
    //The first function runs if the promise was resolved. The second function runs only if the promise was rejected.
    await ask(questions[i]).then(function() { //If resolved
      console.log("Loading next question...\n");
    }, function() { //If rejected
      console.log("We are sorry you do not want to answer that...\n");
    });
  }
  rl.close();

  let parapraph = `${answers[0]} likes ${answers[1]} and listens to ${answers[2]}. ${answers[0]}'s favorite meal is ${answers[3]} and eats ${answers[4]}. ${answers[0]}'s loves ${answers[5]} and ${answers[0]}'s superpower is ${answers[6]}`;
  console.log(parapraph);
};

main();









