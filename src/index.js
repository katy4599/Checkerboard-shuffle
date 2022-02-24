function main() {
  const myBoxes = document.getElementsByClassName('mybox');
  const myButton = document.getElementById('shuffle');
  let i = 0;

  myButton.addEventListener('click', () => {
    for (const myBox of myBoxes) {
      if ((i % 2) === 0) {
        myBox.style.backgroundColor = 'red';
      }
      else {
        myBox.style.backgroundColor = 'black';
      }
      i += 1;
    }
  });
}
