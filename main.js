textInput="";
status="";

function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusModel").innerHTML="Status: Detecting Objects";
    textInput=document.getElementById("text").value;
}

function modelLoaded(){
    console.log("Model Is loaded!");
    status=true;
}

function draw(){
    image(video,0,0,640,420);
}

