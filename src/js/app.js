// making changes for initial commit
$(() => {
  console.log('JS loaded!');

  const questionBank = [
    {
      question: 'What is the name of Scary Terry\'s child?',
      answers: [
        'Dave',
        'Brandon',
        'Bradley',
        'Terry Jnr'
      ],
      correctIndex: 1,
      score: 200
    },
    {
      question: 'When making a Plumbus, why is it important that the Fleeb is rubbed?',
      answers: [
        'It is needed to repurpose the Schleem',
        'It is required to smooth out the Dinglebob ',
        'Because the Fleeb has all of the Fleeb juice',
        'Because it is needed to shave away the Plubus, as there are several hizards in the way'
      ],
      correctIndex: 2,
      score: 200
    }
  ];


  const $startButton = $('.start-button');
  const $resetButton = $('.reset-button');
  const $instructions = $('#instructions');
  const $gameOver = $('#game-over');
  const $gameBoard = $('#game-board');
  const $wellDone = $('#well-done');
  const $questionBox = $('.currentQ');

  const $button1 = $('.option1');
  const $button2 = $('.option2');
  const $button3 = $('.option3');
  const $button4 = $('.option4');

  const $buttons = $('.answer');
  let questionIndex = 0;
  const rightIndex = 0;

  let questionObject = null;

  function startGame() {
    $instructions.addClass('hidden');
    $gameOver.addClass('hidden');
    $gameBoard.removeClass('hidden');
    $wellDone.addClass('hidden');
    showQuestion();
  }



  function showQuestion() {
    questionObject = questionBank[questionIndex];

    // if last round = display well done div
    if (questionIndex === questionBank.length){
      console.log('$instructions', $instructions);
      $instructions.addClass('hidden');
      console.log('$gameOver', $gameOver);
      $gameOver.addClass('hidden');
      console.log('$gameBoard', $gameBoard);
      $gameBoard.addClass('hidden');
      console.log('$wellDone', $wellDone);
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

  // }
  // check index of answer on button === correct index
  // if so move to next question within questionBank
  // if not then display game over screen
  function checkButtons (e){
    const IsItcorrect = questionBank[rightIndex];
    $button1.html(IsItcorrect.correctIndex[rightIndex]);
    console.log($(e.target).index());
    console.log(questionObject.correctIndex);

    if (questionObject.correctIndex === $(e.target).index()){
      console.log('working!');
      questionIndex ++;
      showQuestion();

    } else {
      console.log('not working :/');
      $instructions.addClass('hidden');
      $gameOver.removeClass('hidden');
      $gameBoard.addClass('hidden');
      questionIndex = 0;
    }


  }

  // if (questionBank[questionIndex] > 15) {
  //   showQuestion();
  // } else {
  //   $instructions.addClass('hidden');
  //   $gameOver.addClass('hidden');
  //   $gameBoard.addClass('hidden');
  //   $wellDone.removeClass('hidden');


  $startButton.on('click', startGame);
  $buttons.on('click', checkButtons);
  $resetButton.on('click', startGame);

// if wrong answer clicked by user
// $instructions.addClass('hidden');
// $gameOver.removeClass('hidden');
// $gameBoard.addClass('hidden');
// push image
});
