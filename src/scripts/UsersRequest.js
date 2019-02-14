import {ConvertDateFormat} from "./ConvertDateFormat";

const UsersRequest = () => {
  let page = 1;
  showMoreUsers();
  const showMoreButton = document.querySelector('.js-button-show-more');
  showMoreButton.addEventListener('click', showMoreUsers);
  function showMoreUsers() {
    let requestLink = `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`; 
    const requestForUsers = new XMLHttpRequest();
    requestForUsers.open('GET', requestLink);
    requestForUsers.send();
    requestForUsers.onload = () => {
      if (requestForUsers.status != 200) {
        console.log(requestForUsers.status + ': ' + requestForUsers.statusText );
      } else {
        const users = JSON.parse(requestForUsers.responseText, ConvertDateFormat);
        page = users.page + 1; 
        showUsersTable(users);
        disableButton(users, showMoreButton);     
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

const disableButton = (dataArray, button) => {
  if (!dataArray.loadMore) {
    button.disabled = true;
    button.classList.add('table-block__button--disabled');
  }
};

export {UsersRequest};