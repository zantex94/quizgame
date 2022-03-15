import {makeMenu, setTitles, setFooter} from './nQm.js';
import {quiz} from '../data/quizDB.js';         // quiz as literal object
import {doQuiz} from './quizHandler.js';        // handle quiz

const doSomething = function () {
    makeMenu('menu');
    setTitles('Quiz 44, 2021');
    setFooter('nml', 2021);
    doQuiz(quiz, 'here');
};
window.addEventListener('load', doSomething);
