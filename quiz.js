$(document).ready(function() {

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
        questions[0].answerD,
        questions[1].answerC,
        questions[2].answerB,
        questions[3].answerD,
        questions[4].answerA    
    ];
    
    var questionRow = $("<div></div>", {class:"row"}).appendTo($(".container"));
    var questionDisplay = $("<h4></h4>");
    var answerRow = $("<div></div>", {class:"row"}).appendTo($(".container"));
    var answersDisplay = $("<div></div>", {class:"btn-group-vertical"}).appendTo(answerRow);
    var answerButtonA = $("<button></button>", {class:"btn btn-transparent border-primary", type:"button"});
    var answerButtonB = $("<button></button>", {class:"btn btn-transparent border-primary", type:"button"});
    var answerButtonC = $("<button></button>", {class:"btn btn-transparent border-primary", type:"button"});
    var answerButtonD = $("<button></button>", {class:"btn btn-transparent border-primary", type:"button"}); 
        
   function generateQuestions() {
        $.each(questions, function(){
            questionDisplay.text(this.question).appendTo(questionRow);
            answerButtonA.text(this.A).prependTo(answersDisplay);
            answerButtonB.text(this.B).appendTo(answersDisplay);
            answerButtonC.text(this.C).appendTo(answersDisplay);
            answerButtonD.text(this.D).appendTo(answersDisplay);
        });
          
    };
generateQuestions()
})
    
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