// const containerEl = document.getElementsByClassName("flex")[0];
// const button = document.getElementsByTagName("button")[0];
// let number = 1;

// const addBox = () => {
//     const box = document.createElement("div");
//     box.innerText = number;

//     box.classList.add("box");
//     containerEl.appendChild(box);
//     number++;
// };
// button.addEventListener("click", addBox);

const containerEl = document.getElementsByClassName("pink")[0];
const button = document.getElementsByTagName("button")[0];
// let color = 

const changeColor = () => {
    containerEl.style.backgroundColor = "red"
    // containerEl.style = ["red, blue, green"]
}
button.addEventListener("click", changeColor);
