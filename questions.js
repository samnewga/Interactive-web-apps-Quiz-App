// Stores 5 questions used in the quiz along with their options, correct answer and variables used to keep track of current question number and score
const STORE = {
  // Question 1
  questions: [
    {
      // Question 
      question: "What is the purpose of the doctype command in a HTML file?",
      
      // Question options
      options: [
        "Commands the browser to parse the page as HTML5.", 
        "Commands the browser to parse the page as HTML25.", 
        "Commands the HTML file to be compatible with CSS", 
        "Commands the browser to parse the page as CSS"
      ],
      
      // Correct answer
      answer: "Commands the browser to parse the page as HTML5."
    },

    {
      // Question 2
      question: "What is a <head> element?",

      // Question
      options: [
        "An element that contains metadata about the HTML document.",
        "An element that contains headers.", 
        "An element that contains useless information about the HTML document.",
        "The most important element."
      ],

      // Correct answer
      answer: "An element that contains metadata about the HTML document."
    },

    {
    // Question 3
      question: "What does CSS stand for?",

      // Question options
      options: [
        "Cell Structure Sentence.", 
        "Cascading Sign Sheets.", 
        "Cascading Style Sheets.", 
        "Concrete Style Sheets."
      ],

      // Correct answer
      answer: "Cascading Style Sheets."
    },

    {
      // Question 4
      question: "What are forms?", 

      // Question options
      options: [
        "A CSS library.",
        "A JavaScript library.", 
        "Containers that hold a set of inputs.", 
        "Containers that hold a set of outputs."
        ],

      // Correct answer
      answer: "Containers that hold a set of inputs."
    },

    {
      // Question 5
      question: "What is a const?",

      // Question options
      options: [
        "The constitution.", 
        "A variable that can be reasigned.", 
        "A variable that cannot be reasigned.", 
        "A type of color."
      ],

      // Correct answer
      answer: "A variable that cannot be reasigned."
    },
  ],

  // Variable for current question number, starting at 0
  currentQuestion: 0,

  // Variable for current score, starting at 0
  score: 0
};