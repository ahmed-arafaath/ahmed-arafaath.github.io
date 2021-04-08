//question for the quiz
var questions = [{
    question: "How old is the planet Earth?",
    answers: ["10 billion years old", "4.5 billion years old", "2 billion years ago", "4 billion years ago"],
    correctanswer: "4.5 billion years old"
    }, {
    question: "When was life first formed on the earth?",
    answers: ["4.1 billion years ago", "1 billion years ago", "3 billion years ago", "5000 biblical years ago"],
    correctanswer: "4.1 billion years ago"
    }, {
    question: "What is the area of Asia?",
    answers: ["22 000 000 sq km", "44 579 000 sq km", "12 598 000 sq km", "98 465 341 sq km"],
    correctanswer: "44 579 000 sq km"
    }, {
    question: "Which continent was the site of many of the first civilizations?",
    answers:["Asia", "North America", "Africa", "Europe"],
    correctanswer: "Asia"
    }, {
    question: "Which continent is the world’s second-largest and second-most-populous continent?",
    answers: ["Africa", "Asia", "South America", "North America"],
    correctanswer: "Africa"
    }, {
    question: "Where is the continent of North America located?",
    answers: ["Northern Hemisphere", "Eastern Hemisphere", "Western Hemisphere", "Southern Hemisphere"],
    correctanswer: "Northern Hemisphere"
    }, {
    question: "How much percentage of Antarctica is covered by ice?",
    answers: ["98 percent", "90 percent", "80 percent", "85 percent"],
    correctanswer: "98 percent"
    }, {
    question: "What is the scientific name of modern-day human beings?",
    answers: ["Homo Sapiens", "Homo Erectus", "Homo Neanderthalensis", "Homo Florensiensis"],
    correctanswer: "Homo Sapiens"
    }];
    //console.log('length is' + questions.length);




