const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const questions = [
    {
        question: 'What does CSS stand for ?',
        answers: [
            { text: 'cascading silly slides', correct: false},
            { text: 'cascading style sheets', correct: true},
            { text: 'chicken seasoned saturday', correct: false},
            { text: 'catfish swim slow', correct: false}

        ]
    },
    
    {
        question: 'What is JavaScript used for ?',
        answers: [
            { text: 'allows you to make webpages interactive', correct: true},
            { text: 'allows potatos to grow on wednesday', correct: false},
            { text: 'style a webpage', correct: false},
            { text: 'the right to party ?', correct: false}

        ]
    },

    {
        question: 'What does DOM stand for ?',
        answers: [
            { text: 'Document Occupancy Model', correct: false},
            { text: 'Dollar Off Mondays', correct: false},
            { text: 'Diversified Optical Manuvering', correct: false},
            { text: 'Document Object Model', correct: true}

        ]
    },
    
    {
        question: 'What is used most to add styling to a web page ?',
        answers: [
            { text: 'HTML', correct: false},
            { text: 'JavaScript', correct: false},
            { text: 'CSS', correct: true},
            { text: 'API', correct: false}

        ]
    },

    {
        question: 'What HTML attribute references an external JavaScript file?',
        answers: [
            { text: 'src', correct: true},
            { text: 'href', correct: false},
            { text: 'index', correct: false},
            { text: 'class', correct: false}

        ]
    }

]

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