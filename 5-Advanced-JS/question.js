var Question = function (text, answerOptions, correctAnswer) {
    this.text = text;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;

}
var counter = 0;

Question.prototype.getRandomQuestion = function () {

    var chosenOne = availableQuestions[Math.floor(Math.random() * 4)];
    console.log(chosenOne.text + '\n');
    chosenOne.answerOptions.forEach(function (option) {
        console.log(chosenOne.answerOptions.indexOf(option) + ': ' + option + '\n');
    });
    Question.prototype.verifyAnswer = function () {
        var answer = prompt('Give an answer', ' ');

        var count = function (ans) {
            if (ans) {
                counter++;
                console.log('your score is ' + counter)
            } else console.log('your score is ' + counter)
        }


        if (answer == chosenOne.correctAnswer) {

            count(true);
            console.log('correct answer');

            this.getRandomQuestion();

            return this.verifyAnswer();
        } else if (answer == 'exit') {
            return
        } else {
            console.log('wrong answer'); {
                this.getRandomQuestion();
                count(false)
                return this.verifyAnswer();
            }

        }
    }

}
var question1 = new Question("Are you cool?", ['yes', 'no'], 'yes');
var question2 = new Question("Is JS amazing?", ['yes', 'no'], 'yes');
var question3 = new Question("Are you the best programmer ever?", ['yes', 'no'], 'yes');
var question4 = new Question("Where is Moldova located?", ['in Africa', 'in Latin America', 'in Europe'], 'in Europe');

var availableQuestions = [question1, question2, question3, question4];
question1.getRandomQuestion();
question1.verifyAnswer();