const todoCount = document.getElementById("todo-count");
const inpCount = document.getElementById("inprogress-count");
const stuckCount = document.getElementById("stuck-count");
const doneCount = document.getElementById("done-count");

const todoCards = document.getElementById("todo");
const inpCards = document.getElementById("inprogress");
const stuckCards = document.getElementById("stuck");
const doneCards = document.getElementById("done");

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  document.todoCount.innerHTML = todoCards.length;
  document.inpCount.innerHTML = inpCards.length;
  document.stuckCount.innerHTML = stuckCards.length;
  document.doneCount.innerHTML = doneCards.length;
  ``;
}

function dragEnd(event) {
  document.todoCount.innerHTML = +1;
  document.inpCount.innerHTML = +1;
  document.stuckCount.innerHTML = +1;
  document.doneCount.innerHTML = +1;
}

const modalContainer =
        document.getElementsByClassName("modalContainer")[0];
      window.onclick = function (event) {
        if (event.target == modalContainer) {
          //
          console.log(event.target, "=====", modalContainer);
          modalContainer.classList.remove("show");
        }
      };

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const cardsId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(cardsId));
}

// let data = [
//   {
//     id: "hello",
//     status: "todo",
//     title: "Todo",
//     priority: "High",
//     description: "This is a todo card",
//   },
//   {
//     id: "hello",
//     status: "inprogress",
//     title: "Todo",
//     priority: "High",
//     description: "This is a todo card",
//   },
// ];
const boxArray = [];

const render = () => {
  let todoElements = "";
  let inprogressElements = "";
  let stuckElements = "";
  let doneElements = "";
  const filteredTodo = boxArray.filter((el, i) => el.status === "todo");
  const filteredInprogress = boxArray.filter(
    (el, i) => el.status === "inprogress"
  );
  const filteredStuck = boxArray.filter((el, i) => el.status === "stuck");
  const filteredDone = boxArray.filter((el, i) => el.status === "done");

  filteredTodo.forEach((el, i) => {
    console.log(el);
    todoElements = `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${el.id}">
        <div class="done circle">
          <i class="fa-solid fa-check"></i>
        </div>

        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
          <div class="remove circle">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="edit circle">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
   
  </div>`;
  });

  filteredInprogress.forEach((el, i) => {
    inprogressElements += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${el.id}">
        <div class="done circle">
          <i class="fa-solid fa-check"></i>
        </div>

        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
          <div class="remove circle">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="edit circle">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
   
  </div>`;
  });

  filteredStuck.forEach((el, i) => {
    stuckElements += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${el.id}">
        <div class="done circle">
          <i class="fa-solid fa-check"></i>
        </div>

        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
          <div class="remove circle">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="edit circle">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
   
  </div>`;
  });

  filteredDone.forEach((el, i) => {
    doneElements += `<div class="cards" ondragstart="drag(event)" ondragover="allowDrop(event)" draggable="true" ondrop="drop(event)" id="${el.id}">
        <div class="done circle">
          <i class="fa-solid fa-check"></i>
        </div>

        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>

        <div class="action-buttons">
          <div class="remove circle">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="edit circle">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
   
  </div>`;
  });
  todoCards.innerHTML = todoElements;
  inpCards.innerHTML = inprogressElements;
  stuckCards.innerHTML = stuckElements;
  doneCards.innerHTML = doneElements;
};
render();
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-select").value;
  const priorityInputValue = document.getElementById("priority-select").value;
  const inputObj = {
    title: titleInputValue,
    description: descriptionInputValue,
    status: statusInputValue,
    priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  console.log(boxArray);
  render();
};

const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};

const hide = () => {
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
};

// const modalContainer = document.getElementsByClassName("modolContainer")[0];

// window.onclick () => {
//       modalContainer.classList.remove("show");
//     }

// document.querySelector(".away").addEventListener("click", () => {
//   document.querySelector(".backdrop").classList.remove("active");
// });

// document.querySelectorAll(".add-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".backdrop").classList.add("active");
//   });
// });
<<<<<<< HEAD

//yuch hiij chadsangue
=======
>>>>>>> 91b63e313333c786dd2960834f3bdb008ea49088
