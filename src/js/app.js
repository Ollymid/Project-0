// making changes for initial commit
$(() => {
  console.log('JS loaded!');


  const questionBank = [
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
      score: 200
    },
    {
      question: 'When making a Plumbus, why is it important that the Fleeb is rubbed?',
      answers: [
        'A: It is needed to repurpose the Schleem',
        'B: It is required to smooth out the Dinglebob ',
        'C: Because the Fleeb has all of the Fleeb juice',
        'D: Because it is needed to shave away the Plubus, as there are several hizards'
      ],
      correctIndex: 2,
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
      score: 200
    }

  ];

  const $startButton = $('.start-button');
  const $resetButton = $('.reset-button');
  const $questionBox = $('.currentQ');

  const $instructions = $('#start');
  const $wellDone = $('#well-done');
  const $gameBoard = $('#game-board');
  const $helper1 = $('#meeseeks');
  const $helper2 = $('#fifty-fifty');
  const $helper3 = $('#council');
  const $gameOver = $('#game-over');

  const $button1 = $('.option1');
  const $button2 = $('.option2');
  const $button3 = $('.option3');
  const $button4 = $('.option4');
  const $buttons = $('.answer');
  const $meeseseeksButton = $('.meeseseeksButton');
  let questionIndex = 0;
  const rightIndex = 0;

  let questionObject = null;

  function startGame() {
    $instructions.addClass('hidden');
    $gameOver.addClass('hidden');
    $gameBoard.removeClass('hidden');
    $wellDone.addClass('hidden');
    $helper1.addClass('hidden');
    showQuestion();
  }

  function restartGame(){
    $instructions.removeClass('hidden');
    $gameOver.addClass('hidden');
    $gameBoard.addClass('hidden');
    $wellDone.addClass('hidden');
    $helper1.addClass('hidden');
  }

  function showQuestion() {
    questionObject = questionBank[questionIndex];

    if (questionIndex === questionBank.length){
      $instructions.addClass('hidden');
      $gameOver.addClass('hidden');
      $gameBoard.addClass('hidden');
      $wellDone.removeClass('hidden');
      questionIndex = 0;
    } else {
      $questionBox.html(questionObject.question);

      $button1.html(questionObject.answers[0]);
      $button2.html(questionObject.answers[1]);
      $button3.html(questionObject.answers[2]);
      $button4.html(questionObject.answers[3]);
    }
    // run show question


  }
  // this function checks the index of the button clicked with the index of the answers array and compares them. If they are the same it runs the next question. If not then it takes the user to the game over screen.

  function checkButtons (e){
    const IsItcorrect = questionBank[rightIndex];

    $buttons.html(IsItcorrect.correctIndex[rightIndex]);


    if (questionObject.correctIndex === $(e.target).index()){
      console.log('working!');
      questionIndex ++;

      showQuestion();

    } else {
      console.log('you died');
      $instructions.addClass('hidden');
      $gameOver.removeClass('hidden');
      $gameBoard.addClass('hidden');
      questionIndex = 0;
    }

  }

  function mrMeeseeks(){

    const correctAnswer = questionObject.answers[questionObject.correctIndex];
    console.log(correctAnswer);
  }
// click start button - starts new game
  $startButton.on('click', startGame);
// when one of the choice buttons is clicked - check if button containing correct answer is clicked
  $buttons.on('click', checkButtons);
// when meeseeks button is clicked
  $meeseseeksButton.on('click', mrMeeseeks);
  $resetButton.on('click', restartGame);


});
