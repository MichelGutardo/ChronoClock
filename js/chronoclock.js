//Global Vars

//Stopwatch
var hrs = "00";
var min = "00";
var sec = "00";
var ths = "00";
var state = 0;    //0 = Initial, 1 = Running, 2 = Paused
var running;

//Clock
var time = new Date()
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();


$(document).ready(function () {

    //Event interval clock
    setInterval(setClock, 1000);

    $("#activate").click(function () {
        //Initial State (Start)
        if (state == 0) {
            startAction();

        //Running State(Stop)
        } else if(state == 1) {
          stopAction();
        
        //Paused State (Resume)
        }else{
            startAction();
            
        }
    });

    $("#reset").click(function () {

        //Running (Lap)
        if (state == 1) {
            lapAction();
            
        //Stopped (Reset)
        }else if(state == 2){
            resetAction();
        }

    });
});

function addZeroLeft(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}     
