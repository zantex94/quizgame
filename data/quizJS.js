/* quizJS.js a sample quiz as a module */

/*
 * a quiz is an array of a name, a Date, and an array of questions
 */

/*
 * a question is an array of
 * category, question,
 * an array of possible answers,
 * and a pointer to the correct answer
 */
export const quiz = {
    name: 'JavaScript Quiz',
    created: '2021-10-31',
    score: new Map(),
    questions: 
    [
        {
            category: 'JavaScript in the Browser',
            question: 'Which of the following lists contain only JavaScript types?',
            possibleAnswers: [
                'Boolean, Number, Text, Array',
                'Boolean, Number, Text, Collection',
                'Boolean, Integer, Float, Text, Array',
                'Boolean, Number, String, Array, Null'
            ],
            correctAnswer: 3
        },
        {
            category: 'JavaScript in the Browser',
            question: 'Which of the following statements makes a module available to JavaScript?',
            possibleAnswers: [
                'require',
                'request',
                'import',
                'require once'
            ],
            correctAnswer: 2
        },
        {
            category: 'JavaScript in the Browser',
            question: 'What is AJaX?',
            possibleAnswers: [
                'A window cleaning chemical',
                'A way for JavaScript to access a server',
                'An iPhone app written in JavaScript',
                'A specific integrated development environment'
            ],
            correctAnswer: 1
        },
        {
            category: 'JavaScript in the Browser',
            question: 'How do you add 1 to the variable foo?',
            possibleAnswers: [
                'foo = foo + 1;',
                'foo++;',
                'foo += 1;',
                '++foo;',
                'any of the above;',
                'none of the above'
            ],
            correctAnswer: 4
        },
        {
            category: 'JavaScript in the Browser',
            question: 'How do you define an array in JavaScript?',
            possibleAnswers: [
                "let arr = (1, 2, 'a', b);",
                "let arr = (1; 2; 'a'; b);",
                "let arr = [1, 2, 'a', b];",
                "let arr = 1, 2, 'a', b;",
                "let arr = \"1, 2, 'a', b\";",
            ],
            correctAnswer: 2
        }
    ]
};
