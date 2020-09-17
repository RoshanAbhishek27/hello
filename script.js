// const deg = 6;
// const h = document.getElementById('hr');
// const m = document.getElementById('min');
// const s = document.getElementById('sec');

// setInterval(() => {
//     let day =new Date();
//     let hh = day.getHours() * 30;
//     let mn = day.getMinutes() * deg;
//     let ss = day.getSeconds() * deg;

//     h.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
//     m.style.transform = `rotateZ(${mm}deg)`;
//     s.style.transform = `rotateZ(${ss}deg)`;

// })


var hour = document.getElementById("hr");
var minute = document.getElementById("mn");
var second = document.getElementById("sc");



function updateClock(){

    const day = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes(); 
    const ss = day.getSeconds();

    const hourDeg =(hh * 30) + (mm * 0.5);
    const minuteDeg = (mm * 6) + (ss * 0.1);
    const secondDeg = (ss * 6);

    hour.style.transform =`rotateZ(${hourDeg}deg)`;
    minute.style.transform =`rotateZ(${minuteDeg}deg)`;
    second.style.transform =`rotateZ(${secondDeg}deg)`;

}
updateClock();

setInterval (updateClock, 1000);