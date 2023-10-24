//Initial Datas
var currentQuestion = 0;
var correctsQuestions = 0;
var correct = '';
document.querySelector('.bar').style.width = '0';


//Main
function main() {

  if (questions[currentQuestion]) {

    var q = questions[currentQuestion]
    var fullAlter = '';
    document.querySelector('.question').innerHTML = q.question;
    correct = q.answer;

    for (let i in q.alternatives) {

      var alter = '';
      fullAlter += alter.innerHTML = `<div data-al='${i}' class="alternative"><span>${parseInt(i)+1}</span>${q.alternatives[i]}</div>`;

    }

    document.querySelector('.alternatives').innerHTML = fullAlter;

  }else {

    document.querySelector('.quiz').style.display = 'none';
    document.querySelector('.results').style.display = 'flex';
    var pct = (correctsQuestions / questions.length) * 100;

    if(pct < 40) {

      document.querySelector('.congrats').innerHTML = 'Estude mais!!';
      document.querySelector('.pct').style.color = '#f00';

    }else if(pct >= 40 && pct < 70) {

      document.querySelector('.congrats').innerHTML = 'Tá na média...';
      document.querySelector('.pct').style.color = '#ff0';

    }else if(pct >= 70) {

      document.querySelector('.congrats').innerHTML = 'Você é o cara!!';
      document.querySelector('.pct').style.color = '#0a0';

    }

    document.querySelector('.pct').innerHTML = `Acertou ${pct}%`;

    document.querySelector('.info').innerHTML = `Você respondeu ${questions.length} e acertou ${correctsQuestions}.`;

    document.querySelector('.results button').addEventListener('click', () => {
      currentQuestion = 0;
      correctsQuestions= 0;
      main();
      document.querySelector('.results').style.display = 'none';
      document.querySelector('.quiz').style.display = 'flex';

      document.querySelector('.bar').style.width = '0';

    })

  }


  document.querySelectorAll('.alternative').forEach(al => {
    al.addEventListener('click', chooseAlternative);

  });

}

main();


//Listeners




//Functions
function chooseAlternative(e) {

  var calcWidthBar = ((currentQuestion + 1) / questions.length) * 100;
  document.querySelector('.bar').style.width = `${calcWidthBar}%`;

  var eTarget = e.target.getAttribute('data-al')
  currentQuestion++;

  if(eTarget == correct) {

    correctsQuestions++;

  }

  main();
}