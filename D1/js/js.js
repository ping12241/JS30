function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing'); //指向觸發
  }

function key(e) {
    var music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var box = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!music) return; //如果沒有對應則停止此函式
    box.classList.add('playing');
    music.currentTime = 0; //音樂起始值
    music.play();
    var keys = document.querySelectorAll('.box'); //所有box元素
    keys.forEach(box => box.addEventListener('transitionend', removeTransition));
}

function board(num){
    var music = document.querySelector(`audio[onclick="board(${num})"]`);
    var box = document.querySelector(`div[onclick="board(${num})"]`);
    if (!music) return; //如果沒有對應則停止此函式
    box.classList.add('playing');
    music.currentTime = 0; //音樂起始值
    music.play();
    var keys = document.querySelectorAll('.box'); //所有box元素
    keys.forEach(box => box.addEventListener('transitionend', removeTransition));
}

window.addEventListener('keydown', key);