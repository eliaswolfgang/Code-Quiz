$(document).ready(function () {


    let currentIndex = 0;

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
    ]
    const correctAnswers = [
        questions[0].D,
        questions[1].C,
        questions[2].B,
        questions[3].D,
        questions[4].A
    ];


    function generateQuestion() {

        // alert("I clicked start btn");

        var questionContainer = $("#questionContainer");

        questionContainer.empty();
        console.log(questions);
        var questionRow = $("<div></div>", { class: "row" }).appendTo($(".container"));
        var questionDisplay = $("<h4></h4>");
        var answerRow = $("<div></div>", { class: "row" }).appendTo($(".container"));
        var answersDisplay = $("<div></div>", { class: "btn-group-vertical" }).appendTo(answerRow);
        var answerButtonA = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonB = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonC = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });
        var answerButtonD = $("<button></button>", { class: "btn btn-transparent border-primary", type: "button" });

        questionDisplay.text(questions[currentIndex].question).appendTo(questionRow);
        answerButtonA.text(questions[currentIndex].A).prependTo(answersDisplay);
        answerButtonB.text(questions[currentIndex].B).appendTo(answersDisplay);
        answerButtonC.text(questions[currentIndex].C).appendTo(answersDisplay);
        answerButtonD.text(questions[currentIndex].D).appendTo(answersDisplay);
        currentIndex++;

        questionContainer.append(questionRow);
        questionContainer.append(answersDisplay);

        const optionBtns = $('.btn-transparent');

    optionBtns.each(function () {

        $(this).on("click", function () {
            
            const currentCorrectAnswer = correctAnswers[currentIndex];
            const clickedAnswer = $(this).text();

            if (clickedAnswer === currentCorrectAnswer) {
                alert("Thanks!")
            }
        })
    });


    };


    $("#startButton").on("click", function () {
        generateQuestion();
    });


    



});



    // function getUser() {
    //     var user = prompt("Please enter your name if you would like to save your score, or click Cancel to continue playing as a guest.");
    //     if (user === "" || user === null) {
    //         return; 
    //     } else {
    //         localStorage.setItem("name" , JSON.stringify(user))
    //     }
    // };
    // 




// function countDown(){
//     quizContainer.style.display = "block"
//     var timerValue = 120
//     var timeLeft = document.querySelector(".timer")
//     timeLeft.innerHTML = `<p>${timerValue}</p>`   
//     var time = setInterval(
//         function(){
//             if(timerValue<= 0 || quiz.isEnded(true)){
//                 clearInterval(time);
//             }
//             timeLeft.innerHTML = `<p>${timerValue--}</p>`;
//          }, 1000);
//     generateQuestion();
// } 