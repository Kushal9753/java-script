const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')


setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

}, 1000);

// const clocks = document.getElementById('clock')
clock.style.backgroundColor = "green";
