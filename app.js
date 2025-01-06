const quiz = [
    {
        question: " Which of the following is NOT a JAvaScript data type?",
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
    }
];

