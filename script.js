const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((key) => {
  key.addEventListener('click', (e) => {
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
