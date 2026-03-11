function toggleAudio(){

let audio = document.getElementById("chant");

if(audio.paused){
audio.play();
}else{
audio.pause();
}

}

function toggleMenu(){

let menu = document.getElementById("menu");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}

function setSpeed(speed){

let audio = document.getElementById("chant");
audio.playbackRate = speed;

}
