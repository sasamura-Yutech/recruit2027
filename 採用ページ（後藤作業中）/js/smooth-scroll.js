document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerHeight = header ? header.offsetHeight : 0;

  function scrollToWithOffset(targetSelector, duration = 600) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  document.querySelectorAll('[data-scroll-to]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // デフォルトの即移動を防ぐ
      const targetSelector = this.getAttribute('data-scroll-to');
      scrollToWithOffset(targetSelector, 700); // ← ここでスピードを調整できる（ミリ秒）
    });
  });

  // ページ読み込み後に location.hash がある場合も対応
  if (location.hash) {
    setTimeout(() => {
      scrollToWithOffset(location.hash, 600);
    }, 100); // ちょっと待ってからスクロール（画面レンダリングのため）
  }
});
