// collecting HTML elements for functions
const startButton = document.getElementById("startbtn")
var quizBody = document.getElementById("quiz")
var quizTimer = document.getElementById("timer")
var startQuizDiv = document.getElementById("start-page")
var questionsEl = document.getElementById("question")
var buttonA = document.getElementById("q-A")
var buttonB = document.getElementById("q-B")
var buttonC = document.getElementById("q-C")
var buttonD = document.getElementById("q-D")
var resultsEl = document.getElementById("result")
var finalScoreEl = document.getElementById("finalScore")
var gameoverDiv = document.getElementById("quizEnded")
var highscoreContainer = document.getElementById("scoreContainer")
var highscoreDiv = document.getElementById("scorePage")
var highscoreInputName = document.getElementById("initials")
var highscoreDisplayName = document.getElementById("highScore-initials")
var highscoreDisplayScore = document.getElementById("highScore-score")
var submitScoreBtn = document.getElementById("submitscore")
var endGameBtns = document.getElementById("quizEndedBtns")

// Questions Obj
var questions = [{
    
        question: 'What does CSS stand for ?',
        textA: 'cascading silly slides',
        textB: 'cascading style sheets',
        textC: 'chicken seasoned saturday',
        textD: 'catfish swim slow',
        correctAnswer: "b"
    },
    
    {
        question: 'What is JavaScript used for ?',
        textA: 'allows you to make webpages interactive',
        textB: 'allows potatos to grow on wednesday',
        textC: 'style a webpage',
        textD: 'the right to party ?',
        correctAnswer: "a"
    },

    {
        question: 'What does DOM stand for ?',
        textA: 'Document Occupancy Model',
        textB: 'Dollar Off Mondays',
        textC: 'Diversified Optical Manuvering',
        textD: 'Document Object Model',
        correctAnswer: "d"
    },
    
    {
        question: 'What is used most commonly to add styling to a web page ?',
        textA: 'HTML',
        textB: 'JavaScript',
        textC: 'CSS',
        textD: 'API',
        correctAnswer: "c"
    },

    {
        question: 'What HTML attribute references an external JavaScript file?',
        textA: 'src',
        textB: 'href',
        textC: 'index',
        textD: 'class',
        correctAnswer: "a"
    },

];

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    // shuffles questions
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    questionContainerElement.classList.remove('hide')
    //setNextQuestion()
    for(let i = 0; i < questions.length; i++) {
        setInterval(showQuestion, 5000, questions[i])
        //showQuestion(questions[i])
    }
    //showQuestion(questions[0])
    console.log(questions[0].question)


}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(q) {
    questionElement.innerText = q.question
    q.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
   }

   function resetState() {
       nextButton.classList.add('hide')
       while (answerButtonsElement.firstChild) {
           answerButtonsElement.removeChild(answerButtonsElement.firstChild)
       }
   }


function selectAnswer() {
    const selectedButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innertext = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}