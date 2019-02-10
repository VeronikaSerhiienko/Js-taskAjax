let CardsRequest = () => { 
  let requestNew = new XMLHttpRequest();
  requestNew.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', true);
  requestNew.send();
  requestNew.onload = function() { 
    if (requestNew.status != 200) {
      console.log( requestNew.status + ': ' + requestNew.statusText );
    } else {
      showCards(JSON.parse(requestNew.responseText));
    }
  };
};

export {CardsRequest};


function showCards(obj) {
  var blockOfCards = document.createElement('div');
  blockOfCards.className = 'cards';
  document.body.appendChild(blockOfCards);

  for (var i = 0; i < obj.length; i++) {
    var cardsItem = document.createElement('div');
    cardsItem.className = 'cards__item';
    blockOfCards.appendChild(cardsItem);

    var cardsTitle = document.createElement('h2');
    cardsTitle.innerText = '\u263a ' + obj[i].name;
    cardsTitle.className = 'cards__title';
    cardsItem.appendChild(cardsTitle);

    var cardsSex = document.createElement('p');
    if (obj[i].sex === 'm') {
      cardsSex.innerText = 'Male';
    } else {
      cardsSex.innerText = 'Female';
    }
    cardsSex.className = 'cards__subtitle';
    cardsItem.appendChild(cardsSex);

    var cardsYears = document.createElement('p');
    cardsYears.innerText = '( \u2603 ' + obj[i].born + ' - ' + obj[i].died + ' )';
    cardsYears.className = 'cards__years';
    cardsItem.appendChild(cardsYears);

    if (obj[i].mother) {
      var motherName = document.createElement('p');
      motherName.innerHTML = '<span class = "cards__subtitle"> \u2640 Mother: </span>' + obj[i].mother;
      motherName.className = 'cards__description';
      cardsItem.appendChild(motherName);
    }
    if (obj[i].father) {
      var fatherName = document.createElement('p');
      fatherName.innerHTML = '<span class = "cards__subtitle"> \u2642 Father: </span>' + obj[i].father;
      fatherName.className = 'cards__description';
      cardsItem.appendChild(fatherName);
    }
  }

  var statisticsBlock = document.createElement('div');
  statisticsBlock.className = 'statistics';
  document.body.appendChild(statisticsBlock);

  var statisticsTitle  = document.createElement('h2');
  statisticsTitle.innerText = "\u270d statistics: \u261f";
  statisticsTitle.className = 'statistics__title';
  statisticsBlock.appendChild(statisticsTitle);

  var difference = document.createElement('p');
  if (calculateAverageDifferenceBetweenMothersAndChildren(obj) === 1) {
    difference.innerHTML = '<span class = "statistics__subtitle"> Average difference between mothers and children: </span>' + calculateAverageDifferenceBetweenMothersAndChildren(obj) + ' year old';
  } else {
    difference.innerHTML = '<span class = "statistics__subtitle"> Average difference between mothers and children: </span>' + calculateAverageDifferenceBetweenMothersAndChildren(obj) + ' years old';
  }

  difference.className = 'statistics__description';
  statisticsBlock.appendChild(difference);

  var middleMaleAge = document.createElement('p');
  middleMaleAge.innerHTML = '<span class = "statistics__subtitle"> Average male age: </span>' + calculateAverageAge(obj, 'm') + ' years old';
  middleMaleAge.className = 'statistics__description';
  statisticsBlock.appendChild(middleMaleAge);

  var middleFemaleAge = document.createElement('p');
  middleFemaleAge.innerHTML = '<span class = "statistics__subtitle"> Average female age: </span>' + calculateAverageAge(obj, 'f') + ' years old';
  middleFemaleAge.className = 'statistics__description';
  statisticsBlock.appendChild(middleFemaleAge);
}

function calculateAge(person) {
  return person.died - person.born;
}

function male(person) { 
  return person.sex === 'm'; 
}

function female(person) { 
  return person.sex === 'f';
}

function average(array) {
  function plus(a, b) { return a + b; }
  return Math.floor(array.reduce(plus) / array.length);
}

function calculateAverageDifferenceBetweenMothersAndChildren(obj) {
  var ageCounter = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].mother) {
      for (var j = 0; j < obj.length; j++) {
        if (obj[i].mother === obj[j].name) {
          ageCounter.push(obj[i].born - obj[j].born);
        }
      }
    }
  }
  return average(ageCounter);
}

function calculateAverageAge(obj, sex) {
  if (sex === 'm') {
    return average(obj.filter(male).map(calculateAge));
  } else {
    return average(obj.filter(female).map(calculateAge));
  }
}