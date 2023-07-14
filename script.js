
//-------counter--------------------///

const decButton = document.querySelector('.dec');
const incButton = document.querySelector('.inc');
const numDisplay = document.querySelector('#num');

let counter = 0;

const updateCounterDisplay = () => {
  numDisplay.textContent = counter;
};

decButton.addEventListener('click', () => { if(counter >0){
  counter--;
}
  else{
    counter;
  }
  updateCounterDisplay();
});

incButton.addEventListener('click', () => {
  counter++;
  updateCounterDisplay();
});



