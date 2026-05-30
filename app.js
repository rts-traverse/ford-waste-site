// Ford Waste — minimal interactions (Dispatch Yard). No framework.
// Mobile nav toggle.
document.addEventListener('click', function (e) {
  var t = e.target.closest('[data-nav-toggle]');
  if (t) {
    var nav = document.getElementById('nav');
    if (nav) {
      var open = nav.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  }
});
