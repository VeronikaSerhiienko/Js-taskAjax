import {ConvertDateFormat} from "./ConvertDateFormat";

const VisitorsRequest = () => {
  const requestForVisitors = new XMLHttpRequest();
  requestForVisitors.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json');
  requestForVisitors.send();
  requestForVisitors.onload = () => {
    if (requestForVisitors.status != 200) {
      console.log(requestForVisitors.status + ': ' + requestForVisitors.statusText );
    } else {
      let visitors = JSON.parse(requestForVisitors.responseText, ConvertDateFormat);
      sortTable(visitors, 'id', 'asc'); 
      showVisitorsTable(visitors);     
    }
  };
};

const sortTable = (dataArray, field, order) => {
  console.dir(dataArray);
  console.dir(field);
  console.dir(order);
  if (field === 'createdAt') {
    dataArray.sort(function(a, b) {
      const dateA = new Date(a[field].replace(/\./g,'/'));
      const dateB = new Date(b[field].replace(/\./g,'/'));
      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;  
      }
    }); 
  } else {
    dataArray.sort(function(a, b) {
      const elemA = a[field].toLowerCase();
      const elemB = b[field].toLowerCase();
      let sortingTypeIndex = -1;
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

const sortTableField = (event)  => {
  if (event.target.getAttribute('data-order') === 'asc') {
    event.target.setAttribute('data-order', 'desc');
    removeFlag();
    addFlagDesc(event.target);
  } else {
    event.target.setAttribute('data-order', 'asc');
    removeFlag();
    addFlagAsc(event.target);
  }
  const orderSort = event.target.getAttribute('data-order');
  const field = event.target.getAttribute('data-field');
  sortTable(visitors, field, orderSort);
  showVisitorsTable(visitors);
};

const tableHeaders = document.querySelectorAll('.js-visitors-table-header');
tableHeaders.forEach((heading) => {
  heading.addEventListener('click', sortTableField);
});

const showVisitorsTable = (ArrayOfObjects) => {
  const table = document.querySelector('.js-visitors-table');
  clearTableExceptFirstRow(table);
  ArrayOfObjects.forEach((object) => {
    const row = document.createElement('tr');
    table.appendChild(row);
    Object.keys(object).forEach(function eachKey(key) {
      const cell = document.createElement('td');
      cell.classList.add('table-block__item');
      row.appendChild(cell);
      const cellText = document.createTextNode(object[key]);
      cell.appendChild(cellText);
    });
  });
};

const clearTableExceptFirstRow = (tableElement) => {
  for(var i = tableElement.rows.length - 1; i > 0; i--) {
    tableElement.deleteRow(i);
  }
};

const addFlagDesc = (element) => {
  element.classList.add('table-block__flag');
  element.classList.add('table-block__flag--desc');
};

const addFlagAsc = (element) => {
  element.classList.add('table-block__flag');
};

const removeFlag = () => {
  tableHeaders.forEach(function(heading) {
    heading.classList.remove('table-block__flag');
    heading.classList.remove('table-block__flag--desc');
  });
};

export {VisitorsRequest};