(function () {

  const  quiz = document.getElementById("quiz-question");
  const start = document.getElementById("start-btn");
  const next = document.getElementById("next-btn");
  const prev = document.getElementById("prev-btn");
  const finish = document.getElementById("finish-btn");

  //hiding all the buttons at the start
  $('#next-btn').hide();
  $('#prev-btn').hide();
  $('#finish-btn').hide();

  //to record the question number
  var questionnumber = 0;
  //to record the correct answers from users
  var selections = 0;
  //to record the number of nuttons clicked
  var count = 0;

  //function to respond on the click of start button
  start.addEventListener('click', function () {
    questionnumber = 0;
    selections = 0;
    $('#start-btn').hide();
    $('#score').remove();

    startquiz();
  });

  //function to respond on the click of next button
  next.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log('count' + count);

    // If no user selection, progress is stopped
    if (count == 1) {
        questionnumber++;
        startquiz();
        count = 0;
      }
      else if (count < 1) {
        alert('Please make a selection!');
      }
      else {
        alert('Please select only one choice');
        location.reload();
      }
  });

  //function to respond on the click of prev button
  prev.addEventListener('click', function (e) {
    e.preventDefault();

    questionnumber--;
    count--;
    startquiz();
  });

  //function to respond on the click of finish button
  finish.addEventListener('click', function (e) {
    e.preventDefault();

    questionnumber++;
    count = 0;
    startquiz();
  });


  // Creates and returns the div that contains the questions and the answer selections
  function createquestion(index) {
    //to create a div element that contains question
    var quesdiv = document.createElement("div");
    quesdiv.setAttribute("id", "question");

    var ques = document.createElement("h3");
    var text = document.createTextNode('Question ' + (index + 1) + ': ' + questions[index].question);

    ques.appendChild(text);
    quesdiv.appendChild(ques);

    var ans = questions[index].answers;
    //console.log('createanswer ' + ans.length);

    //to create a div element that contains answer
    var ansdiv = document.createElement("div");
    ansdiv.setAttribute("class", "answers");

    for (var i = 0; i < ans.length; i++) {

        //var ans = questions[index].answer[i];
        //console.log('ans ' +i);

        var btn = document.createElement('input');
        btn.type = "button";
        btn.value += ans[i];
        //console.log(btn);
        btn.setAttribute("class", "btnn");
        ansdiv.appendChild(btn);
    }

    quesdiv.appendChild(ansdiv);
    return quesdiv;
  }


  // main function for the quiz
  function startquiz() {

    //console.log(questionnumber);
      $('#question').remove();

    //console.log('start quiz ' + questions.length);

    //displays the questions
    if(questionnumber < (questions.length - 1)) {

      //console.log('questions ' + questions.length);
      var nextquestion = createquestion(questionnumber);
      //console.log(nextquestion);

      $('#quiz-question').append(nextquestion);

      // Controls display of buttons
      if (questionnumber === 0) {
        $('#next-btn').show();
        $('#prev-btn').hide();
      }

      else if( questionnumber === 1 && questionnumber < (questions.length - 1)) {
        //console.log('questions1 ' + questions.length);
        $('#prev-btn').show();
        $('#next-btn').show();
      }

      var crans = document.querySelectorAll('.btnn');
      var correctans = questions[questionnumber].correctanswer;

      //console.log(correctans);
      for (let i = 0; i < crans.length; i++){

        crans[i].addEventListener('click', function() {
            //console.log(crans[i].value);
            //console.log(questions[i].correctanswer);
            if (crans[i].value == correctans) {
            //console.log(crans[i].value);
            crans[i].style.backgroundColor = 'green';
            crans[i].style.color = 'white';
            selections++;
            console.log(selections);
            count++;
          }

          else {
            crans[i].style.backgroundColor = 'red';
            crans[i].style.color = 'white';
            count++;
          }
        });
      }
    }

    else if(questionnumber === (questions.length - 1)) {
      //console.log('questions2 ' + questions.length);
      nextquestion = createquestion(questionnumber);

      quiz.append(nextquestion);

      $('#finish-btn').show();
      $('#prev-btn').show();
      $('#next-btn').hide();

      crans = document.querySelectorAll('.btnn');
      correctans = questions[questionnumber].correctanswer;
      //console.log(correctans);

      for (let i = 0; i < crans.length; i++){

        crans[i].addEventListener('click', function() {
          //console.log(crans[i].value);
          //console.log(questions[i].correctanswer);
          if (crans[i].value == correctans) {
          //console.log(crans[i].value);
          crans[i].style.backgroundColor = 'green';
          crans[i].style.color = 'white';
          selections++;
          console.log(selections);
          count++;
          }

          else {
            crans[i].style.backgroundColor = 'red';
            rans[i].style.color = 'white';
            count++;
          }
        });
      }
    }

    //displays the score card
    else if(questionnumber === questions.length) {

      console.log('final score ' + selections);
      var scoreelem = displayscore(selections, questionnumber);
      quiz.append(scoreelem);
      $('#start-btn').show();
      $('#finish-btn').hide();
      $('#prev-btn').hide();
      $('#next-btn').hide();
    }

    //keeps the score count in check
    if (selections > questionnumber) {
      selections = questionnumber;
    }
  //console.log('start quiz ' + questions.length);
  }


  //function to display the score card
  function displayscore(count, quesnumber) {
    //creating a div element to display the score
    var scorediv = document.createElement("div");
    scorediv.setAttribute("id", "score");

    var score = document.createElement("h2");
    var scoretext = document.createTextNode('Well Done on completing the quiz!!');
    score.appendChild(scoretext);
    scorediv.appendChild(score);

    var score1 = document.createElement("h2");
    var scoretext1 = document.createTextNode('You have scored ' + count + ' out of ' + quesnumber);

    //appending the score in div element
    score1.appendChild(scoretext1);
    scorediv.appendChild(score1);

    return scorediv;
  }
})();
