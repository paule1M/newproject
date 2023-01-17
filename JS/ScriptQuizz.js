const fquiz= document.getElementById('fquiz');
const resultsContainer = document.getElementById('results');
const answers = {
    Q1: '',
    Q2: '3',
    Q3: 'trois',
    Q4: 'chien',
    Q5: 'rep2',
    Q6: '25',
    Q7: '1',
    Q8: 'simple',
    Q9: 'rep2',
    Q10: 'joues',
    Q11: 'finit',
    Q12: 'rep2',
    Q13: 'rep1',
    Q14: 'rep1',
};

fquiz.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    let output = '';

    for (const question in answers) {
        const answer = answers[question];
        const selected = fquiz.elements[question];
        let userAnswer;

        selected.forEach(radio => {
            if (radio.checked) {
                userAnswer = radio.value;
            }
        });
        if (userAnswer === answer) {
            score++;
            output += <p> ${question} correct</p>;
        } else {
            output += <p> ${question} incorrect. The correct answer is ${answer}</p>;
        }

        selected.forEach(checkbox => {
            if (checkbox.checked) {
                userAnswer = checkbox.value;
            }
        });

        if (userAnswer === answer) {
            score++;
            output += <p> ${question} correct</p>;
        } else {
            output += <p> ${question} incorrect. The correct answer is ${answer}</p>;
        }

    }
    resultsContainer.innerHTML = <p>You scored ${score} out of ${Object.keys(answers).length}</p>;
    resultsContainer.innerHTML += output;
});
// function Verifier(){
//     var Q1=document.fquiz.Q1.value;
//     var Q2=document.fquiz.Q2.value;
//     var Q3=document.fquiz.Q3.value;
//     var Q4 = document.getElementsByName("Q4");
//     var Q5 = document.getElementsByName("Q5");
//     var Q6=document.fquiz.Q6.value;
//     var Q7=document.fquiz.Q7.value;
//     var Q8= document.form.elements["Q8"];
//     var Q9= document.form.elements["Q9"];
//     var Q10=document.fquiz.Q10.value;
//     var Q11=document.fquiz.Q11.value;
//     var Q12 = document.getElementsByName("Q12");
//     var Q13= document.getElementsByName("Q13");
//     var Q14= document.form.elements["Q14"];
//     var compteur=0;

//     if(Q1=="") {
//         alert('Veuillez ajouter un Pseudo ');
//         document.fquiz.Q1.focus(); 

//     } 

//     var inputs=document.getElementsByTagName("input");
//     for (var i=0; i<inputs.length; i++){
//         if(!inputs[i].value){
//             alert('Vous n\'avez ni jouez ni renseigner votre pseudo');
//         }else{
//             alert('Envoyé!')
//         }
//     }

// }