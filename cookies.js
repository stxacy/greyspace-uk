(function () {
  if (localStorage.getItem('gsr-cookies-accepted')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML =
    '<p>We use cookies to improve your experience. By continuing to browse this site you agree to our use of cookies.</p>' +
    '<button id="cookie-banner-accept">Accept &amp; Close</button>';
  document.body.appendChild(banner);

  document.getElementById('cookie-banner-accept').addEventListener('click', function () {
    localStorage.setItem('gsr-cookies-accepted', '1');
    banner.classList.add('cookie-exit');
    setTimeout(function () { banner.remove(); }, 380);
  });
}());
