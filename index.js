// Start quiz function, requires user to click on start quiz button
function startQuiz() {
  $('#start').on('click', function(e){
    firstQuestion();
  }
  );
}

// Restart quiz function, requires user to click on restart quiz button
function restartQuiz() {
  $('body').on('click','#restart', (e) => {
    firstQuestion();
  });
}

// Handles all the quiz functions
function quizApp() {
  startQuiz();
  restartQuiz();
  handleQuestions();
  handleSelectOption();
}

// Starts off the first question and then updates that question to continue forward on quiz
function firstQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  questionCounter();
  const questionHtml = $(`
  <div>

    <form id="thinkful-questions" class="question-form">
      
      <fieldset>
        <div class="row question">
          <div>
            <legend> ${question.question}</legend>
          </div>
        </div>

        <div class="row options">
          <div>
            <div class="thinkful-options"> </div>
        </div>
      </div>
    

      <div class="row">
        <div class="column-style" style="display: flex">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next</button>
        </div>
      </div>
    </fieldset>

    </form>

  </div>`);

$("main").html(questionHtml);
updateOptions();
$("#next-question").hide();
}

// Finds out if there is anymore questions when user clicks on next question
function handleQuestions() {
  $('body').on('click','#next-question', (e) => {
    STORE.currentQuestion === STORE.questions.length?displayResults() : firstQuestion();
  });
}


// Checks the user selected option and compares it to the correct answer in STORE
function handleSelectOption() {
  $('body').on("submit",'#thinkful-questions', function(e) {

    e.preventDefault();

    let currentQues = STORE.questions[STORE.currentQuestion];
    let selectedOption = $("input[name=options]:checked").val();

    if (!selectedOption) {
      alert("Choose an option");
      return;
    } 

    let id_num = currentQues.options.findIndex(i => i === selectedOption);
    let id = "#thinkful-r" + ++id_num;

    $('span').removeClass("right-answer wrong-answer");

    if(selectedOption === currentQues.answer) {
      STORE.score++; 
      $(`${id}`).append(`Correct<br/>`);
      $(`${id}`).addClass("right-answer");
    }

    else {
      $(`${id}`).append(`Wrong <br/> The answer is: "${currentQues.answer}"<br/>`);
      $(`${id}`).addClass("wrong-answer");
    }

    STORE.currentQuestion++;
    $("#thinkful-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}


// Finds the options for the current question
function updateOptions()
{
  let question = STORE.questions[STORE.currentQuestion];

  for(let i=0; i<question.options.length; i++)
  {
    $('.thinkful-options').append(`
        <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
        <label for="option${i+1}"> ${question.options[i]}</label> <br/>
        <span id="thinkful-r${i+1}"></span>
    `);
  }
  
}

// Question and score counter function
function questionCounter() {
  const html = $(`<ul>
      <li id="thinkful-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <li id="thinkful-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
  $(".question-and-score").html(html);
}

// Displays the quiz results
function displayResults() {
  let resultHtml = $(
    `<div class="results">

      <form id="thinkful-restart-quiz">
        <fieldset>

          <div class="row">
            <div>
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="row">
            <div class="column-style" style="display: flex">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>

        </fieldset>
    </form>

    </div>`);

    STORE.currentQuestion = 0;
    STORE.score = 0;

  $("main").html(resultHtml);
}


$(quizApp);