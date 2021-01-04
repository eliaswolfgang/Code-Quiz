$(document).ready(function () {

    function Quiz(question, A, B, C, D) {
        this.question = question;
        this.answerA = A;
        this.answerB = B;
        this.answerC = C;
        this.answerD = D;
        this.correct;
    };

    var questions = [
        new Quiz("What does HTML stand for?", "JavaScript", "XHTML", "CSS", "Hyper-Text Markup Language", "Hyper-Text Markup Language"),
        new Quiz("Which language is used for styling web pages?", "HTML", "JQuery", "CSS", "XML"),
        new Quiz("The condition of an if/else statment is enclosed within:", "Python Script", "Parantheses", "Brackets", "HTML"),
        new Quiz("What JavaScript syntax can be used to store the output of a function, the content of an array, or a document object?", "let", "const", "var", "All of the above"),
        new Quiz("What method can be called in a JavaScript file to test JavaScript functions, variables, and objects, all utilizing the browser window?", "console.log()", "getElementById", "Cmnd+A", "list") 
    ];

    questions[0].correct = questions[0].answerC;
    questions[1].correct = questions[1].answerC;
    questions[2].correct = questions[2].answerB;
    questions[3].correct = questions[3].answerD;
    questions[4].correct = questions[4].answerA;
    questions[5].correct = 
    var score = 0;
   
    // function setQuestions(quiz) {


    //     }

    //     // $("#B").val(quiz.answerB);
    //     // $("#C").val(quiz.answerC);
    //     // $("#D").val(quiz.answerD);
    // };

    // // function scoreQuestions() {
    // //     const finalAnswer = true;
    // //     finalAnswer = $("input").checked;
    // //     const answer = 

    // // }

    // // function setQuiz(time) {
    // //     setInterval(function(){
    // //         time--; }, 1000);
    // //     time.toString() = $("#clock").text();
    // //     setQuestions(question1);

    // //     while (time > 0) {
    // //         for (i=1 ; i < questionsArr.length ; i++) {
    // //            submitBtn.on("click", setQuestions(questionsArr[i]))
    // //         }
    // //     }



    // setQuestions(questions[0])

});


