const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const questions = [
    {
        question: 'what is 1 + 1',
        answers: [
            { text: '2', correct: true},
            { text: '4', correct: false},
            { text: '1', correct: false},
            { text: '3', correct: false}

        ]
    },
    
    {
        question: 'what is 2 + 1',
        answers: [
            { text: '7', correct: true},
            { text: '44', correct: false},
            { text: '11', correct: false},
            { text: '3', correct: false}

        ]
    },

    {
        question: 'what is 2 + 1',
        answers: [
            { text: '77', correct: true},
            { text: '44', correct: false},
            { text: '111', correct: false},
            { text: '33', correct: false}

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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(q) {
    questionElement.innerText = 'question: ' + q.question
    const question1 = document.getElementById('q-1');
    question1.innerText = q.answers[0].text
    const question2 = document.getElementById('q-2');
    question2.innerText = q.answers[1].text
    const question3 = document.getElementById('q-3');
    question3.innerText = q.answers[2].text
    const question4 = document.getElementById('q-4');
    question4.innerText = q.answers[3].text
   }


function selectAnswer() {

}
