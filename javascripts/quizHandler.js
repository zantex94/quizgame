import {$} from './nQm.js';
import {Quiz, Question} from './Quiz.js';

/*
 * setup and print quiz
 * 
 * @quiz is pointing to the quiz data module
 * @where points to the id in the html where the quiz will be rendered
 */
export const doQuiz = function (quiz, where) {
    /*
     * add methods from class to literal questions
     */
    let que = new Question('cat', 'whoami?');   // dummy class to get methods
    for (let question of quiz.questions) {
        question.getQuestion = que.getQuestion;
        question.getCorrectAnswer = que.getCorrectAnswer;
        question.toString = que.toString;
        question.toRadio = que.toRadio;
    }
    /*
     * add methods from dummy class to literal quiz
     */
    let qui = new Quiz('wtq');                  // dummy class to get methods
    quiz.shuffle = qui.shuffle;
    quiz.getName = qui.getName;
    quiz.getCountQ = qui.getCountQ;
    quiz.toString = qui.toString;
    quiz.controls2string = qui.controls2string;
    /*
     * print quiz
     */
    let rc;
    $(where).innerHTML = quiz.toString();
    $('form22').addEventListener('change', function rc(e) {
        let a = e.target.id.split('_');                 // event handler for form change
        let sc = quiz.score.get(a[0]);                  // quiz score updated
        sc.scored = Number(a[1]);
        quiz.score.set(a[0], sc);
    });
    
    $(where).innerHTML += quiz.controls2string();
    $('score').addEventListener('click', function (e) { // handler for score button
        document.removeEventListener('change', rc);     // remove change event
        let complete = true;
        if ($('form22').whoami.value == '') {           // check for name
            complete = false;
        }
        let score = 0;
        let total = quiz.getCountQ();
        quiz.score.forEach(function (q, i) {            // verify all q's answered
            if (q.scored === null) {
                complete = false;
                return;
            }
        });
        if (! complete) {
            $('feedback').innerHTML = `Enter name and  answer all questions`;
            e.preventDefault();
            return;
        }
        
        

        quiz.score.forEach(function (q) {
            if (q.correct === q.scored)
                score++;
        });
        $('feedback').innerHTML = `${score}/${total}`;
        let tmp = JSON.stringify(quiz);
        console.log(tmp);
        e.preventDefault();
        return false;
    });
};
