'use strict';
import {makeMenu, setTitles, setFooter} from './nQm.js';

const doSomething = function () {
    makeMenu('menu');
    setTitles('Quiz 44, 2021');
    setFooter('nml', 2021);
}
window.addEventListener('load', doSomething);
