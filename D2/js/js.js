function clock() {
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.min');
    var sec = document.querySelector('.sec');
    var clocktime = new Date();
    var secDeg = 180+clocktime.getSeconds()*6;
    var minDeg = 180+clocktime.getMinutes()*6+(secDeg/60);
    var hourDeg = 180+clocktime.getHours()*30+(clocktime.getMinutes()*30/60);

    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;

    setTimeout('clock()',1000);
}

clock();