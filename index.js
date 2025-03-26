let second=0;
let minutes=0;
let timer=null;

function start(){
    if(timer!==null) return;
    timer=setInterval(()=>{
        second++;
        if(second==60){
            second=0;
            minutes++;
            document.getElementById('min').textContent=minutes;
        }
        document.getElementById('sec').textContent=second;

    },1000);
    
}

function pause(){
clearInterval(timer);
timer=null;
}

function stop(){
clearInterval(timer);
second=0;
minutes=0;
timer=null;
document.getElementById('sec').textContent=second+'0';
document.getElementById('min').textContent=minutes+'0';
}