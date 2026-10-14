// 인기 영상 나라별 탭 전환 + 지도 버튼
(function () {
  var tabs = document.querySelectorAll('.tab');
  var cards = document.querySelectorAll('.vid');
  var empty = document.getElementById('vidEmpty');

  function show(r) {
    var n = 0;
    tabs.forEach(function (t) { t.classList.toggle('on', t.dataset.r === r); });
    cards.forEach(function (c) { var on = c.dataset.region === r; c.hidden = !on; if (on) n++; });
    if (empty) empty.hidden = n > 0;
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.r); }); });
  if (tabs.length) show(tabs[0].dataset.r);

  document.querySelectorAll('.vid .map').forEach(function (m) {
    m.addEventListener('click', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      window.open(m.dataset.href, '_blank', 'noopener');
    });
  });
})();
