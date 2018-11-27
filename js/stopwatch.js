// Actions 
function startAction(){
    //Event interval stopwatch
    running = setInterval(updateAction, 10);
              
    //Change state to running
    state = 1;  
  
    //Change text buttons
    $("#activate").text("Stop");
    $("#reset").text("Lap");

}

function stopAction(){
    
    clearInterval(running);

    //Change state to running
    state = 2;  

    //Change text buttons
    $("#activate").text("Resume");
    $("#reset").text("Reset");
}


function resetAction(){
    
    hrs =    min =    sec =    ths = "00";
       
    $("#stopwatch").text(hrs + ":" + min + ":" + sec + ":" + ths);

    $("#activate").text("Start");
    
    $("#stop-list ul").empty();

}

function lapAction(){
    $("#stop-list ul").append("<li>"+$("#stopwatch").text()+"</li>");
}

function stopWatch(){
}


//Setting numbers

function updateAction(){
    
    //Adding left zero if less than 10
    addTenths();

    //Updating values
     $("#stopwatch").text(hrs+":"+min+":"+sec+":"+ths);
}

function addTenths(){
    if(ths >100){
        addSeconds();
        ths = 0;
    }else{
        ths++;
        ths = addZeroLeft(ths);
    }
}

function addSeconds(){
    if(sec >59){
        addMinutes();
        sec = 00;
    }else{
        sec++;
        sec = addZeroLeft(sec);
    }
}

function addMinutes(){
    if(min >59){
        addHours();
        min = 00;
    }else{
        min++;
        min = addZeroLeft(min);
    }
}

function addHours(){
    hrs++;
    hrs = addZeroLeft(hrs);
}
