let users;
const UsersRequest = () => {
  let page = 1;
  showMoreUsers();
  const showMoreButton = document.querySelector('.js-button-show-more');
  showMoreButton.addEventListener('click', showMoreUsers);
  function showMoreUsers() {
    let requestLink = `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`; 
    const requestForUsers = new XMLHttpRequest();
    requestForUsers.open('Get', requestLink);
    requestForUsers.send();
    requestForUsers.onload = () => {
      if (requestForUsers.status != 200) {
        console.log(requestForUsers.status + ': ' + requestForUsers.statusText );
      } else {
        users = JSON.parse(requestForUsers.responseText, (key,value) => {
          if (key === 'createdAt') {
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
        page = users.page + 1; 
        showUsersTable(users);
        disableButton(showMoreButton);     
      }
    };
  }
};

const showUsersTable = (ArrayOfObjects) => {
  const table = document.querySelector('.js-users-table');
  ArrayOfObjects.data.forEach(function(object) {
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

const disableButton = (button) => {
  if (!users.loadMore) {
    button.disabled = true;
    button.classList.add('table-block__button--disabled');
  }
};

export {UsersRequest};