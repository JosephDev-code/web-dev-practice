//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    pokemon.classList.add('pokemon')
    label.innerText = `#${i}`
    const newImg = document.createElement('img');

    newImg.src = `${URL}${i}.png`
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)

}