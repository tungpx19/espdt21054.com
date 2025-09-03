var notifySound = document.getElementById('notify-sound');
var mascotLine = document.getElementById('mascot-line');
var lastMsgEl = document.getElementById('last-msg');

document.getElementById('demo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var amount = document.getElementById('amount').value;
  if (amount) {
    lastMsgEl.textContent = amount + ' VND';
    mascotLine.textContent = 'Oke! Có chuyển khoản ' + amount + ' VND';
    document.getElementById('replay').disabled = false;

    if (document.getElementById('mute-toggle').getAttribute('aria-pressed') === 'false') {
      notifySound.currentTime = 0;
      notifySound.play();
    }
    setTimeout(function() {
      mascotLine.textContent = 'Chào bạn! Mình là Loa BLK ✨';
    }, 4000);
  }
});

document.getElementById('replay').addEventListener('click', function() {
  var lastMsg = lastMsgEl.textContent;
  mascotLine.textContent = 'Phát lại: ' + lastMsg;
  if (document.getElementById('mute-toggle').getAttribute('aria-pressed') === 'false') {
    notifySound.currentTime = 0;
    notifySound.play();
  }
  setTimeout(function() {
    mascotLine.textContent = 'Chào bạn! Mình là Loa BLK ✨';
  }, 3000);
});

document.getElementById('mute-toggle').addEventListener('click', function() {
  var muted = this.getAttribute('aria-pressed') === 'false';
  this.setAttribute('aria-pressed', muted ? 'true' : 'false');
  if (muted) {
    mascotLine.textContent = 'Shh... Tắt tiếng rồi!';
    this.textContent = 'Bật tiếng';
  } else {
    mascotLine.textContent = 'Chào bạn! Mình là Loa BLK ✨';
    this.textContent = 'Tắt tiếng';
  }
});
