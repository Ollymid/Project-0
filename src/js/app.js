// making changes for initial commit
$(() => {
  console.log('JS loaded!');


  const $startButton = $('.start-button');
  const $resetButton = $('.reset-button');
  const $questionBox = $('.currentQ');

  const $instructions = $('#start');
  const $wellDone = $('#well-done');
  const $gameBoard = $('#game-board');
  const $phoneFriend = $('#meeseeks-box');
  const $jerrified = $('#fifty-fifty');
  const $askAudience = $('#council');
  const $gameOver = $('#game-over');

  const $choice1 = $('.choice1');
  const $choice2 = $('.choice2');
  const $choice3 = $('.choice3');
  const $jerry1 = $('#choice1');
  const $jerry2 = $('#choice2');


  const $button1 = $('.option1');
  const $button2 = $('.option2');
  const $button3 = $('.option3');
  const $button4 = $('.option4');
  const $buttons = $('.answer');
  const $meeseseeksButton = $('.meeseseeksButton');
  const $dumbDown = $('.jerry');
  let questionIndex = 0;
  const rightIndex = 0;

  let questionObject = null;

  function startGame() {
    $instructions.addClass('hidden');
    $gameBoard.removeClass('hidden');
    $choice1.prop('disabled', false);
    $choice2.prop('disabled', false);
    showQuestion();
  }

  function restartGame(){
    $instructions.removeClass('hidden');
    $wellDone.addClass('hidden');
    $gameOver.addClass('hidden');
    $choice1.prop('disabled', false);
    $choice2.prop('disabled', false);
    showQuestion();
    shuffle(questionBank);

  }

  function showQuestion() {
    questionObject = questionBank[questionIndex];

    // if the number of questions index = 15 - sends user to well done screen
    if (questionIndex === 15){
      $instructions.addClass('hidden');
      $gameOver.addClass('hidden');
      $gameBoard.addClass('hidden');
      $wellDone.removeClass('hidden');
      questionIndex = 0;
      // else it carrys on the game
    } else {
      //  adds question property to the question box
      $questionBox.html(questionObject.question);
      // and adds answer array elements to the buttons
      $button1.html(questionObject.answers[0]);
      $button2.html(questionObject.answers[1]);
      $button3.html(questionObject.answers[2]);
      $button4.html(questionObject.answers[3]);
      questionIndex ++;
    }
  }

  // this function checks the index of the button clicked with the index of the answers array and compares them. If they are the same it runs the next question. If not then it takes the user to the game over screen.
  function checkButtons (e){
    const IsItcorrect = questionBank[rightIndex];
    // pushes the questions from the question array into the buttons
    $buttons.html(IsItcorrect.correctIndex[rightIndex]);

    // compares button index to the index of correct question - if the same = next question
    if (questionObject.correctIndex === $(e.target).index()){
      console.log('working!');


      showQuestion();

    } else {
      console.log('you died');
      $instructions.addClass('hidden');
      $gameOver.removeClass('hidden');
      $gameBoard.addClass('hidden');
      questionIndex = 0;
    }

  }

  // gameboard hidden phone a friend unhidden
  function helperOne (){
    $phoneFriend.removeClass('hidden');
    $gameBoard.addClass('hidden');
  }

  // function alerts correct answer and then sends user back to gameboard - button disbaled after use
  function mrMeeseeks(){
    const correctAnswer = questionObject.answers[questionObject.correctIndex];
    $phoneFriend.addClass('hidden');
    $gameBoard.removeClass('hidden');
    alert(correctAnswer);
    $choice1.prop('disabled', true);
  }

  function helperTwo(){

    $jerrified.removeClass('hidden');
    $gameBoard.addClass('hidden');

    $jerry1.html(questionObject.answers[questionObject.fiftyfifty[0]]);
    $jerry2.html(questionObject.answers[questionObject.fiftyfifty[1]]);
    console.log(questionObject.fiftyfifty[0]);
    console.log(questionObject.fiftyfifty[1]);
  }

  function checkFiftyFifty (e){

    if (questionObject.fiftyIndex === $(e.target).index('button.jerry')){
      // questionIndex ++;

      console.log('you live');
      console.log(questionObject.correctIndex);
      console.log($(e.target));
      console.log($(e.target).index());
      $gameBoard.removeClass('hidden');
      $jerrified.addClass('hidden');
      showQuestion();
      $choice2.prop('disabled', true);
    } else {
      console.log('you died');
      console.log(questionObject.fiftyIndex);
      console.log($(e.target));
      console.log($(e.target).index());
      $gameOver.removeClass('hidden');
      $jerrified.addClass('hidden');

      questionIndex = 0;
    }
  }

  function helperThree () {
    $askAudience.removeClass('hidden');
    $gameBoard.addClass('hidden');

    function generatePercentages() {
      const percentages = [Math.random(), Math.random(), Math.random(), Math.random()];
      const total = percentages.reduce((a, b) => a + b);

      return percentages.map((percentage) => {
        return Math.round((percentage / total) * 100);
      });
    }

    let askTheAudience = generatePercentages();
    let totalPercentages = askTheAudience.reduce((a, b) => a + b);

    while(totalPercentages !== 100) {
      askTheAudience = generatePercentages();
      totalPercentages = askTheAudience.reduce((a, b) => a + b);
    }

    console.log('After loop', askTheAudience, totalPercentages);

    const $bars = $('.bar');
    const $results = $('.results li');

    askTheAudience.forEach((percentage, index) => {
      $bars.eq(index).css('height', `${percentage}%`);
      $results.eq(index).text(`${percentage}%`);
    });

  }



  // click start button - starts new game
  $startButton.on('click', startGame);

  // when one of the choice buttons is clicked - check if button containing correct answer is clicked
  $buttons.on('click', checkButtons);
  // when helper1 button(phone a friend) is clicked - run Mr Meeseeks

  $choice1.on('click', helperOne);
  // if can do button is clicked - run mr meeseeks function and find out the answer
  $meeseseeksButton.on('click', mrMeeseeks);

  //if helper2 button(50:50) is clicked run fiftyfifty function
  $choice2.on('click', helperTwo);
  // if fifty fifty button is clicked - run check fifty fifty
  $dumbDown.on('click', checkFiftyFifty);

  $choice3.on('click', helperThree);

  // restarts the game and shuffles the questions
  $resetButton.on('click', restartGame);


});
