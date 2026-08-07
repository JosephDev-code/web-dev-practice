
const req = new XMLHttpRequest('https://swapi.info/api/people');
req.onload = function () {
    console.log('IT WORKED!!!');
    const data = JSON.parse(this.responseText);
    console.log(data);
}
req.onerror = function () {
    console.log('ERROR!!!!');
    consol.log(this);
};
req.open('GET', 'https://swapi.info/api/people')
req.send();