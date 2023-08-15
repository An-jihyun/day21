const gameForm = document.querySelector("#gameForm");
const rangeInput = document.querySelector(".gameForm__range-input");
const choseInput = document.querySelector(".gameForm__chose-input");

const numResult = document.querySelector(".randomGameResult__num");
const gameResult = document.querySelector(".randomGameResult__game");
const randomGameResult = document.querySelector(".randomGameResult");

function getNum(range) {
  const rangeMax = Math.floor(range);
  return Math.floor(Math.random() * (rangeMax + 1));
}

function hiddenEvent(HTMLElement) {
  if (HTMLElement.classList.contains("hidden")) {
    HTMLElement.classList.remove("hidden");
  }
}

function numSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeInput.value;
  const choseNum = choseInput.value;
  const randomNum = getNum(rangeNum).toString();
  const result = choseNum === randomNum;

  numResult.innerText = `You chose: ${choseNum} , the machine chose: ${randomNum}`;
  gameResult.innerText = `You ${result ? "won" : "lost"} ! `;
  hiddenEvent(randomGameResult);
}

gameForm.addEventListener("submit", numSubmit);
