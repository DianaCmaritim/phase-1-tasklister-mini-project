priorities = ['emergency','high','medium','low'];

document.addEventListener("DOMContentLoaded", () => {
  const subForm = document.getElementById("create-task-form");

  /**/priorities.map((priority) => {
    const marker = document.createElement('div');
    marker.id = priority;
    document.getElementById('tasks').append(marker);
  });

  subForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = document.getElementById("new-task-description");
    const text_date = document.getElementById("task-date");
    const text_time = document.getElementById("time-created");


    if (text.value === "") {
      return;
    };

    const outerTask = document.createElement('li');
    const task = document.createElement('p');

    if (text_date.value === "") {
      task.textContent = text.value;
    } else {
      task.textContent = text.value + " Due: " + text_date.value;
    };


    task.addEventListener('click', clickToEdit(task));
    task.addEventListener('mouseleave', () => {
      task.contentEditable = false;
      if (task.textContent === "") {
        outerTask.remove();
      }
    });
    outerTask.append(task, getDropdown(outerTask),getDeleteButton(outerTask));
    document.getElementById(priorities[0]).append(outerTask);

    document.getElementById("new-task-description").value = "";
  });

  const flip = document.createElement('button');
  flip.setAttribute();
  flip.addEventListener('click', () => {
    document.getElementById("tasks").reversed = !document.getElementById("tasks").reversed;
  });
  document.body.append(flip);

});

function getDeleteButton(task) {
  let button = document.createElement('button');
  button.addEventListener('click', () => {
    task.remove();
  })
  button.textContent = "DELETE";
  return button;
}

function getDropdown(task) {
  const menu = document.createElement('form');
  const selection = document.createElement('select');
  selection.addEventListener('input', (e) => {
    document.getElementById(e.target.value).append(task);
  });
  priorities.map((priority) => {
    const opt = document.createElement('option');
    opt.setAttribute('value', priority);
    opt.innerText = priority;
    selection.append(opt);
  });
  menu.append(selection);
  return menu;
}

function clickToEdit(task) {
  return function() {
    console.log('here');
    task.contentEditable = true;
  };
}