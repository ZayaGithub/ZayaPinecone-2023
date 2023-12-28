const data = [
  {
    status: "todo",
    title: "read book",
    description: "zohioliin nom unshih",
    priority: "low",
  },
  {
    status: "doing",
    title: "code",
    description: "js hiih",
    priority: "high",
  },
  {
    status: "todo",
    title: "sleep",
    description: "9tsagt untah",
    priority: "high",
  },
];

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(cardId));
}
const render = () => {
  let boxString = "";
  data.forEach((el, i) => {
    boxString += `<div class="cards flex" ondragover="allowDrop(event)" draggable="true"
    ondragstart="drag(event)" ondrop="drop(event)" id="card-1"${el.title + i}">
        <p>${el.status}</p>
        <p>${el.description}</p>
        <p>${el.title}</p>
        <p>${el.priority}</p>
   
  </div>`;
  });
  document.getElementById("cards-1").innerHTML = boxString;
};
render();

// const addTodo = () => {
//   const titleInputValue = document.getElementById("title-input").value;
//   const descriptionInputValue =
//     document.getElementById("description-input").value;
//   const statusInputValue = document.getElementById("status-input").value;
//   const priorityInputValue = document.getElementById("priority-input").value;
//   const inputObj = {
//     title: titleInputValue,
//     Description: descriptionInputValue,
//     Status: statusInputValue,
//     Priority: priorityInputValue,
//   };
//   boxArray.push(inputObj);
//   render();
// };

// const show = () => {
//   document.getElementsByClassName("modalContainer")[0].classList.add("show");
// };

// const allowDrop = (event) => {
//   event.preventDefault();
// };
// const drag = (event) => {
//   event.dataTransfer.setData("text", event.target.id);
// };
// const drop = (event) => {
//   event.preventDefault();
//   const boxId = event.dataTransfer.getData("text");
//   event.target.appendChild(document.getElementById(boxId));
// };
