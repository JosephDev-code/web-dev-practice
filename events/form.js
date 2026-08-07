const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents the browser from taking it's default action
    const catName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catName;
    list.append(newLI);
});
const form2 = document.querySelector('#form');
const lis = document.querySelector('#lis')
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const item = product.value;
    const amt = qty.value
    const newList = document.createElement('LI')
    newList.innerText = `${amt} ${item}`;
    lis.append(newList)
    product.value = ""
    qty.value = ""
})
//input event
const inp = document.querySelector('#username');
const h4 = document.querySelector('h4');
inp.addEventListener('input', function () {
    if (inp.value === '') {
        h4.innerText = 'Enter Your Username'
    }
    else {
        h4.innerText = `Welcome, ${inp.value}`
    }
})