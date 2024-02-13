song1="";
song2="";
LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;

function preload() {
song1=loadSound('music.mp3');
song2=loadSound('music2.mp3');
}

function setup() {
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('PoseNet is initialised');
}

function gotPoses(){
if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX+"LeftWristY= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
}}

function draw(){
    image(video,0,0,600,500);
}