const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.innerHTML = "<h1>h1#victory</h1><p>CRAIG is the champion</p></h1>";
newHeader.id = "victory";