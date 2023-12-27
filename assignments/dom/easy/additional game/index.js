//elementudin select hiij avna
const inputOne = document.getElementsByTagName("input")[0];
const inputTwo = document.getElementsByTagName("input")[1];
const buttons = document.getElementsByTagName("button");

//bodlogo hariu shalgah function
const check = () => {
  //hariultig input-s avj bna
  const answer = document.getElementsByTagName("input")[2];
  //hariult tarj bnu shalgah
  if (
    Number(inputOne.value) + Number(inputTwo.value) ===
    Number(answer.value)
  ) {
    //zuv baival asuultig shinechled haiultin input-g tseverlene
    alert("Zuv bna");
    renew();
    answer.value = "";
  } else {
    alert("buruu hariult");
    answer.value = "";
  }
};

//asuult shinechleh function
const renew = () => {
  const min = 100;
  const max = 999;

  //2 input deer buhel too ugnu
  inputOne.value = Math.floor(Math.random() * (max - min) + min);
  inputTwo.value = Math.floor(Math.random() * (max - min) + min);
};

//web ehlehed renew function shuud ajillana
renew();

//2 tovch deer eventlistener ajilluulana
buttons[0].addEventListener("click", check);
buttons[1].addEventListener("click", renew);
