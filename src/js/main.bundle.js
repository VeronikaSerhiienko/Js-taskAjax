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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Cards.js":
/*!*************************!*\
  !*** ./src/js/Cards.js ***!
  \*************************/
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



function showCards(obj) {
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
  function plus(a, b) {
    return a + b;
  }

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

/***/ }),

/***/ "./src/js/FirstRequest.js":
/*!********************************!*\
  !*** ./src/js/FirstRequest.js ***!
  \********************************/
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

/***/ "./src/js/UsersRequest.js":
/*!********************************!*\
  !*** ./src/js/UsersRequest.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/VisitorsRequest.js":
/*!***********************************!*\
  !*** ./src/js/VisitorsRequest.js ***!
  \***********************************/
/*! exports provided: VisitorsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsRequest", function() { return VisitorsRequest; });
var visitors;

var VisitorsRequest = function VisitorsRequest() {
  var requestForVisitors = new XMLHttpRequest();
  requestForVisitors.open('Get', 'https://tanuhaua.github.io/datas-file-json/visitors.json');
  requestForVisitors.send();

  requestForVisitors.onload = function () {
    if (requestForVisitors.status != 200) {
      console.log(requestForVisitors.status + ': ' + requestForVisitors.statusText);
    } else {
      visitors = JSON.parse(requestForVisitors.responseText, function (key, value) {
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
      });
      sortTable('id', 'asc');
      showVisitorsTable(visitors);
    }
  };
};

function sortTable(field, order) {
  if (field === 'createdAt') {
    visitors.sort(function (a, b) {
      var dateA = new Date(a[field].replace(/\./g, '/'));
      var dateB = new Date(b[field].replace(/\./g, '/'));

      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  } else {
    visitors.sort(function (a, b) {
      var elemA = a[field].toLowerCase();
      var elemB = b[field].toLowerCase();

      if (order === 'asc') {
        if (elemA < elemB) {
          return -1;
        }

        if (elemA > elemB) {
          return 1;
        }

        return 0;
      } else {
        if (elemA < elemB) {
          return 1;
        }

        if (elemA > elemB) {
          return -1;
        }

        return 0;
      }
    });
  }
}

function sortTableField(event) {
  if (event.target.getAttribute('data-order') === 'asc') {
    event.target.setAttribute('data-order', 'desc');
  } else {
    event.target.setAttribute('data-order', 'asc');
  }

  var orderSort = event.target.getAttribute('data-order');
  var field = event.target.getAttribute('data-field');
  sortTable(field, orderSort);
  showVisitorsTable(visitors);
}

document.querySelectorAll('.js-visitors-table-header').forEach(function (heading) {
  heading.addEventListener('click', sortTableField);
});

function showVisitorsTable(ArrayOfObjects) {
  var table = document.querySelector('.js-visitors-table');
  clearTableExceptFirstRow(table);
  ArrayOfObjects.forEach(function (object) {
    var row = document.createElement('tr');
    table.appendChild(row);
    Object.keys(object).forEach(function eachKey(key) {
      var cell = document.createElement('td');
      row.appendChild(cell);
      var cellText = document.createTextNode(object[key]);
      cell.appendChild(cellText);
    });
  });
}

function clearTableExceptFirstRow(tableElement) {
  for (var i = tableElement.rows.length - 1; i > 0; i--) {
    tableElement.deleteRow(i);
  }
}



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FirstRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirstRequest */ "./src/js/FirstRequest.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ "./src/js/Cards.js");
/* harmony import */ var _VisitorsRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisitorsRequest */ "./src/js/VisitorsRequest.js");
/* harmony import */ var _UsersRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersRequest */ "./src/js/UsersRequest.js");
/* harmony import */ var _UsersRequest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UsersRequest__WEBPACK_IMPORTED_MODULE_3__);




Object(_FirstRequest__WEBPACK_IMPORTED_MODULE_0__["FirstRequest"])();
Object(_Cards__WEBPACK_IMPORTED_MODULE_1__["CardsRequest"])();
Object(_VisitorsRequest__WEBPACK_IMPORTED_MODULE_2__["VisitorsRequest"])();
Object(_UsersRequest__WEBPACK_IMPORTED_MODULE_3__["UsersRequest"])();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map