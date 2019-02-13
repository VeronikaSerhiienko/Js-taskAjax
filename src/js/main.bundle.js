/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Cards.js":
/*!******************************!*\
  !*** ./src/scripts/Cards.js ***!
  \******************************/
/*! exports provided: CardsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsRequest", function() { return CardsRequest; });
var CardsRequest = function CardsRequest() {
  var requestNew = new XMLHttpRequest();
  requestNew.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', true);
  requestNew.send();

  requestNew.onload = function () {
    if (requestNew.status != 200) {
      console.log(requestNew.status + ': ' + requestNew.statusText);
    } else {
      showCards(JSON.parse(requestNew.responseText));
    }
  };
};



var showCards = function showCards(obj) {
  var blockOfCards = document.createElement('div');
  blockOfCards.className = 'cards';
  document.body.appendChild(blockOfCards);

  for (var i = 0; i < obj.length; i++) {
    var cardsItem = document.createElement('div');
    cardsItem.className = 'cards__item';
    blockOfCards.appendChild(cardsItem);
    var cardsTitle = document.createElement('h2');
    cardsTitle.innerText = "\u263A " + obj[i].name;
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
    cardsYears.innerText = "( \u2603 " + obj[i].born + ' - ' + obj[i].died + ' )';
    cardsYears.className = 'cards__years';
    cardsItem.appendChild(cardsYears);

    if (obj[i].mother) {
      var motherName = document.createElement('p');
      motherName.innerHTML = "<span class = \"cards__subtitle\"> \u2640 Mother: </span>" + obj[i].mother;
      motherName.className = 'cards__description';
      cardsItem.appendChild(motherName);
    }

    if (obj[i].father) {
      var fatherName = document.createElement('p');
      fatherName.innerHTML = "<span class = \"cards__subtitle\"> \u2642 Father: </span>" + obj[i].father;
      fatherName.className = 'cards__description';
      cardsItem.appendChild(fatherName);
    }
  }

  var statisticsBlock = document.createElement('div');
  statisticsBlock.className = 'statistics';
  document.body.appendChild(statisticsBlock);
  var statisticsTitle = document.createElement('h2');
  statisticsTitle.innerText = "\u270D statistics: \u261F";
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
};

var calculateAge = function calculateAge(person) {
  return person.died - person.born;
};

var male = function male(person) {
  return person.sex === 'm';
};

var female = function female(person) {
  return person.sex === 'f';
};

var average = function average(array) {
  var plus = function plus(a, b) {
    return a + b;
  };

  return Math.floor(array.reduce(plus) / array.length);
};

var calculateAverageDifferenceBetweenMothersAndChildren = function calculateAverageDifferenceBetweenMothersAndChildren(obj) {
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
};

var calculateAverageAge = function calculateAverageAge(obj, sex) {
  if (sex === 'm') {
    return average(obj.filter(male).map(calculateAge));
  } else {
    return average(obj.filter(female).map(calculateAge));
  }
};

/***/ }),

/***/ "./src/scripts/ConvertDateFormat.js":
/*!******************************************!*\
  !*** ./src/scripts/ConvertDateFormat.js ***!
  \******************************************/
/*! exports provided: ConvertDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertDateFormat", function() { return ConvertDateFormat; });
var ConvertDateFormat = function ConvertDateFormat(key, value) {
  if (key === 'createdAt') {
    var d = new Date(value);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('.');
  }

  return value;
};



/***/ }),

/***/ "./src/scripts/FirstRequest.js":
/*!*************************************!*\
  !*** ./src/scripts/FirstRequest.js ***!
  \*************************************/
/*! exports provided: FirstRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstRequest", function() { return FirstRequest; });
var FirstRequest = function FirstRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://mate-academy.github.io/phone-catalogue-static/phones/phones.json', true);
  request.send();

  request.onload = function () {
    if (request.status != 200) {
      console.log(request.status + ': ' + request.statusText);
    } else {
      console.log(request.responseText);
    }
  };
};



/***/ }),

/***/ "./src/scripts/UsersRequest.js":
/*!*************************************!*\
  !*** ./src/scripts/UsersRequest.js ***!
  \*************************************/
/*! exports provided: UsersRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRequest", function() { return UsersRequest; });
/* harmony import */ var _ConvertDateFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvertDateFormat */ "./src/scripts/ConvertDateFormat.js");


var UsersRequest = function UsersRequest() {
  var page = 1;
  showMoreUsers();
  var showMoreButton = document.querySelector('.js-button-show-more');
  showMoreButton.addEventListener('click', showMoreUsers);

  function showMoreUsers() {
    var requestLink = "https://tanuhaua.github.io/datas-file-json/dynamic-loading/".concat(page, "/users.json");
    var requestForUsers = new XMLHttpRequest();
    requestForUsers.open('GET', requestLink);
    requestForUsers.send();

    requestForUsers.onload = function () {
      if (requestForUsers.status != 200) {
        console.log(requestForUsers.status + ': ' + requestForUsers.statusText);
      } else {
        var users = JSON.parse(requestForUsers.responseText, _ConvertDateFormat__WEBPACK_IMPORTED_MODULE_0__["ConvertDateFormat"]);
        page = users.page + 1;
        showUsersTable(users);
        disableButton(users, showMoreButton);
      }
    };
  }
};

