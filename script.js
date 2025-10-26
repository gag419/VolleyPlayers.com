<script>
function setCookie(name, value, days = 365) {
  const expires = days ? '; max-age=' + (days * 24 * 60 * 60) : '';
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/; SameSite=Lax';
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');
  const CONSENT_COOKIE = 'site_cookie_consent';

  // Show banner if no consent stored
  if (!getCookie(CONSENT_COOKIE)) {
    banner.classList.remove('hidden');
    banner.querySelector('.cookie-consent__card').focus();
  }

  acceptBtn.addEventListener('click', () => {
    setCookie(CONSENT_COOKIE, 'accepted', 365);
    banner.classList.add('hidden');

    // Example: load analytics after acceptance
    loadAnalytics();
  });
});

// Example analytics loader
function loadAnalytics() {
  if (window.__analytics_loaded) return;
  window.__analytics_loaded = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://example.com/analytics.js'; // replace with your analytics provider
  document.head.appendChild(s);
}
</script>
