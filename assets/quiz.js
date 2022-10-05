$(document).ready(function () {
  let currentIndex = 0;
  var timeLeft = $('#timer');
  var timerValue = 90;
  var time;
  var highScoresList = $('#scoresList');
  var questionContainer = $('#questionContainer');
  questionContainer.empty();
  var questionRow = $('<div></div>', { class: 'row' }).appendTo(
    $('.container')
  );
  var questionDisplay = $('<h4></h4>');
  var answerRow = $('<div></div>', { class: 'row' }).appendTo($('.container'));
  var answersDisplay = $('<div></div>', {
    class: 'btn-group-vertical',
  }).appendTo(answerRow);
  var answerButtonA = $('<button></button>', {
    class: 'btn btn-transparent border-primary m-2',
    type: 'button',
  });
  var answerButtonB = $('<button></button>', {
    class: 'btn btn-transparent border-primary m-2',
    type: 'button',
  });
  var answerButtonC = $('<button></button>', {
    class: 'btn btn-transparent border-primary m-2',
    type: 'button',
  });
  var answerButtonD = $('<button></button>', {
    class: 'btn btn-transparent border-primary m-2',
    type: 'button',
  });

  function Question(q, answerA, answerB, answerC, answerD, correct) {
    this.question = q;
    this.A = answerA;
    this.B = answerB;
    this.C = answerC;
    this.D = answerD;
    this.correct = correct;
  }

  const questions = [
    new Question(
      'What does HTML stand for?',
      'JavaScript',
      'Heavy Type Market Letters',
      'CSS',
      'Hyper-Text Markup Language',
      'Hyper-Text Markup Language'
    ),
    new Question(
      'Which language is used for styling web pages?',
      'HTML',
      'JQuery',
      'CSS',
      'XML',
      'CSS'
    ),
    new Question(
      'The condition of an if/else statment is enclosed within:',
      'Python Script',
      'Parantheses',
      'Brackets',
      'HTML',
      'Parantheses'
    ),
    new Question(
      'What JavaScript syntax can be used to store the output of a function, the content of an array, or a document object?',
      'let',
      'const',
      'var',
      'All of the above',
      'All of the above'
    ),
    new Question(
      'What method can be called in a JavaScript file to test JavaScript functions, variables, and objects, all utilizing the browser window?',
      'console.log()',
      'getElementById',
      'Cmnd+A',
      'list',
      'console.log()'
    ),
  ];

  function countDown() {
    timeLeft.html(`${timerValue}`);
    timeLeft.html(`${timerValue} seconds left`);
    if (timerValue === 0) {
      clearInterval(time);
      storeScore();
    }
    timerValue--;
  }

  function generateQuestion() {
    $('#scoresList').empty();
    $('#highScores').attr('disabled', 'true');
    $('#clearScores').attr('disabled', 'true');
    if (questions[currentIndex]) {
      questionDisplay
        .text(questions[currentIndex].question)
        .appendTo(questionRow);
      answerButtonA.text(questions[currentIndex].A).prependTo(answersDisplay);
      answerButtonB.text(questions[currentIndex].B).appendTo(answersDisplay);
      answerButtonC.text(questions[currentIndex].C).appendTo(answersDisplay);
      answerButtonD.text(questions[currentIndex].D).appendTo(answersDisplay);
      questionContainer.append(questionRow);
      questionContainer.append(answersDisplay);
    } else {
      clearInterval(time);
      storeScore();
    }
  }

  function getUser() {
    var user = prompt(
      'Please enter your initials if you would like to save your score, or click Cancel to view your score without saving.'
    );
    if (user === '' || user === null) {
      return;
    } else {
      var name = user;
      var highScores = JSON.parse(localStorage.getItem('scores')) || [];
      var scoreObj = {
        user: name,
        score: timerValue,
      };
      highScores.push(scoreObj);
      localStorage.setItem('scores', JSON.stringify(highScores));
    }
  }

  function storeScore() {
    $('#prevAnswersContainer').empty();
    questionContainer.empty();
    $('p').empty();
    timeLeft.html(`Your score is: ${timerValue}`);
    $('#highScores').removeAttr('disabled');
    $('#clearScores').removeAttr('disabled');
    getUser();
  }

  function showScores() {
    var htmlString = '';
    var highScores = JSON.parse(localStorage.getItem('scores'));
    if (!highScores) {
      htmlString += `<p class="border border-warning rounded-top mx-5 px-2 py-3">No high scores have been saved!</p>`;
    } else {
      const sortedScores = highScores.sort((a, b) => b.score - a.score);
      for (let i = 0; i < sortedScores.length; i++) {
        htmlString += `<p class="border border-success rounded-top mx-5 px-2 py-3">${
          i + 1
        }. ${sortedScores[i].user}: ${highScores[i].score}</p>`;
      }
    }
    highScoresList.html(htmlString);
  }

  function clearScores() {
    localStorage.clear();
    showScores();
    location.reload();
  }

  $(document).on('click', '.btn-transparent', function () {
    let htmlString;
    // console.log(questions[currentIndex].correct);
    const clickedAnswer = $(this).text();
    // console.log(clickedAnswer);
    if (clickedAnswer !== questions[currentIndex]?.correct) {
      htmlString = $(
        `<p class="border border-danger rounded-top mx-5 px-2 py-3">Question ${
          currentIndex + 1
        }: Incorrect!</p>`
      );
      timerValue -= 5;
    } else {
      htmlString = $(
        `<p class="border border-success rounded-top mx-5 px-2 py-3">Question ${
          currentIndex + 1
        }: Correct!</p>`
      );
    }
    $('#prevAnswersContainer').append(htmlString);
    currentIndex++;
    generateQuestion();
  });

  $('#highScores').on('click', function () {
    showScores();
  });

  $('#clearScores').on('click', function () {
    clearScores();
  });

  $('#startButton').on('click', function () {
    generateQuestion();
    $('#startButton').hide();
  });

  $('#startButton').on('click', function () {
    time = setInterval(countDown, 1000);
    countDown();
  });
});