var showUsersTable = function showUsersTable(ArrayOfObjects) {
  var table = document.querySelector('.js-users-table');
  ArrayOfObjects.data.forEach(function (object) {
    var row = document.createElement('tr');
    table.appendChild(row);
    Object.keys(object).forEach(function eachKey(key) {
      var cell = document.createElement('td');
      cell.classList.add('table-block__item');
      row.appendChild(cell);
      var cellText = document.createTextNode(object[key]);
      cell.appendChild(cellText);
    });
  });
};

var disableButton = function disableButton(dataArray, button) {
  if (!dataArray.loadMore) {
    button.disabled = true;
    button.classList.add('table-block__button--disabled');
  }
};



/***/ }),

/***/ "./src/scripts/VisitorsRequest.js":
/*!****************************************!*\
  !*** ./src/scripts/VisitorsRequest.js ***!
  \****************************************/
/*! exports provided: VisitorsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsRequest", function() { return VisitorsRequest; });
/* harmony import */ var _ConvertDateFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvertDateFormat */ "./src/scripts/ConvertDateFormat.js");


var VisitorsRequest = function VisitorsRequest() {
  var requestForVisitors = new XMLHttpRequest();
  requestForVisitors.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json');
  requestForVisitors.send();

  requestForVisitors.onload = function () {
    if (requestForVisitors.status != 200) {
      console.log(requestForVisitors.status + ': ' + requestForVisitors.statusText);
    } else {
      var _visitors = JSON.parse(requestForVisitors.responseText, _ConvertDateFormat__WEBPACK_IMPORTED_MODULE_0__["ConvertDateFormat"]);

      sortTable(_visitors, 'id', 'asc');
      showVisitorsTable(_visitors);
    }
  };
};

var sortTable = function sortTable(dataArray, field, order) {
  console.dir(dataArray);
  console.dir(field);
  console.dir(order);

  if (field === 'createdAt') {
    dataArray.sort(function (a, b) {
      var dateA = new Date(a[field].replace(/\./g, '/'));
      var dateB = new Date(b[field].replace(/\./g, '/'));

      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  } else {
    dataArray.sort(function (a, b) {
      var elemA = a[field].toLowerCase();
      var elemB = b[field].toLowerCase();
      var sortingTypeIndex = -1;

      if (order === 'asc') {
        sortingTypeIndex = 1;
      }

      if (elemA < elemB) {
        return -1 * sortingTypeIndex;
      }

      if (elemA > elemB) {
        return 1 * sortingTypeIndex;
      }

      return 0;
    });
  }
};

var sortTableField = function sortTableField(event) {
  if (event.target.getAttribute('data-order') === 'asc') {
    event.target.setAttribute('data-order', 'desc');
    removeFlag();
    addFlagDesc(event.target);
  } else {
    event.target.setAttribute('data-order', 'asc');
    removeFlag();
    addFlagAsc(event.target);
  }

  var orderSort = event.target.getAttribute('data-order');
  var field = event.target.getAttribute('data-field');
  sortTable(visitors, field, orderSort);
  showVisitorsTable(visitors);
};

var tableHeaders = document.querySelectorAll('.js-visitors-table-header');
tableHeaders.forEach(function (heading) {
  heading.addEventListener('click', sortTableField);
});

var showVisitorsTable = function showVisitorsTable(ArrayOfObjects) {
  var table = document.querySelector('.js-visitors-table');
  clearTableExceptFirstRow(table);
  ArrayOfObjects.forEach(function (object) {
    var row = document.createElement('tr');
    table.appendChild(row);
    Object.keys(object).forEach(function eachKey(key) {
      var cell = document.createElement('td');
      cell.classList.add('table-block__item');
      row.appendChild(cell);
      var cellText = document.createTextNode(object[key]);
      cell.appendChild(cellText);
    });
  });
};

var clearTableExceptFirstRow = function clearTableExceptFirstRow(tableElement) {
  for (var i = tableElement.rows.length - 1; i > 0; i--) {
    tableElement.deleteRow(i);
  }
};

var addFlagDesc = function addFlagDesc(element) {
  element.classList.add('table-block__flag');
  element.classList.add('table-block__flag--desc');
};

var addFlagAsc = function addFlagAsc(element) {
  element.classList.add('table-block__flag');
};

var removeFlag = function removeFlag() {
  tableHeaders.forEach(function (heading) {
    heading.classList.remove('table-block__flag');
    heading.classList.remove('table-block__flag--desc');
  });
};



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FirstRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirstRequest */ "./src/scripts/FirstRequest.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ "./src/scripts/Cards.js");
/* harmony import */ var _VisitorsRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisitorsRequest */ "./src/scripts/VisitorsRequest.js");
/* harmony import */ var _UsersRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersRequest */ "./src/scripts/UsersRequest.js");




Object(_FirstRequest__WEBPACK_IMPORTED_MODULE_0__["FirstRequest"])();
Object(_Cards__WEBPACK_IMPORTED_MODULE_1__["CardsRequest"])();
Object(_VisitorsRequest__WEBPACK_IMPORTED_MODULE_2__["VisitorsRequest"])();
Object(_UsersRequest__WEBPACK_IMPORTED_MODULE_3__["UsersRequest"])();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map