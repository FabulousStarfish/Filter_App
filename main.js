var X=0;
var Y=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/Znx7H09k/mustache.png");
}
function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video,modelLoaded);
    pose.on('pose',poses);
}
function poses(results){
    if(results.length>0){
        X=results[0].pose.nose.x-215;
        Y=results[0].pose.nose.y-115;
        console.log("X: "+ results[0].pose.nose.x);
        console.log("Y: "+ results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("Model is loaded");
}
function snap(){
    save('Filtered_Photo');
}
function draw(){
    image(video,0,0,350,300);
    image(mustache,X,Y,50,50)
}