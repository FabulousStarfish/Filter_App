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
        console.log("Nose X: "+ results[0].pose.nose.x);
        console.log("Nose Y: "+ results[0].pose.nose.y);
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
}