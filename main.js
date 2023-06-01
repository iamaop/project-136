Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(600,490);
    canvas.position(600,330);
    video = createCapture(VIDEO);
    // video.size(600,490);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,600,490);
}