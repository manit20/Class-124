function preload(){}

function setup(){
    canvas = createCanvas(550, 400);
    canvas.position(560, 140);
    video = createCapture(VIDEO);
    video.size(550, 418);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    colorMode(HSB);
    background(255, 204, 100);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}