for (let i = 1; i<= 4; i++) {
  const modalButton = document.querySelector('.js-modal-button'+ i);
  console.log(modalButton)
  const modalClose = document.querySelector('.js-close-button'+ i);
  modalButton.addEventListener('click', () => {
    const modal= document.querySelector('.js-modal' + i);
    modal.classList.add('is-open');
  });
  modalClose.addEventListener('click', () => {
    const modal= document.querySelector('.js-modal' + i);
    modal.classList.remove('is-open');
  });
}
