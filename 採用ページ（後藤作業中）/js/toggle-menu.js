const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.classList.add('open');
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.classList.remove('open');
});