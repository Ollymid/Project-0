
const questions = [

  // 1
  {
    question: 'What relationship is Rick to Morty?',
    answers: [
      'A: Creepy uncle',
      'B: Paedophile captor',
      'C: Son from a Benjamin Button style alternate reality',
      'D: Grandfather'
    ],
    correctIndex: 3,
    fiftyfifty: [3, 1],
    score: 200

  },
  // 2
  {
    question: 'What dimension do Rick and Morty originate from?',
    answers: [
      'A: C-137',
      'B: D-69 ',
      'C: OMG-42',
      'D: SOS-3.14159265359...'
    ],
    correctIndex: 0,
    fiftyfifty: [0, 2],
    score: 200
  },
  // 3
  {
    question: 'Who are Rick\'s closest friends and fellow bandates of The Flesh Curtains?',
    answers: [
      'A: Squirtle and Birdyman',
      'B: Squidgy and Birdbrain ',
      'C: Squidward and Nerdperson',
      'D: Squantchy and Birdperson'
    ],
    correctIndex: 3,
    fiftyfifty: [0, 3],
    score: 200
  },
  // 4
  {
    question: 'What is the name of Morty\'s crush?',
    answers: [
      'A: Javascript',
      'B: Jessica ',
      'C: Summer',
      'D: Mrs Pancakes'
    ],
    correctIndex: 1,
    fiftyfifty: [1, 2],
    score: 200
  },
  {
    question: 'What is the slogan of Jerry\'s apple ad campaign that won him an Appley award',
    answers: [
      'A: Think different',
      'B: Hungry for Apples? ',
      'C: Does more, costs less it\'s that simple',
      'D: Buy my stuff please... please?'
    ],
    correctIndex: 1,
    fiftyfifty: [1, 3],
    score: 200
  },
  {
    question: 'How many arms does a Gazorpian have?',
    answers: [
      'A: Six',
      'B: None ',
      'C: Eight',
      'D: four'
    ],
    correctIndex: 0,
    fiftyfifty: [0, 1],
    score: 200
  },
  {
    question: 'Which of these characters is not an alien parasite?',
    answers: [
      'A: Amish Cyborg',
      'B: Reverse Giraffe ',
      'C: Mr Poopy Butthole',
      'D: Sleepy Gary'
    ],
    correctIndex: 2,
    fiftyfifty: [2, 3],
    score: 200
  },
  {
    question: 'What non-weapon does Rick use to make purgers drop their weapons? ',
    answers: [
      'A: A Megaseed suppository',
      'B: A Plumbus',
      'C: An alien dildo',
      'D: Tic Tacs'
    ],
    correctIndex: 3,
    fiftyfifty: [0, 3],
    score: 200
  },
  {
    question: 'Complete the quote from Morty Jnr: \'there was violence, and threats of poison gas..\' ',
    answers: [
      'A: ..But ultimately i enjoyed working for Disney',
      'B: ..But I still graduated from my WDI course',
      'C: ..But also dancing',
      'D: ..But it was a particularly intense game of chess'
    ],
    correctIndex: 2,
    fiftyfifty: [1,2],
    score: 200
  },
  {
    question: 'What powers the miniverse?',
    answers: [
      'A: Flooblecrank',
      'B: Gloopadoopanukenukenuclear energy ',
      'C: Glip glop sperm',
      'D: Kalaxian crystals'
    ],
    correctIndex: 0,
    fiftyfifty: [0, 3],
    score: 200
  },
  {
    question: 'What is the name of Scary Terry\'s child?',
    answers: [
      'A: Scary Dave',
      'B: Scary Brandon',
      'C:Scary Dustin',
      'D: Scary Terry Jnr'
    ],
    correctIndex: 1,
    fiftyfifty: [1,2],
    score: 200
  },
  {
    question: 'Which of these is NOT a Rick catch-phrase?',
    answers: [
      'A: Uh oh! Somersault jump!',
      'B: Lick, lick, lick my balls!',
      'C: Rubber baby buggy bumpers! ',
      'D: Asssss! Tastes bad'
    ],
    correctIndex: 3,
    fiftyfifty: [3, 0],
    score: 200
  },
  {
    question: 'When making a Plumbus, why is it important that the Fleeb is rubbed?',
    answers: [
      'A: It is needed to repurpose the Schleem',
      'B: It is required to smooth out the Dinglebob ',
      'C: Because the Fleeb has all of the Fleeb juice',
      'D: Because it is needed to shave away the Plubus'
    ],
    correctIndex: 2,
    fiftyfifty: [2, 3],
    score: 200
  },
  {
    question: 'How many Jan Michael Vincents are there?',
    answers: [
      'A: 6',
      'B: 16 ',
      'C: 1',
      'D: 8'
    ],
    correctIndex: 3,
    fiftyfifty: [1, 3],
    score: 200
  },
  {
    question: 'What is the name of testicle monster\'s gun?',
    answers: [
      'A: Bob',
      'B: Jack ',
      'C: Chris',
      'D: Steve'
    ],
    correctIndex: 2,
    fiftyfifty: [2, 0],
    score: 200
  },
  {
    question: 'What cereal is so good, children cut open a Leprechaun to eat it out of his internal organs?',
    answers: [
      'A: Kellogs Crack Flakes',
      'B: Strawberry Sniggles',
      'C: Coco Pops',
      'D: Beatawhix'
    ],
    correctIndex: 1,
    fiftyfifty: [1, 0],
    score: 200
  },
  {
    question: 'What did Jerry attempt to use as a weapon at Birdperson\'s wedding?',
    answers: [
      'A: Meeseeks box',
      'B: Confetti Cannon',
      'C: XP20 Prosthetic penis',
      'D: A bucket of worms'
    ],
    correctIndex: 1,
    fiftyfifty: [1, 3],
    score: 200
  }


];


function shuffle(questionBank) {
  var currentIndex = questionBank.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = questionBank[currentIndex];
    questionBank[currentIndex] = questionBank[randomIndex];
    questionBank[randomIndex] = temporaryValue;
  }
  console.log('questions loaded');
  return questionBank;

}

// Used like so

const questionBank = shuffle(questions);
