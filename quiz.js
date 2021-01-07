$(document).ready(function () {


    let currentIndex = 0;
    var timeLeft = $("#timer");
    var timerValue = 90;
    var time;

    var questionContainer = $("#questionContainer");
    questionContainer.empty();

        var questionRow = $("<div></div>", { class: "row" }).appendTo($(".container"));
        var questionDisplay = $("<h4></h4>");
        var answerRow = $("<div></div>", { class: "row" }).appendTo($(".container"));
        var answersDisplay = $("<div></div>", { class: "btn-group-vertical" }).appendTo(answerRow);
        var answerButtonA = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonB = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonC = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonD = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });

    function Question(q, answerA, answerB, answerC, answerD) {
        this.question = q;
        this.A = answerA;
        this.B = answerB;
        this.C = answerC;
        this.D = answerD;

    };

    const questions = [
        new Question("What does HTML stand for?", "JavaScript", "Heavy Type Market Letters", "CSS", "Hyper-Text Markup Language"),
        new Question("Which language is used for styling web pages?", "HTML", "JQuery", "CSS", "XML"),
        new Question("The condition of an if/else statment is enclosed within:", "Python Script", "Parantheses", "Brackets", "HTML"),
        new Question("What JavaScript syntax can be used to store the output of a function, the content of an array, or a document object?", "let", "const", "var", "All of the above"),
        new Question("What method can be called in a JavaScript file to test JavaScript functions, variables, and objects, all utilizing the browser window?", "console.log()", "getElementById", "Cmnd+A", "list")
    ];
    const correctAnswers = [
        questions[0].D,
        questions[1].C,
        questions[2].B,
        questions[3].D,
        questions[4].A,
    ];

    function countDown() {
        timeLeft.html(`${timerValue}`);  
        timeLeft.html(`${timerValue--} seconds left`);
        if (timerValue < 0) {
            clearInterval(time);

        }    
    };

    function generateQuestion() {
        if (currentIndex === questions.length) {
            clearInterval(time);
            storeScore();
        } else {
        questionDisplay.text(questions[currentIndex].question).appendTo(questionRow);
        answerButtonA.text(questions[currentIndex].A).prependTo(answersDisplay);
        answerButtonB.text(questions[currentIndex].B).appendTo(answersDisplay);
        answerButtonC.text(questions[currentIndex].C).appendTo(answersDisplay);
        answerButtonD.text(questions[currentIndex].D).appendTo(answersDisplay);
        questionContainer.append(questionRow);
        questionContainer.append(answersDisplay);
        currentIndex++; 
        }
     };

     function storeScore() {
        questionContainer.empty();
        $("p").empty();
        timeLeft.html(`Your score is: ${timerValue}`);
        var user = prompt("Please enter your initials if you would like to save your score, or click Cancel to view your score without saving.");
        if (user === "" || user === null) {
            return;
        } else {
            var name = user
            var highScores = JSON.parse(localStorage.getItem("scores")) ||[];
            var scoreObj = {
                user: name,
                score: timerValue
            }
             highScores.push(scoreObj);
             localStorage.setItem("scores", JSON.stringify(highScores));        
        }
            
    };

    function showScores() {
        var htmlString = "";
        var highScoresList = $("#scoresList");
        var highScores = JSON.parse(localStorage.getItem("scores")) ||[];
        for(let i = 0; i < highScores.length; i++) {
            if (highScoresList !== "") {
                return;
            } else {
            htmlString += `<li>${highScores[i].user}: ${highScores[i].score}</li>`;
            highScoresList.append(htmlString);
            }
        }
          
    };
    
    function clearScores() {
        localStorage.clear();
        showScores();
        location.reload();
    };

    $(document).on("click",".btn-transparent",function(){
        const currentCorrectAnswer = correctAnswers[currentIndex-1];
        const clickedAnswer = $(this).text();
            if (clickedAnswer !== currentCorrectAnswer) {
                timerValue -= 5; 
            }
            generateQuestion();
        });

    $("#highScores").on("click", function (){
        showScores();
    });
            
    $("#clearScores").on("click", function(){
        clearScores();
    });

    $("#startButton").on("click", function () {
        generateQuestion();
        $("#startButton").hide();
    });

    $("#startButton").on("click", function () {
        time = setInterval(countDown, 1000)
        countDown();  
    }); 

})