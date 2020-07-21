window.addEventListener('load', start);

nameList = ['Paulo', 'Liana', 'Ana', 'Pedro', 'Zoe', 'Dinah'];

function start() {
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);

  var textName = document.querySelector('#textName');
  var buttons = document.querySelectorAll('.deleteButton');
  textNameHandle(textName);
  buttonHandle(buttons);
  render();
}

function preventSubmit(event) {
  event.preventDefault();
}

function textNameHandle(textName) {
  function typedName(event) {
    if (event.key === 'Enter') {
      var nameTyped = event.target.value;
      nameList.push(nameTyped);
      render();
    }
  }
  textName.addEventListener('keyup', typedName);
}

function render() {
  var names = document.querySelector('#names');
  names.textContent = '';
  var ul = document.createElement('ul');
  names.appendChild(ul);
  for (i = 0; i < nameList.length; i++) {
    var currentName = nameList[i];
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = currentName;
    var button = document.createElement('button');
    button.textContent = 'x';
    button.classList.add('deleteButton', 'clickable');
    li.classList.add('clickable');
    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);

    var textName = document.querySelector('#textName');
    textName.value = '';
    textName.focus();
  }
}

function buttonHandle(buttons) {
  function deleteHandle(event) {
    console.log(event);
  }
  console.log(buttons);
}
