const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questonEl = document.getElementById('question')
let answer = undefined;

const result = document.getElementById('result');
const resetBtn = document.getElementById('reset');

resetBtn.style.display = 'none';
result.style.display = 'none';

const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

const answersEl = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('btn');

let currenQuiz = 0;
let scour = 0;

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currenQuiz];

    questonEl.innerHTML = currentQuizData.question;
    
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

loadQuiz();

function getSelected() { 

     let answer = undefined;

     answersEl.forEach((answerEl) =>{
        if(answerEl.checked){ 
            answer = answerEl.id
        
        }})
        return answer;
}

function deselectAnswer() {

    answersEl.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}

function reset (){
    result.innerHTML = '';
    result.style.display = 'none';
    resetBtn.style.display = 'none';
    currenQuiz = 0;
    loadQuiz();
    console.log('shervan')
}

submitBtn.addEventListener('click',() =>{
    const answer = getSelected();  
    
    if(answer){
        if(answer === quizData[currenQuiz].correct){
            scour++
        } 
        currenQuiz++;
        if( currenQuiz < quizData.length){
            loadQuiz();
        }else{
            result.style.display = 'block';
            result.innerHTML = `You answered correctly at ${scour}/${quizData.length} question.`;
            resetBtn.style.display = 'block';
            resetBtn.addEventListener('click' ,()=>{
                reset()
            })
        }}
})