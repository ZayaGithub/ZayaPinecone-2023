const boxArray = [
  {
    title: "read book",
    description: "zohioliin nom unshih",
    status: "todo",
    priority: "low",
  },
  {
    title: "code",
    description: "js hiih",
    status: "doing",
    priority: "high",
  },
  {
    title: "sleep",
    description: "9tsagt untah",
    status: "todo",
    priority: "high",
  },
];

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("text");
  document
    .getElementsByClassName("board-2")
    .appendChild(document.getElementById(cardId));
}

const render = () => {
  let boxString = "";
  boxArray.forEach((el, i) => {
    boxString += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
        <ul>
            <li>${el.title}</li>
            <li>${el.description}</li>
            <li>${el.status}</li>
            <li>${el.priority}</li>
        </ul>
        </div>`;
  });
  document.getElementById("container-1").innerHTML = boxString;
};
render();
