const containerEl = document.getElementsByClassName("flex")[1];
const buttonEl = document.getElementsByTagName("button")[0];
const inputVal = document.getElementsByTagName("input")[0];

const addElement = () => {
    containerEl.innerHTML ="";

    for (let i = 1; i <= Number(inputVal.value); i++) {
        const roundEl = document.createElement("div");
        roundEl.classList.add("round");
        roundEl.style.backgroundColor = `rgb(31, ${i}, 123)`;
        containerEl.appendChild(roundEl);
    }
};
buttonEl.addEventListener("click", addElement);
