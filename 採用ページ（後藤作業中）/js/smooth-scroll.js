  window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get('scrollTo');

    if (targetId) {
      const maxAttempts = 20; // 最大試行回数
      let attempts = 0;

      const scrollToTarget = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          requestAnimationFrame(scrollToTarget);
        }
      };

      scrollToTarget(); // 試行スタート
    }
  });
