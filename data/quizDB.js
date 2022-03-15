/* quizDB.js a sample quiz as a module */

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
    name: 'Database Quiz',
    created: '2021-11-05',
    score: new Map(),
    questions: 
    [
        {
            category: 'SQL Schema',
            question: 'What is the structural element for storing data in a Relational Database?',
            possibleAnswers: [
                'Text file',
                'Spreadsheet',
                'Object',
                'Table',
                'Array'
            ],
            correctAnswer: 3
        },
        {
            category: 'SQL Data',
            question: 'What is a Join?',
            possibleAnswers: [
                'The gathering of two people in matrimony',
                'A toothpaste',
                'A presentation of data from more than one table',
                'A keyword from a WHERE clause'
            ],
            correctAnswer: 2
        },
        {
            category: 'SQL Data',
            question: 'What is a Union?',
            possibleAnswers: [
                'The gathering of two or more people in matrimony',
                'A laundry detergent',
                'A presentation of data from more than one table',
                'A group function'
            ],
            correctAnswer: 2
        }
    ]
};
