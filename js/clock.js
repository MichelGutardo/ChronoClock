function setClock(){
    //Set variables values
    clock();
    
    //Updating display values
    $("#clock").text(hours + ":" + minutes + ":" + seconds);

    //Updating display values
    $("title").text("ChronClock: " + hours + ":" + minutes + ":" + seconds);

}

//Set variables values
function clock(){
    //Setting time vars
    time = new Date()
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    //Adding left zero if less than 10
    hours = addZeroLeft(hours);
    minutes = addZeroLeft(minutes);
    seconds = addZeroLeft(seconds);
}