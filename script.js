let N = 0;
let correct = 0;
const plan1 = document.getElementById('Intro');
const plan3 = document.getElementById('Intro2');
const plan2 = document.getElementById('box');
const vectorQuestion = document.querySelectorAll('.but');


let NQuestion = document.getElementById('NumQuestion');
let Question = document.getElementById('Question');
let a = document.getElementById('A');
let b = document.getElementById('B');
let c = document.getElementById('C');
let d = document.getElementById('D');

plan2.style.display = 'none';
plan3.style.display = 'none';

const Q1 = {
    numberQuest: 1,
    pergunta     : "Quanto é 2 + 2 ?",
    A : "1",
    B : "2",
    C : "3",
    D : "4",
    correta      : "D"
}
const Q2 = {
    numberQuest: 2,
    pergunta     : "Quanto é a capital do ES ?",
    A : "Vitória",
    B : "Vila Velha",
    C : "Guarapari",
    D : "Cariacica",
    correta      : "A"
}
const Q3 = {
    numberQuest: 3,
    pergunta     : "Qual a cor da caneta azul ?",
    A : "Vermelho",
    B : "Preto",
    C : "Azul",
    D : "Roxo",
    correta      : "C"
}

const questions = [Q1,Q2,Q3];
let variavel = 0;

function Click(){
    plan2.style.display = '';
    plan1.style.display = 'none';   
}

//Start question...
Flow(N);

function Flow(N){
    changeQuestion(N,questions);   
}

function changeQuestion(Nq,vector){
    NQuestion.textContent = vector[Nq].numberQuest;
    Question.textContent = vector[Nq].pergunta;
    a.textContent = vector[Nq].A;
    b.textContent = vector[Nq].B;
    c.textContent = vector[Nq].C;
    d.textContent = vector[Nq].D;
    
    for (let i=0;i<vectorQuestion.length;i++){
        vectorQuestion[i].addEventListener('click',alternative);
    }
    
}

function alternative(x){
    console.log(x.target.id);
    console.log(questions[Number(NQuestion.textContent)-1].correta);

    if (questions[Number(NQuestion.textContent)-1].correta === x.target.id){
        console.log('Vitoria')
        N +=1;
        correct += 1;
        if (N <=2){Flow(N);}else {End(correct)}
        
    }
    else {
        N +=1
        if (N <=2){Flow(N);}else {End(correct)}
    }
}

function End(correct){
    let resp = document.getElementById('Answer');
    plan1.style.display = 'none';
    plan2.style.display = 'none';
    plan3.style.display = '';

    resp.innerText = correct;
    
}



