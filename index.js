//main.remove();
const removeMain = document.querySelector('body')
const firstChild = removeMain.querySelector('main#main')
removeMain.removeChild(firstChild);

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Gladwell is the champion';
document.body.appendChild(newHeader);