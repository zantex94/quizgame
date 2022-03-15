/*
 * class Quiz
 */
export class Quiz {
    constructor(name) {
        this.name = name;
        this.created = new Date();
        this.score = new Map();
        this.questions = [];
    }
    
    addQuestion(q) {
        this.questions.push(q);
    }
    
    getName() {
        return this.name;
    }
    getCountQ() {
        return this.questions.length;
    }
    
    /* shuffle array - easy way */
    shuffle() {
        this.questions.sort(function () {
            return Math.random() - 0.5;
        });
    }
    /* sort questions, reset score map, and deliver string to caller */
    toString() {
        this.shuffle();
        this.score = new Map();
        
        let s = `<h2>${this.getName()}</h2>`;
        let m = this.score;

        this.questions.forEach(function (question, i) {
            s += `<div>\n<p class='question'>${question.toString()}</p>`;
            s += `${question.toRadio(i)}\n</div>`;
            m.set(`q${i}`, {correct: question.getCorrectAnswer(), scored: null});
        });
        return s;
    }
    /* quiz controls. */
    controls2string() {
        let s = `<div class='controls'>`;
        s += `<input id='whoami' placeholder='Enter name' type='text'/>`;
        s += `&nbsp;<button id='score'>Score</button>`;
        s += `&nbsp;<button type='reset'>Reset</button>`;
        s += `<p id='feedback'></p>`;
        s += `</div>`;
        return s;
    }
}

/*
 * class Question
 */
export class Question {
    constructor(category, question) {
        this.category = category;
        this.question = question;
        this.possibleAnswers = [];
        this.correctAnswer = -1;
    }
    
    getQuestion(q) {
        return this.question;
    }
    
    addAnswer(a) {
        this.possibleAnswers.push(a);
    }
    setCorrrectAnswer(n) {
        this.correctAnswer = 0 <= n && n < this.possibleAnswers.length ? n : -1;
    }
    getCorrectAnswer() {
        return this.correctAnswer;
    }
    
    toString() {
        return this.getQuestion()
    }
    
    toRadio(j) { // loop answers to string as radio buttons
        let s = ``;
        this.possibleAnswers.forEach(function (answer, i) {
            s += `<input class='radios' type='radio' name='q${j}' id='q${j}_${i}' value='q${j}_${i}'/>`;
            s += `<label for='q${j}_${i}'>${answer}</label><br/>`;
        });
        return s;
    }
}
