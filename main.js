song="";
leftwristx=0;
rightwristx=0;
leftwristy=0;
rightwristy=0;
scorerightwrist=0;
scoreleftwrist=0;
function preload()
{
    song=loadSound("Lovely(PagalWorld).mp3");
}

function setup(){
video=createCapture(VIDEO);
canvas=createCanvas(600,500);
video.hide();
canvas.center();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
    scorerightwrist=results[0].pose.keypoints[10].score;
    scoreleftwrist=results[0].pose.keypoints[9].score;
    }
}

function modelLoaded(){
    console.log('Model Is Inaitialized !');
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
song.play();    
}