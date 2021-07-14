setInterval(showTime, 1000);
function showTime() {
    let hours = document.getElementById('hours');    
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    ampm.innerHTML = "AM";
  
    if (hour > 11) {
        hour -= 12;
        ampm.innerHTML = "PM";
    }
    if (hour == 0) {
        hour = 12;
        ampm.innerHTML = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}
showTime();