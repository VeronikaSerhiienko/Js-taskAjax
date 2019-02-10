let visitors;
let VisitorsRequest = () => {
  let requestForVisitors = new XMLHttpRequest();
  requestForVisitors.open('Get', 'https://tanuhaua.github.io/datas-file-json/visitors.json');
  requestForVisitors.send();
  requestForVisitors.onload = function() {
    if (requestForVisitors.status != 200) {
      console.log(requestForVisitors.status + ': ' + requestForVisitors.statusText );
    } else {
      visitors = JSON.parse(requestForVisitors.responseText, function(key,value) {
        if (key === 'createdAt') 
          {
            const d = new Date(value);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();

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
    visitors.sort(function(a, b) {
      const dateA = new Date(a[field].replace(/\./g,'/'));
      const dateB = new Date(b[field].replace(/\./g,'/'));
      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;  
      }
    }); 
  } else {
    visitors.sort(function(a, b) {
      const elemA = a[field].toLowerCase();
      const elemB = b[field].toLowerCase();
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
  const orderSort = event.target.getAttribute('data-order');
  const field = event.target.getAttribute('data-field');
  sortTable(field, orderSort);
  showVisitorsTable(visitors);
}

document.querySelectorAll('.js-visitors-table-header').forEach(function(heading) {
  heading.addEventListener('click', sortTableField);
});

function showVisitorsTable(ArrayOfObjects) {
  let table = document.querySelector('.js-visitors-table');
  clearTableExceptFirstRow(table);
  ArrayOfObjects.forEach(function(object) {
    const row = document.createElement('tr');
    table.appendChild(row);
    Object.keys(object).forEach(function eachKey(key) {
      const cell = document.createElement('td');
      row.appendChild(cell);
      const cellText = document.createTextNode(object[key]);
      cell.appendChild(cellText);
    });
  });
}

function clearTableExceptFirstRow(tableElement) {
  for(var i = tableElement.rows.length - 1; i > 0; i--) {
    tableElement.deleteRow(i);
  }
}

export {VisitorsRequest};