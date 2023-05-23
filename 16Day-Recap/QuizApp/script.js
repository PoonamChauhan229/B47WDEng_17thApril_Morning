const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
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

// quiz container
let quiz=document.getElementById('quiz')

// question
let questionHeading=document.getElementById('questionHeading')

// AllOptionList
// querySelectorAll=>radio buttons
const optionList=document.querySelectorAll('.optionList')
console.log(optionList)

// Each Options=>labels
const aOption=document.getElementById('aOption')
const bOption=document.getElementById('bOption')
const cOption=document.getElementById('cOption')
const dOption=document.getElementById('dOption')

const submitBtn=document.getElementById('submit')

let currentQuizCount=0;
let score=0;

loadQuiz()
function loadQuiz(){
deSelectOption()
//quizData[0]
let currentQuizData=quizData[currentQuizCount]
console.log(currentQuizData)

questionHeading.innerText=currentQuizData.question
aOption.innerText=currentQuizData.a
bOption.innerText=currentQuizData.b
cOption.innerText=currentQuizData.c
dOption.innerText=currentQuizData.d

}

function deSelectOption(){
    optionList.forEach((element)=>element.checked=false)
}

function getSelected(){
    let selectedanswer;
    optionList.forEach((element)=>{
        if(element.checked){
            console.log(element.type)
            selectedanswer=element.id

        }
    })
    return selectedanswer
}

submitBtn.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    // currentQuizCount++;
    // loadQuiz()
    console.log(currentQuizCount)

   
        //score
        if(answer){
            console.log(true)
        if(answer===quizData[currentQuizCount].correct){
            console.log("true")
            score++;
            console.log("score"+score)
        }
        currentQuizCount++;
        if(currentQuizCount<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=(`
               <h2>You scored:${score}/${quizData.length}</h2> 
               <button class="submitBtn" onClick=location.reload()>Reload</button>
            `)
            document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
        }
     

    }
    

})


