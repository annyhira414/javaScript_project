function clock(){
    let date = new  Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeSet = 'AM';
    
    if (hours === 0){
        hours = 12;
    }
    if (hours > 12 ){
        hours = hours -12;
        timeSet = 'Pm';
    }

    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    let timeFormet = `${hours}: ${min}: ${sec} `

    document.getElementById('time').innerText = timeFormet;
    //document.getElementById('small').innerHTML = timeSet;
    document.querySelector('small').innerText = timeSet;

    setInterval(clock, 1000);
    
}
clock();


