function toggleMenu(){

let menu=document.getElementById("audioMenu");

menu.style.display =
menu.style.display==="block" ? "none":"block";

}

function toggleAudio(){

let audio=document.getElementById("chant");

if(audio.paused){
audio.play();
}else{
audio.pause();
}

}

function toggleMute(){

let audio=document.getElementById("chant");

audio.muted=!audio.muted;

}

function toggleSpeed(){

let speed=document.getElementById("speedMenu");

speed.style.display =
speed.style.display==="block" ? "none":"block";

}

function setSpeed(speed){

let audio=document.getElementById("chant");

audio.playbackRate=speed;

}
