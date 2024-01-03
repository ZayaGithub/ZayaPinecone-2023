const todoCount = document.getElementById("todo-count");
const inpCount = document.getElementById("inprogress-count");
const stuckCount = document.getElementById("stuck-count");
const doneCount = document.getElementById("done-count");

const todoCards = document.getElementById("todo");
const inpCards = document.getElementById("inprogress");
const stuckCards = document.getElementById("stuck");
const doneCards = document.getElementById("doen");

const addBtn = document.getElementsByClassName("add-btn");

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  document.todoCount.innerHTML = -1;
  document.inpCount.innerHTML = -1;
  document.stuckCount.innerHTML = -1;
  document.doneCount.innerHTML = -1;
}

function dragEnd(event) {
  document.todoCount.innerHTML = +1;
  document.inpCount.innerHTML = +1;
  document.stuckCount.innerHTML = +1;
  document.doneCount.innerHTML = +1;
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(cardId));
}
const boxArray = [];

const render = () => {
  let todoElelmets = "";
  let inprogressElements = "";
  let stuckElelments = "";
  let doneElements = "";

  const filteredTodo = boxArray.filter((el, i) => el.status === todoCards);
  const filteredInprogress = boxArray.filter((el, i) => el.status === inpCards);
  const filteredStuck = boxArray.filter((el, i) => el.status === stuckCards);
  const filteredDone = boxArray.filter((el, i) => el.status === doneCards);

  filteredTodo.forEach((el, i) => {
    todoElelmets += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${
      el.title + i
    }">
        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
        <div class="remove circle">
          <img src="./x.png" alt="" />
        </div>
        <div class="edit circle">
          <img src="./editicon.png" alt="" />
        </div>
        </div>
   
  </div>`;
  });

  filteredInprogress.forEach((el, i) => {
    todoElelmets += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${
      el.title + i
    }">
        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
        <div class="remove circle">
          <img src="./x.png" alt="" />
        </div>
        <div class="edit circle">
          <img src="./editicon.png" alt="" />
        </div>
        </div>
   
  </div>`;
  });

  filteredStuck.forEach((el, i) => {
    todoElelmets += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${
      el.title + i
    }">
        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
        <div class="remove circle">
          <img src="./x.png" alt="" />
        </div>
        <div class="edit circle">
          <img src="./editicon.png" alt="" />
        </div>
        </div>
   
  </div>`;
  });

  filteredDone.forEach((el, i) => {
    todoElelmets += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${
      el.title + i
    }">
        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
        <div class="remove circle">
          <img src="./x.png" alt="" />
        </div>
        <div class="edit circle">
          <img src="./editicon.png" alt="" />
        </div>
        </div>
   
  </div>`;
  });
  todoCards.innerHTML = todoElelmets;
  inpCards.innerHTML = inprogressElements;
  stuckCards.innerHTML = stuckElelments;
  doneCards.innerHTML = doneElements;
};
render();

const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  const inputObj = {
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
};

const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};

const hide = () => {
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
}

const modalContainer = document.getElementsByClassName("modolContainer")[0];
window.onclick = function(event) {
  console.log(event.target);
    if (event.target == modalContainer) {
      console.log(event.target, "====", modalContainer);
      modalContainer.classList.remove("show");
    } 
};