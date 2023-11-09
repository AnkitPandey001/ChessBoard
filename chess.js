
const div = document.querySelector('#div');
// User story 1: Create a function to print the data.
function print(data) {
    const label = document.createElement('label');
    label.textContent = data;
    document.body.appendChild(label);
  }

  // User story 2: Create a function to create a break element.
  function newLine() {
    document.body.appendChild(document.createElement('br'));
  }

  // User story 3: Declare a variable for the board size.
  const board_size = 8;

  // User story 4: Create the chessboard using the functions and variable.
  for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
      if ((i + j) % 2 === 0) {
        print('* ');
      } else {
        print('# ');
      }
    }
    newLine();
  }