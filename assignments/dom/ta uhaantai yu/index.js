const answer = document.getElementsByTagName("div")[0];
const buttons = document.getElementsByTagName("button");
// const yes = document.getElementsByClassName("yes");

const run = () => {
  let min = 0;
  let max = 80;
  answer.style.top = `${Math.floor(Math.random() * (max - min) + min)}%`;
  answer.style.left =`${Math.floor(Math.random() * (max - min) + min)}%`;
};
// run();

const no = () => {
  alert("medsen ymaa");
};
// no();

buttons[1].addEventListener("click", no);
buttons[0].addEventListener("mouseenter", run);