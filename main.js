x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition= window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start (){
    document.getElementById("status").innerHTML="el sistema está eschuchando ,por favor habla";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="la voz se reconoció como"+content;
    if (content=="c"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*900);
        document.getElementById("status").innerHTML="Se empezo a dibujar un circulo";
        draw_circle="set";
    }
}
if (content=="rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*900);
    document.getElementById("status").innerHTML="Se empezo a dibujar un circulo";
    draw_rect="set";
}