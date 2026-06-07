(function () {
  var splash = document.getElementById('splash');
  var enterText = document.getElementById('splash-enter');
  if (!splash) return;

  var path = window.location.pathname;
  var isHome = path === '/' || path.endsWith('/index.html') || path === '';
  var hasEntered = localStorage.getItem('gsr_entered');

  function dismiss() {
    splash.classList.add('splash-exit');
    setTimeout(function () {
      splash.remove();
      document.body.classList.add('page-ready');
    }, 600);
  }

  if (isHome && !hasEntered) {
    if (enterText) enterText.style.display = 'block';
    splash.addEventListener('click', function () {
      localStorage.setItem('gsr_entered', '1');
      dismiss();
    }, { once: true });
  } else {
    setTimeout(dismiss, 1100);
  }
})();
