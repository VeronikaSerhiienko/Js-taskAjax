let FirstRequest = () => { 
  let request = new XMLHttpRequest();
  request.open('GET', 'https://mate-academy.github.io/phone-catalogue-static/phones/phones.json', true);
  request.send();
  if (request.status != 200) {
    console.log( request.status + ': ' + request.statusText );
  } else {
    console.log( request.responseText ); 
  }
};

export {FirstRequest};