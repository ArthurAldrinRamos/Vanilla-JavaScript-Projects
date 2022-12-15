'use strict';

const modal = document.querySelector(`.modal`);
const overLay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = () => {
  console.log(`Button Clicked!`);
  modal.classList.remove(`hidden`);
  overLay.classList.remove(`hidden`);
};

const closeModal = () => {
  modal.classList.add(`hidden`);
  overLay.classList.add(`hidden`);
};

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overLay.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, e => {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

// const modal = document.querySelector(`.modal`);
// const overLay = document.querySelector(`.overlay`);
// const btnCloseModal = document.querySelector(`.close-modal`);
// const btnsOpenModal = document.querySelectorAll(`.show-modal`);
