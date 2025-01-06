const quiz = [
    {
        question: " Which of the following is NOT a JavaScript data type?",
        options: ["Boolean", "Undefined", "Float", "String"],
        answer: 2 //float is not a jS data type, index 2
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "To refer to the global object",
            "To refer to the current object",
            "To create a new object",
            "To define a function"
        ],
        answer: 1 //"to refer to the current object"
    },
    {
        question: "Which method can be used to convert a JSON string into a JS object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
        answer: 0 // "JSON.parse()"
    },
    {
        question: "What is the out put of the expression 'typeof null'?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: 2 //"'object'", this is a known quirk of JS
    },
    {
        question: "Which of the following is a ci=orrect way to define a function in JS?",
        options: [
            "function my func() {}",
            "let my func = function() {}",
            "const myFunc = () => {}",
            "All the above"
        ],
        answer: 3 //All the above
    },
    {
        question: "Which of these array methods is used to create a new array by filtering the elements?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: 2 //"filter()"
    },
    {
        question: "What does the '===' operator check in JS?",
        options: [
            "Equality of value only",
            "Equality of type only",
            "equality of both value and type",
            "Equality of value after type conversion"
        ],
        answer: 2 //"Equality of value and type"
    },
    {
        question: "Which JS feature allows functions to have parameters with default values?",
        options: [
            "Spread operator",
            "Default parameters",
            "Destructing",
            "Arrow functions"
        ],
        answer: 1 //"Default parameters"
    }
];

/* function runQuiz(quiz) {
    let score = 0; //to track user's score

    for (let i = 0; i < quiz.length; i++) {
        const questionObj = quiz[i];
        console.log(`Question ${i + 1}: ${questionObj.question}`);

        //Display the options
        for (let j = 0; j < questionObj.options.length; j++) {
            console.log(`${j}: ${questionObj.options[j]}`);
        }

        //Prompt the user for an answer
        let userAnswer = prompt(`Enter the number of your answer (using index count starting at 0) for Question ${i + 1} `);

        // check if user answer is correct
        if (parseInt(userAnswer) === questionObj.answer) {
            console.log("Correct! 🎉");
            score++; //increment score for correct answer
        } else {
            console.log(`🪫Wrong. The correct answer is: ${questionObj.options[questionObj.answer]}`);
        }
    }

    //Display final score
    console.log(`You completed the quiz! Your final score is: ${score} out of ${quiz.length}`);
}
runQuiz(quiz); */

function renderQuestion(i) {
    const questionObj = quiz[i];
    const quizContent =document.getElementById('quiz-content');

    //clear the content before adding a new question
    quizContent.innerHTML = '';

    //create the question Element
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = questionObj.question;
    quizContent.appendChild(questionElement);

    //create the options
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
    questionObj.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index, i);
        optionsContainer.appendChild(optionButton);
    });
    quizContent.appendChild(optionsContainer);
}

let currentQuestionIndex = 0;
let score = 0;

function checkAnswer(userAnswer, questionIndex) {
    const questionObj = quiz[questionIndex];
    if (userAnswer === questionObj.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        renderQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You completed the quiz! 🎉 Your score is ${score} out of ${quiz.length}`;
}

renderQuestion(currentQuestionIndex);


