var video = document.getElementById("video");

video.play();

function playPause(){
    if (video.paused){
        video.play();
     } 
    else{
        video.pause();
    }

}