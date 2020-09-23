//1

const p = document.createElement('p');
p.classList.add('text');
p.innerText = 'Это всего лишь текст';

document.body.append(p);
let div = document.createElement('div');
div.classList.add('alert');

div.style.background = 'red';
div.style.color = '#ffffff';
div.style.padding = '20px';
div.innerText = 'Это всего лишь текст';
document.body.append(div);


//2
const ol = document.createElement('ol');
document.body.append(ol);
const arr = ['Victor', 'Tatiana', 'Denis', 'Peter', 'Ann', 'Dmitry'];
arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
    let li = document.createElement('li');

    li.innerText = arr[i];
    ol.appendChild(li);
    if ((i + 1) % 2 === 0) {
        li.classList.add('even');
        li.style.background = 'green';
    } else {
        li.style.background = 'blue';
    }
}